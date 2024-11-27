
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:omegaappcalling/src/ui/resources/chat_colors.dart';

class TrackBottomWidget extends StatelessWidget {
  final VoidCallback onTrackClickListener;
  final MainAxisAlignment? mainAxisAlignment;
  const TrackBottomWidget(
      {super.key,
        required this.onTrackClickListener,
        this.mainAxisAlignment = MainAxisAlignment.spaceBetween});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: mainAxisAlignment!,
      children: [
        Text("Task", style: TextStyle(fontSize: 17.sp),),
        SizedBox(width: 10.w),
        InkWell(
          onTap: onTrackClickListener,
          child: Container(
            width: 46.w,
            height: 46.h,
            padding: const EdgeInsets.all(7).r,
            decoration: BoxDecoration(
                shape: BoxShape.circle,
                border: Border.all(width: 1.w, color: ChatColors.chatLoginGoogleTextColor)
            ),
            child: Icon(
              Icons.keyboard_arrow_down,
              color: ChatColors.kChatLightTextColor,
              size: 20.sp,
            ),
          ),
        )
      ],
    );
  }
}
