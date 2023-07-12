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

export const SubTitle = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: rgba(238, 238, 238, 0.5);
    margin: 10px auto;
`;

export const SmallHeading = styled.div`
    width: 59px;
    height: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.16em;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
`;

export const Paragraph = styled.li`
    margin: 20px 20px 20px 0;
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
    width: 300px;
    margin-bottom: 25px;
`;

export const DivWrapper = styled.div<{
    display?: string;
    flexDirection?: string;
    margin?: string;
    alignItems?: string;
    length?: number;
}>`
    display: ${(p) => p.display};
    flex-direction: ${(p) => p.flexDirection};
    margin: ${(p) => p.margin};
    align-items: ${(p) => p.alignItems};
    ${(p) =>
        p.length !== undefined &&
        `
    margin: ${p.length > 0 ? "24px auto 25px" : "28px auto 35px"};
    `}
`;
