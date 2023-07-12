import React, { useEffect } from "react";
import * as Styles from "./styles";
import { RangePickerPropsI } from "./types";

export function RangePicker(props: RangePickerPropsI) {
    const { width, height, isDoubleRange, styles } = props;

    useEffect(() => {
        const leftCircleWrapper = document.getElementById(
            "leftCircleWrapper"
        ) as HTMLDivElement;
        const rangePickerWrapper = document.getElementById(
            "rangePickerWrapper"
        ) as HTMLDivElement;
        const centerLineWrapper = document.getElementById(
            "centerLineWrapper"
        ) as HTMLDivElement;
        const rangeLine = document.getElementById(
            "rangeLine"
        ) as HTMLDivElement;
        const rightCircleWrapper = document.getElementById(
            "rightCircleWrapper"
        ) as HTMLDivElement;
        const circleHalfSize = leftCircleWrapper?.clientWidth / 2;
        let rangeWidth = rangePickerWrapper?.clientWidth - circleHalfSize;
        let percentage = 0;

        function singleRangeHandler(e: any) {
            let left =
                e.clientX - rangePickerWrapper?.getBoundingClientRect()?.left;
            if (
                leftCircleWrapper &&
                centerLineWrapper &&
                rangeLine &&
                left <= rangeWidth &&
                left >= circleHalfSize
            ) {
                percentage = ((left - 15) / (rangeWidth - 15)) * 100;
                leftCircleWrapper.style.left = left + "px";
                rangeLine.style.width = left + "px";
            }
        }

        function doubleRangeHandler(e: any) {
            let circlePosition =
                e.clientX - rangePickerWrapper?.getBoundingClientRect()?.left;
            let leftPosition = leftCircleWrapper?.getBoundingClientRect()?.left;
            let rightPosition = rightCircleWrapper?.getBoundingClientRect()
                ?.left;
            let distane = rightPosition - leftPosition;
            let nearByLeft = Math.abs(circlePosition + 15 - leftPosition);
            let nearByRight = Math.abs(circlePosition + 15 - rightPosition);
            let percentage = Math.round((distane / (rangeWidth - 15)) * 100);

            if (
                rangePickerWrapper &&
                rightCircleWrapper &&
                leftCircleWrapper &&
                circlePosition &&
                leftPosition &&
                rightPosition &&
                rangeLine &&
                circlePosition <= rangeWidth &&
                circlePosition >= circleHalfSize
            ) {
                if (leftPosition === rightPosition) alert("joined");
                if (nearByLeft < nearByRight) {
                    leftCircleWrapper.style.left = circlePosition + "px";
                } else {
                    rightCircleWrapper.style.left = circlePosition + "px";
                }
                rangeLine.style.width = distane + "px";
                rangeLine.style.left = leftPosition + "px";
            }
        }

        function circlePositionCalculateHandler(e: any) {
            if (isDoubleRange) {
                doubleRangeHandler(e);
            } else {
                singleRangeHandler(e);
            }
        }

        function circleClickHandler(e: any) {
            try {
                circlePositionCalculateHandler(e);
                document?.addEventListener("mouseup", circleUpHandler);
                document?.addEventListener("mousemove", circleSlidingHandler);
            } catch (e) {
                console.log("e ", e);
            }
        }

        function circleSlidingHandler(e: any) {
            circlePositionCalculateHandler(e);
        }

        function circleUpHandler() {
            document?.removeEventListener("mousemove", circleSlidingHandler);
            document?.removeEventListener("mouseup", circleUpHandler);
        }

        rangePickerWrapper?.addEventListener("mousedown", circleClickHandler);
    }, []);

    return (
        <Styles.RangePickerWrapper
            width={width}
            height={height}
            styles={styles}
            id={"rangePickerWrapper"}
        >
            <Styles.LeftCircleWrapper id={"leftCircleWrapper"} />
            <Styles.CenterLineWrapper id={"centerLineWrapper"} />
            <Styles.RangeLine id={"rangeLine"} isDoubleRange={isDoubleRange} />
            <Styles.RightCircleWrapper id={"rightCircleWrapper"} />
        </Styles.RangePickerWrapper>
    );
}
