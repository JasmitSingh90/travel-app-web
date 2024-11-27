import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:omegaappcalling/src/support/enums.dart';
import 'package:omegaappcalling/src/ui/resources/chat_colors.dart';
import 'package:omegaappcalling/src/ui/support/responsive_utils/responsive_widget_utils.dart';
import 'package:omegaappcalling/src/services/chat/chat_service.dart';
import 'package:omegaappcalling/src/ui/chat/bloc/chat_bloc.dart';
import 'package:omegaappcalling/src/ui/chat/bloc/events/chat_event.dart';
import 'package:image_picker/image_picker.dart';
import 'package:omegaappcalling/src/ui/support/widgets/custom_message.dart';

class ChatFieldWidget extends StatefulWidget {
  final ChatBloc chatBloc;
  final Function(bool) typingAnimationFunction;
  final Function({bool performForceScroll, bool performScrollForImage})
      scrollListToEnd;
  final Function(bool isSet) setFocusStatus;

  const ChatFieldWidget({
    super.key,
    required this.chatBloc,
    required this.typingAnimationFunction,
    required this.scrollListToEnd,
    required this.setFocusStatus,
  });

  @override
  _ChatFieldWidgetState createState() => _ChatFieldWidgetState();
}

class _ChatFieldWidgetState extends State<ChatFieldWidget>
    with SingleTickerProviderStateMixin {
  final TextEditingController _chatTextController = TextEditingController();
  final ScrollController _scrollController = ScrollController();
  final FocusNode _focusNode = FocusNode();
  bool _isAnimating = true;

  late AnimationController _animationController;
  late Animation<Offset> _slideAnimation;
  bool isExpanded = false;

  @override
  void initState() {
    super.initState();

    // Initialize the animation controller and animation
    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2), // Animation duration
    );

    _slideAnimation = Tween<Offset>(
      begin: const Offset(0, 2), // Start off-screen
      end: Offset.zero, // End at original position
    ).animate(
      CurvedAnimation(
        parent: _animationController,
        curve: Curves.easeOut,
      ),
    );

    Future.delayed(const Duration(seconds: 1), () {
      _animationController.forward().then((_) {
        setState(() {
          _isAnimating = false;
        });
      });
    });
    _focusNode.addListener(_handleFocusChange);
  }

  void _handleFocusChange() {
    setState(() {
      isExpanded = _focusNode.hasFocus;
    });
    widget.setFocusStatus(_focusNode.hasFocus);
    if (!_focusNode.hasFocus) {
      _scrollController.jumpTo(0);
    }
  }

  Future<void> _sendMessage() async {
    if (_chatTextController.text.trim().isEmpty) return;

    try {
      final message = _chatTextController.text.trim();
      _chatTextController.clear();
      _focusNode.unfocus();
      widget.typingAnimationFunction(false);

      widget.chatBloc.isMessageSent = true;

      widget.chatBloc.add(SaveMessage(
        message,
        translatedMessage: message,
        chatDataType: ChatDataType.message,
      ));

      widget.scrollListToEnd(performForceScroll: true);
    } catch (e) {
      showCustomMessage('Error while sending message', context: context);
    }
  }

  void _toggleImageSelection() {
    print("Image selection triggered");
  }

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveWidgetUtils.isMobile2(context);
    final maxHeight = isMobile ? 100.h : 150.h;
    return Expanded(
      child: SlideTransition(
        position: _slideAnimation, // Use slide animation
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          constraints: BoxConstraints(
            maxHeight: isExpanded ? maxHeight : (isMobile ? 50.h : 68.h),
          ),
          decoration: BoxDecoration(
            color: Colors.white60,
            borderRadius: BorderRadius.circular(isMobile ? 45 : 25),
          ),
          child: TextField(
            enabled: !_isAnimating,
            controller: _chatTextController,
            focusNode: _focusNode,
            cursorHeight: 20.h,
            minLines: 1,
            maxLines: isExpanded ? null : 1,
            keyboardType: TextInputType.multiline,
            textInputAction: TextInputAction.send,
            onSubmitted: (_) => _sendMessage(),
            decoration: InputDecoration(
                hintText: "How can I help you?",
                hintStyle: TextStyle(
                  color: ChatColors.flightTextColor,
                  fontSize: 15.sp,
                ),
                contentPadding: const EdgeInsets.only(
                        left: 20, right: 20, top: 17, bottom: 17)
                    .r,
                border: InputBorder.none,
                suffixIcon: Wrap(
                  alignment: WrapAlignment.center,
                  crossAxisAlignment: WrapCrossAlignment.center,
                  runAlignment: WrapAlignment.center,
                  children: [
                    InkWell(
                      onTap: () {},
                      child: SizedBox(
                        height: ResponsiveWidgetUtils.isMobile2(context)
                            ? 50.h
                            : 60.h,
                        child:
                            Image.asset("assets/images/chat_field_image.png"),
                      ),
                    ),
                    InkWell(
                      onTap: () {},
                      child: SizedBox(
                        height: ResponsiveWidgetUtils.isMobile2(context)
                            ? 50.h
                            : 60.h,
                        child:
                            Image.asset("assets/images/video_field_image.png"),
                      ),
                    ),
                  ],
                )),
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _focusNode.removeListener(_handleFocusChange);
    _scrollController.dispose();
    _chatTextController.dispose();
    _focusNode.dispose();
    _animationController.dispose(); // Dispose the animation controller
    super.dispose();
  }
}
