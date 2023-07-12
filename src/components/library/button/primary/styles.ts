import styled from "styled-components";
import { PrimaryButtonPropsI } from "./types";

export const PrimaryButtonWrapper = styled.button<
    Pick<
        PrimaryButtonPropsI,
        | "width"
        | "height"
        | "padding"
        | "margin"
        | "isColor"
        | "borderRadius"
        | "fontSize"
        | "styles"
    >
>`
    width: ${(p) => p.width || "250px"};
    height: ${(p) => p.height || "60px"};
    ${(p) => p.padding && `padding: ${p.padding}`};
    ${(p) => p.margin && `margin: ${p.margin}`};
    border-radius: ${(p) => p.borderRadius || "30px"};
    border: none;
    color: ${(p) => p.color || "white"};
    background: transparent;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    position: relative;
    bottom: 0px;
    z-index: 1;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(p) =>
        p.disabled &&
        `
        opacity: 0.4;
        pointer-events: none;
    `};
    ${(p) => p.styles};

    &:before {
        content: "";
        filter: ${(p) => (p.isColor ? "blur(0)" : "blur(2px)")};
        position: absolute;
        left: 0;
        right: 0;
        width: ${(p) => (p.isColor ? "calc(100% - 8px)" : "100%")};
        height: ${(p) => (p.isColor ? "calc(100% - 8px)" : "100%")};
        z-index: -1;
        outline: none;
        border-radius: ${(p) => p.borderRadius || "30px"};
        box-shadow: ${(p) =>
            p.isColor
                ? `
                15px 15px 20px #141415,
                -15px -15px 20px #353535
                `
                : `
                15px 15px 20px #141415,
                -15px -15px 20px #353535,
                inset 3px 3px 6px 0px #2e2e2f,
                inset -3px -3px 6px #151719
        `};
        background: ${(p) =>
            p.isColor && !p.disabled
                ? "linear-gradient(165deg, #5b95d2, #00366d)"
                : p.isColor && p.disabled
                ? "linear-gradient(0deg, #5b95d2, #00366d)"
                : !p.disabled
                ? "var(--blackGradient)"
                : "linear-gradient(0deg,#27292d,#17191b)"};
        border: ${(p) => (p.isColor ? "4px solid #2c2935" : "none")};
    }
    &:active:before {
        background: ${(p) =>
            p.isColor
                ? "linear-gradient(0deg, #5b95d2, #00366d)"
                : "linear-gradient(0deg,#27292d,#17191b)"};
    }
`;

export const ShadowSpan = styled.div<{ isColor?: boolean }>`
    position: absolute;
    pointer-events: none;
    z-index: -1;
    width: ${(p) => (p.isColor ? "100%" : "96%")};
    height: ${(p) => (p.isColor ? "100%" : "84%")};
    left: 0;
    top: 0;
    margin: auto;
    bottom: 0;
    right: 0;
    border: ${(p) => (p.isColor ? "none" : "2px solid var(--colorSpanBorder)")};
    border-radius: 40px;
    opacity: 0;
    box-shadow: ${(p) =>
        p.isColor
            ? `inset 20px 20px 40px var(--blueLeftLinear), inset -20px -20px 40px var(--blueRightLinear)`
            : `inset 20px 20px 40px var(--darkLeftLinear), inset -20px -20px 40px var(--darkRightLinear)`};
    transition: all 0.1s ease;
`;
