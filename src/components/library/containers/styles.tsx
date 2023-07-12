import styled from "styled-components";

import { GridPropsI, FlexPropsI } from "./types";

export const GridContainer = styled.div<
    Pick<
        GridPropsI,
        | "cols"
        | "rows"
        | "customCols"
        | "customRows"
        | "margin"
        | "width"
        | "height"
        | "padding"
        | "mMargin"
        | "mWidth"
        | "mHeight"
        | "mPadding"
        | "position"
        | "gap"
        | "justifyContent"
        | "alignItems"
        | "styles"
    >
>`
    display: grid;
    ${(props) => props.width && `width: ${props.width}`};
    ${(props) => props.height && `height: ${props.height}`};
    ${(props) => props.margin && `margin: ${props.margin}`};
    ${(props) => props.padding && `padding: ${props.padding}`};
    ${(props) => props.position && `position: ${props.position}`};
    ${(props) =>
        props.customCols ||
        (props.cols &&
            `grid-template-columns: ${
                props.cols
                    ? `repeat(${props.cols}, 1fr)`
                    : props.customCols || "1fr"
            }`)};
    ${(props) =>
        props.customRows ||
        (props.rows &&
            `grid-template-rows: ${
                props.rows
                    ? `repeat(${props.rows}, 1fr)`
                    : props.customRows || "1fr"
            }`)};
    ${(props) => props.gap && `grid-gap: ${props.gap || "0px"}`};
    ${(props) =>
        props.justifyContent &&
        `justify-content: ${props.justifyContent || "0px"}`};
    ${(props) =>
        props.alignItems && `align-items: ${props.alignItems || "0px"}`};
    ${(props) => props.styles};

    @media (max-width: 700px) {
        ${(props) => props.mWidth && `width: ${props.mWidth}`};
        ${(props) => props.mHeight && `height: ${props.mHeight}`};
        ${(props) => props.mMargin && `margin: ${props.mMargin}`};
        ${(props) => props.mPadding && `padding: ${props.mPadding}`};
    }
`;

export const FlexContainer = styled.div<
    Pick<
        FlexPropsI,
        | "margin"
        | "width"
        | "height"
        | "padding"
        | "mMargin"
        | "mWidth"
        | "mHeight"
        | "mPadding"
        | "position"
        | "justifyContent"
        | "alignItems"
        | "direction"
        | "styles"
    >
>`
    display: flex;
    ${(props) =>
        props.direction ? `flex-direction: ${props.direction || "row"}` : null};
    ${(props) => props.width && `width: ${props.width}`};
    ${(props) => props.height && `height: ${props.height}`};
    ${(props) => props.margin && `margin: ${props.margin}`};
    ${(props) => props.padding && `padding: ${props.padding}`};
    ${(props) => props.position && `position: ${props.position}`};
    justify-content: ${(props) => `${props.justifyContent || "center"}`};
    align-items: ${(props) => `${props.alignItems || "center"}`};
    ${(props) => props.styles};

    @media (max-width: 700px) {
        ${(props) => props.mWidth && `width: ${props.mWidth}`};
        ${(props) => props.mHeight && `height: ${props.mHeight}`};
        ${(props) => props.mMargin && `margin: ${props.mMargin}`};
        ${(props) => props.mPadding && `padding: ${props.mPadding}`};
    }
`;
