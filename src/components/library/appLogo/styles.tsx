import styled from "styled-components";
import { AppLogoInterfaceI, TagLinePropsI } from "./types";

export const Icon = styled.img<
    Pick<AppLogoInterfaceI, "height" | "width" | "mHeight" | "mWidth">
    >`
    height: 90px;
    width: 90px;
    margin: 0 20px 0 0;
    @media (max-width: 700px) {
        height: 60px;
        width: 60px;
    }
`;

export const Name = styled.div<Pick<AppLogoInterfaceI, "size" | "mSize">>`
    font-size: 100px;
    margin: 10px 0;
    font-weight: bold;
    color: #1d2022;

    @media (max-width: 700px) {
        font-size: ${(props) => props.mSize || "16px"};
    }
`;

export const Content = styled.div<
    Pick<TagLinePropsI, "size" | "color" | "margin" | "mMargin" | "mSize">
>`
    font-size: ${(props) => props.size || "16px"};
    ${(props) => props.margin && `margin: ${props.margin}`};
    ${(props) => props.color && `margin: ${props.color}`};
    font-weight: bold;

    @media (max-width: 700px) {
        font-size: ${(props) => props.mSize || "16px"};
        ${(props) => props.mMargin && `margin: ${props.mMargin}`};
    }
`;
