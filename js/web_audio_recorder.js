// Web Audio API implementation for voice recording
class WebAudioRecorder {
    constructor() {
        this.mediaRecorder = null;
        this.audioContext = null;
        this.stream = null;
        this.isRecording = false;
        this.audioChunks = [];
        this.onDataCallback = null;
    }

    async initialize() {
        try {
            console.log('WebAudioRecorder: Initializing...');
            
            // Request microphone permission
            this.stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    sampleRate: 16000,
                    channelCount: 1,
                    echoCancellation: true,
                    noiseSuppression: true
                }
            });
            
            console.log('WebAudioRecorder: Microphone access granted');
            
            // Create audio context
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)({
                sampleRate: 16000
            });
            
            // Create media recorder for PCM data
            this.mediaRecorder = new MediaRecorder(this.stream, {
                mimeType: 'audio/webm;codecs=pcm'
            });
            
            this.setupRecorderEvents();
            console.log('WebAudioRecorder: Initialized successfully');
            return true;
            
        } catch (error) {
            console.error('WebAudioRecorder: Failed to initialize:', error);
            return false;
        }
    }

    setupRecorderEvents() {
        this.mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                this.audioChunks.push(event.data);
                this.processAudioChunk(event.data);
            }
        };

        this.mediaRecorder.onstop = () => {
            console.log('WebAudioRecorder: Recording stopped');
        };

        this.mediaRecorder.onerror = (error) => {
            console.error('WebAudioRecorder: Recording error:', error);
        };
    }

    async processAudioChunk(blob) {
        try {
            const arrayBuffer = await blob.arrayBuffer();
            const uint8Array = new Uint8Array(arrayBuffer);
            
            // Convert to base64
            const base64 = btoa(String.fromCharCode.apply(null, uint8Array));
            
            // Send to Flutter
            if (this.onDataCallback) {
                this.onDataCallback(base64);
            }
            
            console.log(`WebAudioRecorder: Processed ${uint8Array.length} bytes`);
            
        } catch (error) {
            console.error('WebAudioRecorder: Failed to process audio chunk:', error);
        }
    }

    startRecording(callback) {
        if (!this.mediaRecorder || this.isRecording) {
            console.warn('WebAudioRecorder: Cannot start recording');
            return false;
        }

        try {
            this.onDataCallback = callback;
            this.audioChunks = [];
            
            // Start recording with small chunks for real-time processing
            this.mediaRecorder.start(100); // 100ms chunks
            this.isRecording = true;
            
            console.log('WebAudioRecorder: Recording started');
            return true;
            
        } catch (error) {
            console.error('WebAudioRecorder: Failed to start recording:', error);
            return false;
        }
    }

    stopRecording() {
        if (this.mediaRecorder && this.isRecording) {
            this.mediaRecorder.stop();
            this.isRecording = false;
            console.log('WebAudioRecorder: Recording stopped');
            return true;
        }
        return false;
    }

    dispose() {
        this.stopRecording();
        
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
            this.stream = null;
        }
        
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
        
        this.mediaRecorder = null;
        this.onDataCallback = null;
        console.log('WebAudioRecorder: Disposed');
    }
}

// Global instance
window.webAudioRecorder = new WebAudioRecorder();

// Flutter interface functions
window.initWebAudioRecorder = async function() {
    return await window.webAudioRecorder.initialize();
};

window.startWebAudioRecording = function(callback) {
    return window.webAudioRecorder.startRecording(callback);
};

window.stopWebAudioRecording = function() {
    return window.webAudioRecorder.stopRecording();
};

window.disposeWebAudioRecorder = function() {
    window.webAudioRecorder.dispose();
};

console.log('WebAudioRecorder: JavaScript interface loaded');