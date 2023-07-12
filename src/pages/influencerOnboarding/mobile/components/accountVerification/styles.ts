import styled from "styled-components";
import { PlainButton } from "@components/library/button/plain";

export const ComponentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 40px 0 30px;
`;

export const Heading = styled.div<{
    fontSize?: string;
}>`
    color: #fff;
    margin: 20px 0 auto;
    font-size: ${(p) => p.fontSize || "26px"};
    font-weight: bold;
`;

export const PlainText = styled.div`
    padding: 10px;
    width: max-content;
`;

export const Paragraph = styled.div<{
    fontSize?: string;
    color?: string;
}>`
    margin: 20px auto 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: ${(p) => p.fontSize || "12px"};
    color: ${(p) => p.color || "rgba(255, 255, 255, 0.5)"};
    & > span {
        color: white;
    }
`;

export const SubTitle = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: rgba(238, 238, 238, 0.5);
    margin: 10px auto 20px;
`;

export const Line = styled.div`
    background: linear-gradient(
        90deg,
        #1d2022 0%,
        #717171 49.48%,
        #1d2022 100%
    );
    box-shadow: 8px 8px 16px #171717;
    margin: 10px -4px;
`;

export const DivWrapper = styled.div<{
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    marginBottom?: string;
}>`
    display: ${(p) => p.display || "flex"};
    flex-direction: ${(p) => p.flexDirection || "row"};
    justify-content: ${(p) => p.justifyContent || "center"};
    align-items: ${(p) => p.alignItems || "center"};
    ${(p) => p.marginBottom && `margin-bottom: ${p.marginBottom};`}
`;

export const StyledButton = styled(PlainButton)`
    &:hover {
        background-color: #000000;
        color: #fff;
    }
`;

export const CategoryText = styled.div<{
    bold?: boolean;
}>`
    font-family: Roboto;
    font-style: normal;
    font-weight: ${(p) => (p.bold ? "bold" : "normal")};
    font-size: 14px;

    color: #ffffff;
`;
