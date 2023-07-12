import styled from "styled-components";

export const VideoPlayIcon = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

export const VideoPlayTimingWrapper = styled.div`
    width: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > * {
        cursor: pointer;
    }
    &.videoPlayTimingClass {
        height: 43px !important;
    }
    &.videoPlayTimingClass ${VideoPlayIcon} {
        width: 43px !important;
        height: 43px !important;
    }
`;
export const ForwardButton = styled(VideoPlayIcon)``;
export const BackwardButton = styled(ForwardButton)``;
