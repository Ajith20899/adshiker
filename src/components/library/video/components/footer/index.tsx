import React, { useEffect, useState } from "react";
import playButton from "@icons/play-button.svg";
import pauseButton from "@icons/pause.svg";
import nextButton from "@icons/next-button.svg";
import mute from "@icons/mute.svg";
import speaker from "@icons/speaker.svg";
import fullScreen from "@icons/full-screen.svg";
import { timeFormat } from "@utils/time";
import { ProgressBar } from "../progressbar";
import { VolumeProgress } from "../volumeProgress";
import { VideoFooterT } from "./types";
import * as Styles from "./styles";

export function VideoFooter(props: VideoFooterT) {
    // props
    const {
        videoFullDuration,
        isPlay,
        setIsplay,
        playOrPause,
        fullScreenHandler,
    } = props;

    // local state
    const [getCurrentTime, setGetCurrentTime] = useState(0);
    const [isVolumeMuted, setIsVolumeMuted] = useState(false);

    //  useEffect

    // get current time
    useEffect(() => {
        let video = document.getElementById("video_player") as HTMLVideoElement;

        function setTimeHandler() {
            if (video.paused) return;
            if (video) {
                setGetCurrentTime(video.currentTime);
            }
        }

        video?.addEventListener("timeupdate", setTimeHandler);
        return () => video?.removeEventListener("timeupdate", setTimeHandler);
    }, []);

    // volume up and mute
    function volumeMute() {
        let video = document.getElementById("video_player") as HTMLVideoElement;
        setIsVolumeMuted(!isVolumeMuted);

        if (video) {
            if (isVolumeMuted) {
                video.volume = 0;
            } else video.volume = 1;
        }
    }

    // onclick prevent
    function onClickPreventHandler(e: any) {
        e.stopPropagation();
    }

    return (
        <Styles.VideoFooterWrapper
            onClick={onClickPreventHandler}
            id={"video_footer_wrapper"}
        >
            <Styles.VideoPlayingTime id={"video_current_time"}>
                {videoFullDuration > 0 &&
                    `${timeFormat(getCurrentTime)} / ${timeFormat(
                        videoFullDuration
                    )}`}
            </Styles.VideoPlayingTime>
            <ProgressBar setIsplay={setIsplay} />
            <Styles.ControllersWrapper>
                <Styles.PlayButton
                    onClick={playOrPause}
                    src={isPlay ? pauseButton : playButton}
                    alt={"play_pause_button"}
                    id={"play_pause_button"}
                />
                <Styles.NextButton src={nextButton} alt={"next_button"} />
                <Styles.VolumeWrapper>
                    <Styles.VolumeButton
                        onClick={volumeMute}
                        src={isVolumeMuted ? mute : speaker}
                        alt={"volume_button"}
                    />
                    <VolumeProgress isVolumeMuted={isVolumeMuted} />
                </Styles.VolumeWrapper>
                <Styles.FullView
                    id={"fullScreenView"}
                    src={fullScreen}
                    alt={"full_view"}
                    onClick={fullScreenHandler}
                />
            </Styles.ControllersWrapper>
        </Styles.VideoFooterWrapper>
    );
}
