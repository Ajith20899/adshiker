import styled from "styled-components";

export const OtpWrapper = styled.div<{
    width?: string;
    height?: string;
    styles?: string;
    gap?: string;
    columnCount: number;
}>`
    width: ${(p) => p.width || "250px"};
    height: ${(p) => p.height || "48px"};
    display: grid;
    ${(p) =>
        p.columnCount &&
        `grid-template-columns: repeat(${p.columnCount}, 1fr)`};
    grid-gap: ${(p) => p.gap || "0px 10px"};
    ${(p) => p.styles};
`;

export const OtpInputBox = styled.input<{
    fontSize?: string;
    isBordered?: boolean;
}>`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    text-align: center;
    border-radius: 8px;
    background: transparent;
    font-size: ${(p) => p.fontSize || "auto"};
    box-shadow: ${(p) =>
        p.isBordered
            ? "inset 2px 2px 5px #090a0b, inset -2px -2px 5px #383d43"
            : "none"};

    &:focus::placeholder {
        color: transparent;
    }
`;

export const SingleLineOtpWrapper = styled.div<{
    width?: string;
    height?: string;
    styles?: string;
    isBordered?: boolean;
    fontSize?: string;
    gap?: string;
}>`
    width: ${(p) => p.width || "100%"};
    height: ${(p) => p.height || "48px"};
    ${(p) => p.styles};

    & input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        color: white;
        text-align: center;
        letter-spacing: ${(p) => p.gap || "35px"};
        font-size: ${(p) => p.fontSize || "14px"};
    }
    & input:focus::placeholder {
        color: transparent;
    }
    & input::placeholder {
        text-align: left;
        letter-spacing: 1px;
    }
`;
