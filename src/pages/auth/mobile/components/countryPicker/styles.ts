import styled from "styled-components";

export const InputWrapper = styled.div<{
    code: string;
}>`
    position: absolute;
    top: 30px;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, 0);
    & input {
        color: #000;
    }
`;

export const TextElement = styled.h4<{
    color: string;
}>`
    color: ${(p) => p.color};
`;

export const NoDataText = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    align-items: center;
    letter-spacing: 0.04em;
    color: #7e7e7e;
    height: 10%;
    margin: auto;
`;
