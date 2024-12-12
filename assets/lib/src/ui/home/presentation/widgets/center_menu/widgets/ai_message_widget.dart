import 'dart:async';
import 'package:costartravel/src/ui/resources/chat_colors.dart';
import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import 'dart:async';
import 'package:costartravel/src/ui/resources/chat_colors.dart';
import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';

class AiMessageWidget extends StatefulWidget {
  final String message;
  final bool useAnimation;
  final ValueChanged<bool>? onTypingComplete;

  const AiMessageWidget({
    Key? key,
    required this.message,
    this.useAnimation = true,
    this.onTypingComplete,
  }) : super(key: key);

  @override
  State<AiMessageWidget> createState() => _AiMessageWidgetState();
}

class _AiMessageWidgetState extends State<AiMessageWidget> {
  List<String> words = [];
  int currentWordIndex = 0;
  String displayedMessage = "";
  Timer? timer;

  @override
  void initState() {
    super.initState();
    _initializeWords(widget.message);
    if (widget.useAnimation) {
      _startTyping();
    } else {
      // If no animation, show entire message instantly
      displayedMessage = widget.message;
      currentWordIndex = words.length;
      _notifyComplete();
    }
  }

  void _initializeWords(String text) {
    // Split into words
    final newWords = text.split(' ');
    // Add only new words if already had some words
    if (newWords.length > words.length) {
      final additionalWords = newWords.sublist(words.length);
      words.addAll(additionalWords);
    }
  }

  void _startTyping() {
    timer?.cancel();
    timer = Timer.periodic(const Duration(milliseconds: 80), (t) {
      if (currentWordIndex < words.length) {
        setState(() {
          if (displayedMessage.isEmpty) {
            displayedMessage = words[currentWordIndex];
          } else {
            displayedMessage += " ${words[currentWordIndex]}";
          }
          currentWordIndex++;
        });
        // Check if we're done typing all currently available words
        if (currentWordIndex == words.length) {
          _notifyComplete();
        } else {
          _notifyProgress();
        }
      } else {
        t.cancel();
      }
    });
  }

  void _notifyComplete() {
    if (widget.onTypingComplete != null) {
      widget.onTypingComplete!(true);
    }
  }

  void _notifyProgress() {
    if (widget.onTypingComplete != null) {
      widget.onTypingComplete!(false);
    }
  }

  @override
  void didUpdateWidget(AiMessageWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.message != widget.message) {
      final oldWordCount = words.length;
      _initializeWords(widget.message);

      // If there are new words to type
      if (words.length > oldWordCount && widget.useAnimation) {
        // If typing had completed previously and we got new words, resume typing
        if (currentWordIndex < words.length) {
          _startTyping();
        }
      } else if (!widget.useAnimation) {
        // If animation is off, display all at once
        setState(() {
          displayedMessage = widget.message;
          currentWordIndex = words.length;
        });
        _notifyComplete();
      }
    }
  }

  @override
  void dispose() {
    timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isMobile = MediaQuery.of(context).size.width < 600;

    if (widget.message.trim().isEmpty) {
      return const SizedBox.shrink();
    }

    return Padding(
      padding:  EdgeInsets.only(left: 10.0,right: 20.sp),
      child: Align(
        alignment: Alignment.centerLeft,
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(
              width: isMobile ? 20.0 : 25.0,
              height: isMobile ? 20.0 : 25.0,
              child: Image.asset("assets/images/ai_sparkles.png"),
            ),
            const SizedBox(width: 10.0),
            Expanded(
              child: MarkdownBody(
                data: displayedMessage,
                styleSheet: MarkdownStyleSheet(
                  p: TextStyle(fontSize: 13.sp,fontWeight: FontWeight.w400, color: ChatColors.kHomeIconColor),
                ),
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

