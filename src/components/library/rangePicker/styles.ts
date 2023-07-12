import styled from "styled-components";

export const RangePickerWrapper = styled.div<{
    width?: string;
    height?: string;
    styles?: string;
}>`
    width: ${(p) => p.width || "250px"};
    height: ${(p) => p.height || "30px"};
    position: relative;
    cursor: pointer;
    ${(p) => p.styles};
`;
export const LeftCircleWrapper = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background: #090a0b;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    pointer-events: none;
    margin-left: -15px;
    box-shadow: 3px 3px 6px var(--darkShadow), -3px -3px 6px var(--lightShadow),
        inset 1px 1px 2px var(--lightShadow),
        inset -1px -1px 2px var(--darkShadow);
    /* transition: all .2s; */
`;
export const CenterLineWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 6px;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 6px;
    overflow: hidden;
    z-index: -1;
    box-shadow: inset 1px 1px 2px #090a0b, inset -1px -1px 1px #383d43;
    user-select: none;
`;
export const RangeLine = styled(CenterLineWrapper)<{ isDoubleRange?: boolean }>`
    width: ${(p) => (p.isDoubleRange ? "100%" : "0%")};
    box-shadow: none;
    background: var(--blueGradient);
`;
export const RightCircleWrapper = styled(LeftCircleWrapper)`
    left: calc(100% - 15px);
    background: red;
`;
