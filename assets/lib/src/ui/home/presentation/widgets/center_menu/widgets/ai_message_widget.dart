import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class AiMessageWidget extends StatefulWidget {
  final String message;
  final bool useAnimation;

  const AiMessageWidget({
    super.key,
    required this.message,
    this.useAnimation = true,
  });

  @override
  State<AiMessageWidget> createState() => _AiMessageWidgetState();
}

class _AiMessageWidgetState extends State<AiMessageWidget>
    with TickerProviderStateMixin {
  late String aggregatedMessage;
  int currentCharIndex = 0;
  Timer? timer;
  bool isTypingComplete = false;

  @override
  void initState() {
    super.initState();
    aggregatedMessage = '';
    if (widget.useAnimation) {
      _startTyping();
    } else {
      aggregatedMessage = widget.message;
      isTypingComplete = true;
    }
  }

  void _startTyping() {
    currentCharIndex = 0;
    isTypingComplete = false;

    timer = Timer.periodic(
      const Duration(milliseconds: 3),
          (timer) {
        if (currentCharIndex < widget.message.length) {
          setState(() {
            aggregatedMessage += widget.message[currentCharIndex];
            currentCharIndex++;
          });
        } else {
          timer.cancel();
          setState(() {
            isTypingComplete = true;
          });
        }
      },
    );
  }

  @override
  void didUpdateWidget(AiMessageWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.message != widget.message || oldWidget.useAnimation != widget.useAnimation) {
      timer?.cancel();
      if (widget.useAnimation) {
        aggregatedMessage = '';
        _startTyping();
      } else {
        setState(() {
          aggregatedMessage = widget.message;
          isTypingComplete = true;
        });
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

    // Check if the message is empty
    if (widget.message.trim().isEmpty) {
      return const SizedBox.shrink(); // Return an empty widget
    }

    return Align(
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
            child: MarkdownBody(
              data: aggregatedMessage,
              styleSheet: MarkdownStyleSheet(
                p: TextStyle(fontSize: 15.sp),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
