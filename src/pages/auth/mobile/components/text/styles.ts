import styled from "styled-components";

const line = `&::after {
    content: "";
    display: block;
    margin-top: 2px;
    background: rgba(238, 238, 238, 0.7);
    height: 2px;
}`;

export const PlainText = styled.div<{
    line?: boolean;
    margin?: string;
    width?: string;
    height?: string;
    color?: string;
    padding?: string;
}>`
    ${(p) => p.padding && `padding: ${p.padding};`}
    text-align: center;
    ${(p) => p.width && `width: ${p.width};`}
    ${(p) => p.height && `height: ${p.height};`}
    ${(p) => p.color && `color: ${p.color};`}
    margin: ${(p) => p.margin || "0"};
    ${(p) => p.line && line}
`;

export const HeadingText = styled(PlainText)`
    font-size: 30px;
    font-weight: 700;
`;

export const SubtitleText = styled(PlainText)`
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.06em;
    color: #949494;
`;
