import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:omegaappcalling/src/ui/resources/chat_colors.dart';

class MyMessageWidget extends StatelessWidget {
  final String message;

  const MyMessageWidget({super.key, required this.message});

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.centerRight,
      child: Container(
        margin: const EdgeInsets.only(top: 30).r,
        padding: EdgeInsets.symmetric(
          horizontal: 10.w, // Use dynamic padding values
          vertical: 12.h,
        ),
        decoration: const BoxDecoration(
          color: ChatColors.kHomeJustTalkColor,
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(16),
            topRight: Radius.circular(16),
            bottomRight: Radius.circular(4),
            bottomLeft: Radius.circular(16),
          ),
        ),
        constraints: BoxConstraints(
          maxWidth: MediaQuery.of(context).size.width * 0.8,
        ),
        child: Text(
          message,
          style: TextStyle(
            fontSize: 14.2.sp,
            height: 1.5,
            color: ChatColors.blueTextColor,
          ),
        ),
      ),
    );
  }
}
