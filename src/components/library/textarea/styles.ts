import styled from "styled-components";
import { TextAreaPropsI } from "./types";

// primary Textarea

export const TextAreaWrapper = styled.div<
    Pick<TextAreaPropsI, "margin" | "styles">
>`
    ${(p) => p.margin && `margin: ${p.margin}`};
    ${(p) => p.styles};
`;

export const TextAreaBoxWrapper = styled.div<
    Pick<
        TextAreaPropsI,
        | "width"
        | "height"
        | "padding"
        | "margin"
        | "bordered"
        | "borderRadius"
        | "fontSize"
    >
>`
    width: ${(p) => p.width || "250px"};
    height: ${(p) => p.height || "100px"};
    border-radius: ${(p) => p.borderRadius || "12px"};
    box-shadow: ${(p) =>
        p.bordered
            ? `inset 2px 2px 5px #090a0b, inset -2px -2px 5px #383d43;`
            : `none`};
    background: transparent;
    position: relative;

    & textarea {
        color: ${(p) => p.color || "#ffffff"};
        font-size: ${(p) => p.fontSize || "16px"};
        font-weight: 700;
        line-height: ${(p) =>
            p.fontSize ? `calc(${p.fontSize} + 6px)` : "22px"};
        padding: ${(p) => (!p.bordered ? "0" : p.padding || "16px")};
    }
`;

export const TextAreaBox = styled.textarea<{ floatingLabel?: boolean }>`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
`;

const capitalizedLabel = `text-transform: uppercase; letter-spacing: 1.5px`;

export const Label = styled.div<{
    bordered?: boolean;
    capitalizedLabel?: boolean;
    labelSize?: string;
}>`
    color: var(--fontLight);
    background: transparent;
    font-size: ${(p) => (p.labelSize || p.capitalizedLabel ? "12px" : "14px")};
    font-weight: 600;
    margin: 0 0 10px 0;
    padding: ${(p) => (p.bordered ? "0 4px" : "0")};
    text-align: left;
    width: 100%;
    ${(p) => p.capitalizedLabel && capitalizedLabel};

    @media (max-width: 700px) {
        font-weight: 700;
        font-size: ${(p) => (p.bordered ? "14px" : "12px")};
    }
`;
