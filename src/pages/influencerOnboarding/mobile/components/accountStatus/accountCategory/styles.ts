import styled from "styled-components";

export const Heading = styled.div`
    color: #fff;
    margin-top: 20px;
    font-size: 26px;
    font-weight: bold;
    line-height: 30px;
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
}>`
    color: ${(p) => p.color || "rgba(238, 238, 238, 0.5)"};
    font-size: ${(p) => p.fontSize || "14px"};
    font-weight: ${(p) => p.fontWeight || "500"};
    margin: ${(p) => p.margin};
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

export const SmallHeading = styled.div`
    position: absolute;
    height: 12px;
    left: 65px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.16em;
    color: rgba(255, 255, 255, 0.5);
`;

export const Paragraph = styled.div`
    margin: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
`;

export const Line = styled.div`
    background: linear-gradient(
        90deg,
        #1d2022 0%,
        #717171 49.48%,
        #1d2022 100%
    );
    box-shadow: 8px 8px 16px #171717;
    height: 1px;
    margin: 20px 0 26px;
`;

export const DivWrapper = styled.div<{
    display?: string;
    marginLeft?: string;
    marginRight?: string;
    margin?: string;
}>`
    display: ${(p) => p.display};
    margin-left: ${(p) => p.marginLeft};
    margin-right: ${(p) => p.marginRight};
    margin: ${(p) => p.margin};
`;
