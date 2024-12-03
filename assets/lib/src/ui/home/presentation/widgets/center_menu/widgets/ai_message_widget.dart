import 'dart:async';
import 'package:costartravel/src/ui/resources/chat_colors.dart';
import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class AiMessageWidget extends StatefulWidget {
  final String message;
  final bool useAnimation;
  final ValueChanged<bool>? onTypingComplete; // Callback parameter

  const AiMessageWidget({
    super.key,
    required this.message,
    this.useAnimation = true,
    this.onTypingComplete, // Callback parameter
  });

  @override
  State<AiMessageWidget> createState() => _AiMessageWidgetState();
}

class _AiMessageWidgetState extends State<AiMessageWidget>
    with TickerProviderStateMixin {
  late List<String> words; // Splits message into words
  String displayedMessage = ""; // Text shown progressively
  late List<AnimationController> controllers; // Controllers for word animations
  late List<Animation<double>> fadeAnimations;
  int currentWordIndex = 0; // Tracks which word is being typed
  Timer? timer;
  double progress = 0.0; // Tracks typing progress

  @override
  void initState() {
    super.initState();
    _initializeWords();
    _setupAnimations();

    if (widget.useAnimation) {
      _startTyping();
    } else {
      setState(() {
        displayedMessage = widget.message; // Show all words at once
        // Do not call _notifyTypingComplete when useAnimation is false
      });
    }
  }


  /// Splits message into words for progressive typing
  void _initializeWords() {
    words = widget.message.split(' ');
    displayedMessage = ""; // Start with no visible text
    progress = 0.0; // Reset progress
  }

  /// Sets up fade-in animations for words
  void _setupAnimations() {
    controllers = List.generate(
      words.length,
          (_) => AnimationController(
        vsync: this,
        duration: const Duration(milliseconds: 300), // Adjust fade duration
      ),
    );

    fadeAnimations = controllers
        .map(
          (controller) => Tween<double>(begin: 0.0, end: 1.0).animate(
        CurvedAnimation(parent: controller, curve: Curves.easeIn),
      ),
    )
        .toList();
  }

  /// Starts progressive typing with periodic updates
  void _startTyping() {
    currentWordIndex = 0; // Start from the first word
    timer = Timer.periodic(
      const Duration(milliseconds: 50), // Typing speed
          (timer) {
        if (currentWordIndex < words.length) {
          setState(() {
            // Append the next word to the displayed text
            displayedMessage = displayedMessage.isEmpty
                ? words[currentWordIndex]
                : "$displayedMessage ${words[currentWordIndex]}";

            // Start fade-in animation for the word
            controllers[currentWordIndex].forward();

            // If this is the last word, add listener to the animation

            if (currentWordIndex != 0 && words.length - 1 != 0 && currentWordIndex == words.length - 1) {
              Future.delayed(const Duration(milliseconds: 500), () {
                _notifyTypingComplete(true);
              });
            }

            currentWordIndex++;

            // Update progress based on words typed
            _updateProgress(currentWordIndex / words.length);
          });
        } else {
          timer.cancel(); // Stop typing when all words are displayed
        }
      },
    );
  }

  void _updateProgress(double value) {
    progress = value; // Update progress value
    if (widget.onTypingComplete != null) {
      widget.onTypingComplete!(false);
    }
  }

  /// Notifies parent widget of typing status
  void _notifyTypingComplete(bool isComplete) {
    if (widget.onTypingComplete != null) {
      widget.onTypingComplete!(isComplete);
    }
  }

  @override
  void didUpdateWidget(AiMessageWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.message != widget.message || oldWidget.useAnimation != widget.useAnimation) {
      timer?.cancel(); // Cancel ongoing timer
      _disposeControllers(); // Dispose previous animations
      _initializeWords(); // Reinitialize words
      _setupAnimations(); // Re-setup animations

      if (widget.useAnimation) {
        _startTyping(); // Restart typing if animation is enabled
      } else {
        setState(() {
          displayedMessage = widget.message; // Show full message instantly
          _updateProgress(1.0); // Mark as complete immediately
          _notifyTypingComplete(true); // Notify typing complete immediately
        });
      }
    }
  }

  /// Disposes animation controllers
  void _disposeControllers() {
    for (var controller in controllers) {
      controller.dispose();
    }
  }

  @override
  void dispose() {
    timer?.cancel(); // Cancel typing timer
    _disposeControllers(); // Dispose controllers
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isMobile = MediaQuery.of(context).size.width < 600;

    if (widget.message.trim().isEmpty) {
      return const SizedBox.shrink(); // Avoid rendering if message is empty
    }

    return Padding(
      padding:  EdgeInsets.only(left: 10.w),
      child: Align(
        alignment: Alignment.centerLeft,
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Sparkle icon
            SizedBox(
              width: isMobile ? 20.w : 25.w,
              height: isMobile ? 20.h : 25.h,
              child: Image.asset("assets/images/ai_sparkles.png"),
            ),
            SizedBox(width: 10.w),
            Expanded(
              child: Stack(
                children: [
                  MarkdownBody(
                    data: displayedMessage, // Render progressively revealed message
                    styleSheet: MarkdownStyleSheet(
                      p: TextStyle(fontSize: 13.sp,color: ChatColors.kHomeIconColor),
                    ),
                  ),
                  Positioned.fill(
                    child: AnimatedOpacity(
                      opacity: progress >= 1.0 ? 1.0 : 0.0, // Fade-in effect
                      duration: const Duration(milliseconds: 300),
                      child: Container(color: Colors.transparent),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}






// import 'dart:async';
// import 'package:flutter/material.dart';
// import 'package:flutter_markdown/flutter_markdown.dart';
// import 'package:flutter_screenutil/flutter_screenutil.dart';
//
// class AiMessageWidget extends StatefulWidget {
//   final String message;
//   final bool useAnimation;
//
//   const AiMessageWidget({
//     super.key,
//     required this.message,
//     this.useAnimation = true,
//   });
//
//   @override
//   State<AiMessageWidget> createState() => _AiMessageWidgetState();
// }
//
// class _AiMessageWidgetState extends State<AiMessageWidget>
//     with TickerProviderStateMixin {
//   late List<String> words;
//   late List<AnimationController> controllers;
//   late List<Animation<double>> fadeAnimations;
//   int currentWordIndex = 0;
//   Timer? timer;
//   bool isTypingComplete = false;
//
//   @override
//   void initState() {
//     super.initState();
//     _initializeWords();
//     _setupAnimations();
//     if (widget.useAnimation) {
//       _startTyping();
//     } else {
//       currentWordIndex = words.length; // Show all words at once
//       isTypingComplete = true;
//     }
//   }
//
//   void _initializeWords() {
//     words = widget.message.split(' '); // Split the message into words
//   }
//
//   void _setupAnimations() {
//     controllers = List.generate(
//       words.length,
//           (_) => AnimationController(
//         vsync: this,
//         duration: const Duration(milliseconds: 300), // Adjust duration for fade-in
//       ),
//     );
//
//     fadeAnimations = controllers
//         .map(
//           (controller) => Tween<double>(begin: 0.0, end: 1.0).animate(
//         CurvedAnimation(parent: controller, curve: Curves.easeIn),
//       ),
//     )
//         .toList();
//   }
//
//   void _startTyping() {
//     currentWordIndex = 0;
//     isTypingComplete = false;
//
//     timer = Timer.periodic(
//       const Duration(milliseconds: 300), // Adjust word reveal speed
//           (timer) {
//         if (currentWordIndex < words.length) {
//           controllers[currentWordIndex].forward(); // Trigger fade-in for the word
//           currentWordIndex++;
//           setState(() {}); // Update UI to display the next word
//         } else {
//           timer.cancel();
//           isTypingComplete = true;
//         }
//       },
//     );
//   }
//
//   @override
//   void didUpdateWidget(AiMessageWidget oldWidget) {
//     super.didUpdateWidget(oldWidget);
//     if (oldWidget.message != widget.message || oldWidget.useAnimation != widget.useAnimation) {
//       timer?.cancel();
//       _disposeControllers();
//       _initializeWords();
//       _setupAnimations();
//       if (widget.useAnimation) {
//         _startTyping();
//       } else {
//         setState(() {
//           currentWordIndex = words.length;
//           isTypingComplete = true;
//         });
//       }
//     }
//   }
//
//   void _disposeControllers() {
//     for (var controller in controllers) {
//       controller.dispose();
//     }
//   }
//
//   @override
//   void dispose() {
//     timer?.cancel();
//     _disposeControllers();
//     super.dispose();
//   }
//
//   @override
//   Widget build(BuildContext context) {
//     final isMobile = MediaQuery.of(context).size.width < 600;
//
//     if (widget.message.trim().isEmpty) {
//       return const SizedBox.shrink();
//     }
//
//     return Align(
//       alignment: Alignment.centerLeft,
//       child: Row(
//         crossAxisAlignment: CrossAxisAlignment.start,
//         children: [
//           // Sparkle icon
//           SizedBox(
//             width: isMobile ? 20.w : 25.w,
//             height: isMobile ? 20.h : 25.h,
//             child: Image.asset("assets/images/ai_sparkles.png"),
//           ),
//           SizedBox(width: 10.w),
//           Expanded(
//             child: Wrap(
//               spacing: 4.0, // Add spacing between words
//               runSpacing: 3.0, // Add spacing between lines
//               children: List.generate(
//                 words.length,
//                     (index) => AnimatedBuilder(
//                   animation: fadeAnimations[index],
//                   builder: (context, child) {
//                     return Opacity(
//                       opacity: fadeAnimations[index].value,
//                       child: Text(
//                         words[index],
//                         style: TextStyle(fontSize: 15.sp),
//                       ),
//                     );
//                   },
//                 ),
//               ).take(currentWordIndex).toList(), // Only show revealed words
//             ),
//           ),
//         ],
//       ),
//     );
//   }
// }

