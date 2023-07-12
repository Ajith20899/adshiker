import React from "react";
import playButton from "@icons/play-button.svg";
import pauseButton from "@icons/pause.svg";
import backward from "@icons/fast-backward.svg";
import forward from "@icons/fast-forward.svg";
import { VideoPlayTimingT } from "./types";
import * as Styles from "./styles";

export function VideoPlayTiming(props: VideoPlayTimingT) {
    const { isPlay, playOrPause } = props;

    // set forward time
    function forwardHandler() {
        let video = document.getElementById("video_player") as HTMLVideoElement;

        if (video) {
            var playPromise = video.play();

            console.log("enteryyy");

            if (playPromise !== undefined) {
                playPromise
                    .then((_) => {
                        video.currentTime += 10;
                        video.play();
                    })
                    .catch((error) => {
                        // Auto-play was prevented
                        // Show paused UI.
                        console.log(error);
                    });
            }
        }
    }

    // set backward time
    function backwardHandler() {
        let video = document.getElementById("video_player") as HTMLVideoElement;

        if (video) {
            var playPromise = video.play();

            if (playPromise !== undefined) {
                playPromise
                    .then((_) => {
                        video.currentTime -= 10;
                        video.play();
                    })
                    .catch((error) => {
                        // Auto-play was prevented
                        // Show paused UI.
                        console.log(error);
                    });
            }
        }
    }

    return (
        <Styles.VideoPlayTimingWrapper id={"videoPlayTimingWrapper"}>
            <Styles.BackwardButton
                src={backward}
                alt={"backward_icon"}
                id={"videoBackwardIcon"}
                onClick={backwardHandler}
            />
            <Styles.VideoPlayIcon
                onClick={playOrPause}
                src={isPlay ? pauseButton : playButton}
                alt={"pause_icon"}
                id={"videoPlayIcon"}
            />
            <Styles.ForwardButton
                src={forward}
                alt={"forward_icon"}
                id={"videoForwardIcon"}
                onClick={forwardHandler}
            />
        </Styles.VideoPlayTimingWrapper>
    );
}
