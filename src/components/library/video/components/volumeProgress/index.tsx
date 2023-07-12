import React, { useEffect } from "react";
import { VolumeProgressT } from "./types";
import * as Styles from "./styles";

export function VolumeProgress(props: VolumeProgressT) {
    // props
    const { isVolumeMuted } = props;

    // volume up position setup
    useEffect(() => {
        let circle = document.getElementById("circle");
        if (circle) {
            if (isVolumeMuted) {
                circle.style.left = "0px";
            } else circle.style.left = "calc(100% - 7px)";
        }
    }, [isVolumeMuted]);

    // mousedown and swipe
    useEffect(() => {
        let video = document.getElementById("video_player") as HTMLVideoElement;
        let volumeProgress = document.getElementById("volume_progress");
        let circle = document.getElementById("circle");
        let volumeFiller = document.getElementById("volume_filler");

        if (!volumeProgress) return;

        function volumeCalculation(e: any) {
            if (volumeProgress) {
                let left =
                    e.clientX -
                    Math.floor(volumeProgress.getBoundingClientRect().left);
                let volumeCount = left / (volumeProgress.clientWidth - 7);
                if (
                    circle &&
                    volumeFiller &&
                    left >= 7 &&
                    left <= volumeProgress.clientWidth - 7
                ) {
                    circle.style.left = left + "px";
                    volumeFiller.style.width =
                        left + circle.clientWidth / 2 + "px";
                    video.volume = volumeCount;
                }
            }
        }

        const mouseDownHandler = function (e: any) {
            volumeCalculation(e);

            volumeProgress?.addEventListener("mousemove", mouseMoveHandler);
            volumeProgress?.addEventListener("mouseup", mouseUpHandler);
        };

        const mouseMoveHandler = function (e: any) {
            volumeCalculation(e);
        };

        const mouseUpHandler = function () {
            volumeProgress?.removeEventListener("mousemove", mouseMoveHandler);
            volumeProgress?.removeEventListener("mouseup", mouseUpHandler);
        };

        if (volumeProgress) {
            // Attach the handler
            volumeProgress.addEventListener("mousedown", mouseDownHandler);
        }
    }, []);

    return (
        <Styles.VolumeProgressWrapper id={"volume_progress"}>
            <Styles.VolumeProgressBlock>
                <Styles.VolumeFiller
                    id={"volume_filler"}
                    isVolumeMuted={isVolumeMuted}
                ></Styles.VolumeFiller>
                <Styles.Circle id={"circle"}></Styles.Circle>
            </Styles.VolumeProgressBlock>
        </Styles.VolumeProgressWrapper>
    );
}
