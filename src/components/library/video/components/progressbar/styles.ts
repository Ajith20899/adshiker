import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
    width: 100%;
    height: 5px;
    position: relative;
    border-radius: 8px;
    background-color: #f7f7f7;
    cursor: pointer;
`;
export const ProgressHiddenBar = styled.label`
    position: absolute;
    width: 100%;
    height: 26px;
    left: 0px;
    bottom: -6px;
    cursor: pointer;
    background-color: transparent;
`;
export const ToolTip = styled.span`
    position: absolute;
    top: -33px;
    display: none;
`;
export const TimeText = styled.span`
    background-color: #f7f7f7;
    padding: 4px 6px 5px;
    border-radius: 4px;
    font-size: 13px;
    color: #484848;
    font-weight: 500;

    &:after {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 50%;
        width: 10px;
        height: 10px;
        background-color: #f7f7f7;
        transform: translateX(-50%) rotate(45deg);
    }
`;
export const ProgressBuffredLoader = styled.span`
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    border-radius: 0px 10px 10px 0px;
    background-color: #3b94d487;
`;
export const ProgressCurrentLoader = styled(ProgressBuffredLoader)`
    border-radius: 10px;
    background-color: #3b94d4;
`;
