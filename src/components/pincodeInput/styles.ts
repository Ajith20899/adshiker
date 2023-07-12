import styled from "styled-components";

export const StyledPincodeInput = styled.input<{
    height?: string;
    width?: string;
    margin?: string;
    padding?: string;
    fontSize?: string;
    hintColor?: string;
    noStyle?: boolean;
}>`
    height: ${(p) => p.height || "36px"};
    width: ${(p) => p.width || "135px"};
    font-size: ${(p) => p.fontSize || "26px"};
    ${(p) => (p.noStyle ? undefined : "margin: 10px auto 30px;")}

    background-color: #1d2022;
    text-align: center;
    border: none;
    outline: none;
    font-weight: bold;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1em;
    color: #fff;

    &::-webkit-input-placeholder {
        color: ${(p) => p.hintColor || "rgba(238, 238, 238, 0.3)"};
    }

    &::-moz-placeholder {
        color: ${(p) => p.hintColor || "rgba(238, 238, 238, 0.3)"};
    }

    &::-ms-placeholder {
        color: ${(p) => p.hintColor || "rgba(238, 238, 238, 0.3)"};
    }

    &::placeholder {
        color: ${(p) => p.hintColor || "rgba(238, 238, 238, 0.3)"};
    }
`;
