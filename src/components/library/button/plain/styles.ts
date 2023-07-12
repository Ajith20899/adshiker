import styled from "styled-components";
import { PlainButtonPropsI } from "./types";

export const PlainButtonWrapper = styled.button<
    Pick<
        PlainButtonPropsI,
        | "width"
        | "height"
        | "padding"
        | "margin"
        | "borderRadius"
        | "fontSize"
        | "styles"
        | "bg"
    >
>`
    width: ${(p) => p.width || "250px"};
    height: ${(p) => p.height || "60px"};
    ${(p) => p.padding && `padding: ${p.padding}`};
    ${(p) => p.margin && `margin: ${p.margin}`};
    background: ${(p) => p.bg || "#000"};
    border: none;
    outline: 0;
    border-radius: ${(p) => p.borderRadius || "50px"};
    opacity: ${(p) => (p.disabled ? ".7" : "1")};
    color: ${(p) => p.color || "white"};
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 0.2s ease;
    ${(p) => p.disabled && `opacity: 0.4;pointer-events: none;`};
    ${(p) => p.styles};

    &:active {
        opacity: 0.8;
    }
`;
