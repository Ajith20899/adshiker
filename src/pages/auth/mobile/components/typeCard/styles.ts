import styled from "styled-components";

import { PlainText } from "@pages/auth/mobile/components/text";

export const ImgWrapper = styled.div<{
    color: string;
}>`
    background-color: ${(p) => p.color};
    height: 125px;
    width: 112px;
    margin: 11px;
    position: relative;
    border-radius: 10px;
`;

export const ImgType = styled.img`
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const TypeText = styled(PlainText)`
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.15em;
    line-height: 19px;
`;
