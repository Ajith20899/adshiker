import styled from "styled-components";

export const VideoFooterWrapper = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 70px;
    padding: 0px 10px;
    box-sizing: border-box;
    user-select: none;
`;
export const VideoPlayingTime = styled.span`
    color: white;
    font-size: 11px;
    display: inline-block;
    margin: 0px 0px 8px;
    font-weight: 600;
`;
export const ControllersWrapper = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    height: 20px;
`;
export const PlayButton = styled.img`
    width: 12px;
    cursor: pointer;
`;
export const NextButton = styled(PlayButton)`
    margin-left: 18px;
`;
export const VolumeWrapper = styled.div`
    position: relative;
    margin-left: 18px;
    display: flex;

    &:hover #volume_progress {
        width: 70px;
        opacity: 1;
    }
`;
export const VolumeButton = styled.img`
    width: 16px;
    cursor: pointer;
`;
export const FullView = styled.img`
    position: absolute;
    right: 10px;
    width: 15px;
    cursor: pointer;
`;
