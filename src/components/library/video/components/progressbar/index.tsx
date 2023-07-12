import React, { useEffect } from "react";
import { timeFormat } from "@utils/time";
import { ProgressBarT } from "./types";
import * as Styles from "./styles";

export function ProgressBar(props: ProgressBarT) {
    const { setIsplay } = props;

    // progress
    useEffect(() => {
        let video = document.getElementById("video_player") as HTMLVideoElement;
        let videoProgress = document.getElementById("progressVideoBar");
        let toolTip = document.getElementById("videoTooltip");
        let progressCurrent = document.getElementById("progressCurrentLoader");
        let timeText = document.getElementById("timeText");
        var hoverLocalTime = 0;

        if (!videoProgress) return;

        function hoveringCalculation(e: any) {
            if (video && videoProgress && progressCurrent) {
                var videoProgressLength =
                    videoProgress.clientWidth / video?.duration;
                var leftPosition =
                    e.clientX - videoProgress.getBoundingClientRect().left;
                hoverLocalTime = Math.round(leftPosition / videoProgressLength);

                if (
                    toolTip &&
                    timeText &&
                    leftPosition >= 0 &&
                    leftPosition <= videoProgress.clientWidth
                ) {
                    leftPosition = leftPosition - toolTip.clientWidth / 2;
                    toolTip.style.display = "block";
                    video.currentTime = hoverLocalTime;
                    progressCurrent.style.width = hoverLocalTime / 100 + "%";
                    timeText.innerHTML = timeFormat(hoverLocalTime);

                    if (
                        leftPosition > 0 &&
                        leftPosition <
                            videoProgress.clientWidth - toolTip.clientWidth
                    ) {
                        toolTip.style.left = leftPosition + "px";
                    }
                }
            }
        }

        function mouseDownHandler(e: any) {
            try {
                video?.pause();
                hoveringCalculation(e);
            } catch (e) {
                console.log("e", e);
            }

            videoProgress?.addEventListener("mouseup", mouseUphandler);
        }

        function mouseUphandler() {
            if (toolTip && video) {
                var playPromise = video.play();

                if (playPromise !== undefined) {
                    playPromise
                        .then((_) => {
                            if (toolTip) {
                                toolTip.style.display = "none";
                            }
                            setIsplay(true);
                            console.log("mouseUp");
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            }
            videoProgress?.removeEventListener("mouseup", mouseUphandler);
        }

        if (videoProgress) {
            // Attach the handler
            videoProgress.addEventListener("mousedown", mouseDownHandler);
        }
    }, []);

    useEffect(() => {
        let video = document.getElementById("video_player") as HTMLVideoElement;
        let videoProgress = document.getElementById("progressVideoBar");
        let toolTip = document.getElementById("videoTooltip");
        let progressCurrent = document.getElementById("progressCurrentLoader");
        let timeText = document.getElementById("timeText");
        var hoverLocalTime;

        if (!videoProgress) return;

        function hoveringCalculation(e: any) {
            if (video && videoProgress && progressCurrent) {
                var videoProgressLength =
                    videoProgress.clientWidth / video?.duration;
                var leftPosition =
                    e.clientX -
                    Math.round(videoProgress.getBoundingClientRect().left);
                hoverLocalTime = leftPosition / videoProgressLength;

                if (
                    toolTip &&
                    timeText &&
                    leftPosition >= 0 &&
                    leftPosition <= videoProgress.clientWidth
                ) {
                    toolTip.style.display = "block";
                    leftPosition = leftPosition - toolTip.clientWidth / 2;
                    timeText.innerHTML = timeFormat(hoverLocalTime);
                    if (
                        leftPosition > 0 &&
                        leftPosition <
                            videoProgress.clientWidth - toolTip.clientWidth
                    ) {
                        toolTip.style.left = leftPosition + "px";
                    }
                }
            }
        }

        function mouseMoveHandler(e: any) {
            try {
                hoveringCalculation(e);
            } catch (e) {
                console.log("e", e);
            }
        }

        function mouseOutHandler() {
            if (toolTip) {
                toolTip.style.display = "none";
            }
        }

        if (videoProgress) {
            // Attach the handler
            videoProgress.addEventListener("mousemove", mouseMoveHandler);
            videoProgress.addEventListener("mouseout", mouseOutHandler);

            return () => {
                videoProgress?.removeEventListener(
                    "mousemove",
                    mouseMoveHandler
                );
                videoProgress?.removeEventListener("mouseout", mouseOutHandler);
            };
        }
    }, []);

    useEffect(() => {
        let video = document.getElementById("video_player") as HTMLVideoElement;
        let progressBuffred = document.getElementById("progressBuffredLoader");
        let loader = document.getElementById("loader");

        video.onwaiting = function () {
            if (progressBuffred) progressBuffred.style.left = 0 + "%";
            loader?.classList.add("videoLoader");
        };
    }, []);

    useEffect(() => {
        let video = document.getElementById("video_player") as HTMLVideoElement;
        let progressCurrent = document.getElementById("progressCurrentLoader");
        let videoProgress = document.getElementById("progressVideoBar");
        let progressBuffred = document.getElementById("progressBuffredLoader");

        function timeBufferHandler() {
            var range = 0;
            var bf = video?.buffered;
            let time = video?.currentTime;

            try {
                while (!(bf.start(range) <= time && time <= bf.end(range))) {
                    range += 1;
                }
                var loadStartPercentage = bf.start(range) / video?.duration;
                var loadEndPercentage = bf.end(range) / video?.duration;
                var loadPercentage = loadEndPercentage - loadStartPercentage;

                if (progressBuffred) {
                    progressBuffred.style.width = loadPercentage * 100 + "%";
                    progressBuffred.style.left =
                        loadStartPercentage * 100 + "%";
                }
            } catch (e) {
                console.log(e);
            }
        }

        function timeupdate() {
            let time = video && video.currentTime;
            let duration = video && video.duration;
            if (progressCurrent) {
                if (video.paused) return;
                progressCurrent.style.width =
                    Math.round((time / duration) * 100) + "%";
            }
        }

        video?.addEventListener("timeupdate", timeupdate);
        video?.addEventListener("timeupdate", timeBufferHandler);
        videoProgress?.addEventListener("click", timeBufferHandler);
        return () => {
            video?.removeEventListener("timeupdate", timeupdate);
            video?.removeEventListener("timeupdate", timeBufferHandler);
            videoProgress?.removeEventListener("click", timeBufferHandler);
        };
    }, []);

    return (
        <Styles.ProgressBarWrapper id={"progressVideoBar"}>
            <Styles.ProgressHiddenBar
                htmlFor={"progressVideoBar"}
            ></Styles.ProgressHiddenBar>
            <Styles.ProgressBuffredLoader
                id={"progressBuffredLoader"}
            ></Styles.ProgressBuffredLoader>
            <Styles.ProgressCurrentLoader
                id={"progressCurrentLoader"}
            ></Styles.ProgressCurrentLoader>
            <Styles.ToolTip id={"videoTooltip"}>
                <Styles.TimeText id={"timeText"}></Styles.TimeText>
            </Styles.ToolTip>
        </Styles.ProgressBarWrapper>
    );
}
