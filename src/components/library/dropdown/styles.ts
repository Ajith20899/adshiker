import styled, { keyframes } from "styled-components";
import { DropdownPropsI } from "./types";

export const SlideDown = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const DropdownWrapper = styled.div<
    Pick<
        DropdownPropsI,
        | "margin"
        | "mMargin"
        | "width"
        | "height"
        | "maxWidth"
        | "maxHeight"
        | "bordered"
        | "showList"
        | "fontSize"
    >
>`
    position: relative;
    width: ${(props) => props.width || "100%"};
    min-height: ${(props) => props.height || "auto"};
    ${(p) => p.margin && `margin: ${p.margin}`};
    background: #1d2022;
    cursor: pointer;
    border-radius: 7px;
    text-transform: capitalize;
    font-size: ${(p) => p.fontSize || "16px"};

    @media (max-width: 700px) {
        & > * {
            font-size: 14px;
        }
    }
    @media (max-width: 700px) {
        width: ${(props) => props.maxWidth || "100%"};
        height: ${(props) => props.maxHeight || "auto"};
        margin: ${(props) => props.mMargin || props.margin || "0"};
    }
`;

export const DisplayText = styled.div<{ holder: boolean }>`
    width: auto;
    height: 50px;
    border-radius: 6px;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${(p) => (p.holder ? "#737373" : "currentColor")};
`;

export const ArrowIcon = styled.div<{
    position: boolean;
    opacity: string | number | boolean;
}>`
    width: 15px;
    height: 15px;
    right: 0px;
    position: absolute;
    transform: ${(p) => (p.position ? "rotate(90deg)" : "rotate(0deg)")};
    transition: transform 0.3s ease;
`;

export const DropdownItemsWrapper = styled.div<{
    showList: boolean;
}>`
    display: grid;
    background: #1d2022;
    width: 100%;
    z-index: 999;
    border-radius: 6px;
    position: absolute;
    top: auto;
    left: 0px;
    max-height: 126px;
    overflow-y: auto;
    transform-origin: left top;
    transform: ${(p) => (p.showList ? "scaleY(1)" : "scaleY(0)")};
    opacity: ${(p) => (p.showList ? "1" : "0")};
    box-shadow: 8px 8px 16px #171717, -8px -8px 16px #35373a;
    transition: all 0.3s ease;

    @media (max-width: 700px) {
        max-width: 114px;
    }
`;

export const DropdownItem = styled.div`
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;

    &:first-child {
        background: var(--darkLeftLinear);
    }
    &:hover {
        background: var(--darkLeftLinear);
    }
    @media (max-width: 700px) {
        font-size: 14px;
    }
`;

export const Label = styled.span<{
    filled: boolean;
    bordered?: boolean;
    showList: boolean;
}>`
    font-size: 16px;
    position: absolute;
    top: -14px;
    left: 0px;
    color: #737373;
    font-weight: bold;
`;
