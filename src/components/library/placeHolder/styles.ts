import styled from "styled-components";
import { PlaceholderPropsI } from "./types";

export const PlaceholderWrapper = styled.div<
    Pick<
        PlaceholderPropsI,
        | "width"
        | "height"
        | "backgroundColor"
        | "shadowColor"
        | "margin"
        | "padding"
        | "styles"
    >
>`
    width: ${(p) => p.width || "100px"};
    height: ${(p) => p.height || "100px"};
    ${(p) => p.padding && `padding: ${p.padding || "0px"}`};
    ${(p) => p.margin && `margin: ${p.margin || "0px"}`};
    position: relative;
    overflow: hidden;
    background: white;
    border-radius: 4px;
    ${(p) => p.styles};
`;
export const ImageLoader = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.08) 0%,
        rgb(0 0 0 / 20%) 15%,
        rgba(0, 0, 0, 0.08) 30%
    );
    background-size: 1200px 100%;
    animation: placeholderShimmer 2s linear infinite;

    @keyframes placeholderShimmer {
        0% {
            background-position: -1200px 0;
        }
        100% {
            background-position: 1200px 0;
        }
    }
`;
