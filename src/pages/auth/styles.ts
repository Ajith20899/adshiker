import styled from "styled-components";

import { PrimaryButton } from "@components/library/button/primary";

export const ComponentsWrapper = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

export const Line = styled.div`
    width: 42px;
    height: 2px;
    background: #ffffff;
`;

export const TextButton = styled.div`
    color: #5b95d2;
    margin: 10px;
`;

export const CardContainer = styled.div<{
    height?: string;
    width?: string;
}>`
    display: flex;
    flex-direction: row;

    height: ${(p) => p.height || "70%"};
    width: ${(p) => p.width || "100%"};
    justify-content: center;
`;

export const Flex = styled.div<{
    direction?: string;
    height?: string;
    width?: string;
    spacing?: string;
    margin?: string;
    padding?: string;
    justifyContent?: string;
    bgColor?: string;
    borderRadius?: string | number;
    styles?: string;
}>`
    display: flex;
    flex-direction: ${(p) => p.direction || "row"};
    height: ${(p) => p.height || "max-content"};
    width: ${(p) => p.width || "max-content"};
    margin: ${(p) => p.margin || "0"};
    padding: ${(p) => p.padding || "0"};
    align-items: center;
    justify-content: ${(p) => p.justifyContent || "center"};
    position: relative;
    background-color: ${(p) => p.bgColor || "transparent"};
    border-radius: ${(p) => p.borderRadius || "0"};
    ${(p) => `${p.styles};`}
`;

export const Row = styled(Flex).attrs({
    direction: "row",
})``;

export const Column = styled(Flex).attrs({
    direction: "column",
    width: "100%",
})``;

export const BoldButton = styled(PrimaryButton).attrs({
    width: "200px",
    height: "50px",
})`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.24em;
    ${(p) => p.isColor && "padding: 25px 0px;"}
`;
