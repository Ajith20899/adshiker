import styled from "styled-components";
import { Input } from "@components/library/input";

export const Heading = styled.div`
    color: #ffffff;
    font-size: 26px;
    font-weight: bold;
`;

export const ComponentsWrapper = styled.div<{
    height?: string;
    width?: string;
    margin?: string;
    padding?: string;
    justify?: string;
}>`
    padding: ${(p) => p.padding || "30px 30px 0"};
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: ${(p) => p.justify || "initial"};
    height: 100%;
`;

export const PlainText = styled.div`
    padding: 10px;
    text-align: center;
`;

export const ComponentBlock = styled.div`
    position: relative;
    text-align: center;
    padding: 27px 0px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SubTitle = styled.div<{
    center?: boolean;
    color?: string;
    fontSize?: string;
    margin?: string;
    fontWeight?: string;
    letterSpacing?: string;
}>`
    color: ${(p) => p.color || "rgba(238, 238, 238, 0.5)"};
    font-size: ${(p) => p.fontSize || "14px"};
    font-weight: ${(p) => p.fontWeight || "500"};
    ${(p) => p.center && "margin: 20px auto;"}
    ${(p) => p.letterSpacing && `letter-spacing: ${p.letterSpacing};`}
    ${(p) => p.margin && `margin: ${p.margin};`}
`;

export const Label = styled.label<{
    center?: boolean;
}>`
    font-style: normal;
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    line-height: 14px;
    color: var(--fontLight);
    background: var(--appBlack);
    ${(p) => {
        if (p.center) return "display: block;" + "margin: 30px auto 0;";
    }}
`;

export const Line = styled.div`
    background: linear-gradient(
        90deg,
        #1d2022 0%,
        #717171 49.48%,
        #1d2022 100%
    );
    box-shadow: 8px 8px 16px #171717;
    width: 100%;
    height: 1px;
    margin: 0 auto 15px;
`;

export const DivWrapper = styled.div<{
    display?: string;
    flexDirection?: string;
    margin?: string;
    alignItems?: string;
    length?: number;
}>`
    display: ${(p) => p.display || "flex"};
    flex-direction: ${(p) => p.flexDirection};
    margin: ${(p) => p.margin};
    align-items: ${(p) => p.alignItems};
    ${(p) =>
        p.length !== undefined &&
        `
    margin: ${p.length < 6 ? "15% 0 0 0" : "0"};
    `}
`;

export const DarkInput = styled(Input)`
    & input {
        color: #000;
    }
    &::-moz-selection {
        /* Code for Firefox */
        color: #000;
    }

    &::selection {
        color: #000;
    }
    & .inputErrorLabel {
        font-weight: bold;
    }
`;
