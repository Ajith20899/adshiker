import styled from "styled-components";
import { VideoPlayerT } from "./types";

export const VideoPlayerWrapper = styled.div<
    Pick<VideoPlayerT, "width" | "height">
>`
    width: ${(p) => p.width || "100%"};
    height: ${(p) => p.height || "260px"};
    min-height: 260px;
    margin: 30px auto;
    position: relative;
    border-radius: 10px;
    border: none;
    outline: none;

    &.videoWrapper {
        border-radius: 0;
        filter: unset;
    }
    &.videoWrapper video {
        height: inherit;
    }
`;
export const Loader = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 2;

    &.videoLoader {
        background-color: transparent;
        display: block !important;
        pointer-events: none;
    }
`;
export const Video = styled.video`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
`;
export const Source = styled.source``;
