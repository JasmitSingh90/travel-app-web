import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:omegaappcalling/src/ui/resources/chat_colors.dart';
import 'package:omegaappcalling/src/ui/support/responsive_utils/responsive_widget_utils.dart';

class TrackHistoryWidget extends StatefulWidget {
  final VoidCallback onTrackClickListener;
  final bool isRotated;

  const TrackHistoryWidget({
    Key? key,
    required this.onTrackClickListener,
    required this.isRotated,
  }) : super(key: key);

  @override
  _TrackHistoryWidgetState createState() => _TrackHistoryWidgetState();
}

class _TrackHistoryWidgetState extends State<TrackHistoryWidget>
    with SingleTickerProviderStateMixin {
  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveWidgetUtils.isMobile2(context);
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          "History",
          style: TextStyle(
            fontSize: 17.sp,
            color: isMobile
                ? ChatColors.flightTextColor
                : ChatColors.kHomeIconColor,
          ),
        ),
        SizedBox(width: 10.w),
        InkWell(
          onTap: widget.onTrackClickListener,
          child: AnimatedRotation(
            turns: widget.isRotated ? 0 : 0.5, // Adjusted for correct rotation
            duration: const Duration(milliseconds: 300),
            child: Container(
              width: isMobile ? 45.w : 60.w,
              height: isMobile ? 45.h : 60.h,
              padding: EdgeInsets.all(isMobile ? 12 : 23).r,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                border: Border.all(
                  width: isMobile ? 2.w : 1.w,
                  color: ChatColors.circleColor,
                ),
              ),
              child: Center(
                child: SvgPicture.asset("assets/images/arrow_up.svg"),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
