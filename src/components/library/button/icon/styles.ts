import styled from "styled-components";
import { IconButtonPropsI } from "./types";

export const IconButtonWrapper = styled.div<
    Pick<
        IconButtonPropsI,
        | "width"
        | "height"
        | "padding"
        | "borderRadius"
        | "fontSize"
        | "styles"
        | "disabled"
        | "isColor"
    >
>`
    width: ${(p) => p.width || "250px"};
    height: ${(p) => p.height || "60px"};
    ${(p) => p.padding && `padding: ${p.padding}`};
    background: ${(p) =>
        p.isColor && !p.disabled
            ? "linear-gradient(165deg, #5b95d2, #00366d)"
            : p.isColor && p.disabled
            ? "linear-gradient(0deg, #5b95d2, #00366d)"
            : !p.disabled
            ? "var(--blackGradient)"
            : "linear-gradient(0deg, #27292d, #17191b)"};
    opacity: ${(p) => (p.disabled ? ".7" : "1")};
    border: ${(p) => (p.isColor ? "4px solid #2c2935" : "none")};
    border-radius: ${(p) => p.borderRadius || "30px"};
    box-shadow: ${(p) =>
        p.isColor
            ? `
            8px 8px 16px #171717, 
            -8px -8px 16px #35373a
            `
            : `
            8px 8px 16px #171717, 
            -8px -8px 16px #35373a, 
            inset 3px 4px 5px #2f3033, 
            inset -2px -2px 5px #151719
    `};
    color: ${(p) => p.color || "white"};
    font-size: ${(p) => p.fontSize || "14px"};
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    z-index: 1;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(p) => p.disabled && `opacity: 0.4;pointer-events: none;`};
    ${(p) => p.styles};

    &:active {
        background: ${(p) =>
            p.isColor
                ? "linear-gradient(0deg, #5b95d2, #00366d)"
                : "linear-gradient(0deg, #27292d, #17191b)"};
    }
`;

export const IconWrapper = styled.div<{
    iconWidth?: string;
    iconHeight?: string;
    iconPlacedRight?: boolean;
}>`
    width: ${(p) => p.iconWidth || "24px"};
    height: ${(p) => p.iconHeight || "24px"};
    padding: 6px;
    object-fit: scale-down;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.img<
    Pick<
        IconButtonPropsI,
        "iconWidth" | "iconHeight" | "objectFit" | "iconStyles"
    >
>`
    width: ${(p) => p.iconWidth || "19px"};
    height: ${(p) => p.iconHeight || "19px"};
    ${(p) => p.objectFit && `object-fit: ${p.objectFit}`};
    ${(p) => p.iconStyles};
`;

export const Name = styled.div<Pick<IconButtonPropsI, "size" | "direction">>`
    ${(p) => p.size && `font-size: ${p.size}`};
    margin: ${(p) => (p.direction === "column" ? "6px 0 0 0" : "0 0 0 px")};
`;
