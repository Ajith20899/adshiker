import styled from "styled-components";
import { PrimaryInputI } from "./types";

// primary input

export const InputWrapper = styled.div<
    Pick<
        PrimaryInputI,
        | "width"
        | "height"
        | "padding"
        | "margin"
        | "bordered"
        | "borderRadius"
        | "fontSize"
        | "styles"
        | "icon"
        | "loading"
        | "color"
        | "bgColor"
    >
>`
    width: ${(p) => p.width || "250px"};
    height: ${(p) => p.height || "50px"};
    background: ${(p) => p.bgColor || "transparent"};
    ${(p) => p.margin && `margin: ${p.margin}`};
    border-radius: ${(p) => p.borderRadius || "10px"};
    border: none;
    outline: none;
    box-shadow: ${(p) =>
        p.bordered
            ? `
            inset 4px 4px 8px #191B1D,
            inset -4px -4px 8px #2B2F31
            `
            : `none`};
    position: relative;
    display: grid;
    grid-template-columns: ${(p) =>
        p.icon && p.loading
            ? "min-content 1fr min-content"
            : p.icon
            ? "min-content 1fr"
            : p.loading
            ? "1fr min-content"
            : "1fr"};
    align-items: center;
    grid-gap: 0 12px;
    padding: ${(p) => (!p.bordered ? "0" : p.padding || "0px 10px")};
    ${(p) => p.styles};

    & input {
        color: ${(p) => p.color || "#ffffff"};
        font-size: ${(p) => p.fontSize || "16px"};
    }
`;

export const InputBox = styled.input<{
    floatingLabel?: boolean;
    bordered?: boolean;
    loading?: boolean;
    hintFont?: string;
}>`
    width: 100%;
    height: 100%;
    padding: 0px;
    border: none;
    outline: none;
    font-size: 16px;
    background: transparent;
    font-weight: 700;
    ${(p) =>
        p.floatingLabel &&
        `
        &:focus ~ label,
        &:not([value=""]) ~ label {
            transform: translateY(0%);
            top: -10px;
            box-shadow: inset 2px 2px 5px #090a0b,inset -2px -2px 5px #383d43;
            padding: 2px 8px;
            font-size: 12px;
            border-radius: 4px;
        }
    `}
    &::-webkit-input-placeholder {
        font-size: ${(p) => p.hintFont};
    }

    &::-moz-placeholder {
        font-size: ${(p) => p.hintFont};
    }

    &::-ms-placeholder {
        font-size: ${(p) => p.hintFont};
    }

    &::placeholder {
        font-size: ${(p) => p.hintFont};
    }
`;
const capitalizedLabel = `
text-transform: uppercase; letter-spacing: 1.5px
`;

export const Label = styled.label<{
    floatingLabel?: boolean;
    bordered?: boolean;
    capitalizedLabel?: boolean;
    labelSize?: string;
    labelColor?: string;
}>`
    color: ${(p) => p.labelColor || "var(--fontLight)"};
    background: transparent;
    font-size: ${(p) => (p.labelSize || p.capitalizedLabel ? "12px" : "14px")};
    position: absolute;
    font-weight: 700;
    left: ${(p) => (p.floatingLabel ? "10px" : "0px")};
    top: ${(p) => (p.floatingLabel ? "50%" : p.bordered ? "-25px" : "-14px")};
    transform: ${(p) => (p.floatingLabel ? "translateY(-50%)" : "none")};
    pointer-events: none;
    transition: ${(p) => (p.floatingLabel ? "all .2s ease-in" : "none")};
    ${(p) => p.capitalizedLabel && capitalizedLabel};

    @media (max-width: 700px) {
        font-size: ${(p) => (p.bordered ? "14px" : "12px")};
    }
`;

export const IconWrapper = styled.div<{
    iconWidth?: string;
    iconHeight?: string;
    iconPlacedRight?: boolean;
}>`
    width: ${(p) => p.iconWidth || "24px"};
    height: ${(p) => p.iconHeight || "24px"};
`;

export const ErrorLabel = styled.span`
    position: absolute;
    bottom: -6px;
    width: 100%;
    color: #e53b5a;
    text-align: left;
    font-size: 12px;
`;
