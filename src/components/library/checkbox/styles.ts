import styled from "styled-components";
import { CheckboxPropsI } from "./types";

export const CheckboxWrapper = styled.label<
    Pick<
        CheckboxPropsI,
        "width" | "height" | "margin" | "padding" | "checked" | "styles"
    >
>`
    width: ${(p) => p.width || "30px"};
    height: ${(p) => p.height || "30px"};
    padding: ${(p) => p.padding || "8px"};
    border-radius: 6px;
    ${(p) => p.margin && `margin: ${p.margin}`};
    box-shadow: ${(p) =>
        p.checked
            ? `
        inset 2px 2px 4px var(--darkShadow),
        inset -2px -2px 4px var(--lightShadow)
    `
            : `
        2px 2px 5px var(--darkShadow),
        -2px -2px 5px var(--lightShadow),
        inset 2px 2px 4px var(--lightShadow),
        inset -2px -2px 4px var(--darkShadow)
    `};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & svg {
        transition: all 0.2s ease-in;
        opacity: ${(p) => (p.checked ? "1" : ".2")};
    }
`;
