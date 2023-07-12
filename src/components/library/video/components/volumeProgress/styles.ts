import styled from "styled-components";

export const VolumeProgressWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 14px;
    padding: 8px 0px;
    margin-left: 8px;
    cursor: pointer;
    opacity: 0;
    box-sizing: border-box;
    transition: 0.5s all;
`;
export const VolumeFiller = styled.span<{ isVolumeMuted: boolean }>`
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    border-radius: 10px;
    width: ${(p) => (p.isVolumeMuted ? "0 !important" : "100%")};
    background-color: white;
`;
export const VolumeProgressBlock = styled.div`
    background-color: #6d6d6d;
    height: 4px;
    border-radius: 8px;
    position: relative;
`;
export const Circle = styled.span`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #ffffff;
    position: absolute;
    left: 100%;
    margin-left: -7px;
    top: -5px;
`;
