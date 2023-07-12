import styled from "styled-components";
import { RangeSliderPropsI } from "./types";

export const RangeWrapper = styled.div<
    Pick<RangeSliderPropsI, "margin" | "mMargin" | "styles" | "width">
>`
    width: ${(p) => p.width || "250px"};
    ${(p) => p.margin && `margin: ${p.margin}`};
    ${(p) => p.styles};

    @media (max-width: 700px) {
        ${(p) => (p.mMargin || p.margin) && `margin: ${p.mMargin || p.margin}`};
    }
`;

const capitalizedLabel = `text-transform: uppercase; letter-spacing: 1.5px`;

export const Label = styled.div<
    Pick<RangeSliderPropsI, "capitalizedLabel" | "labelSize">
>`
    color: var(--fontLight);
    background: var(--appBlack);
    font-size: ${(p) => (p.labelSize || p.capitalizedLabel ? "12px" : "14px")};
    font-weight: 600;
    margin: 0 0 10px 0;
    text-align: left;
    ${(p) => p.capitalizedLabel && capitalizedLabel};

    @media (max-width: 700px) {
        font-weight: 700;
        font-size: ${(p) => (p.capitalizedLabel ? "12px" : "14px")};
    }
`;
