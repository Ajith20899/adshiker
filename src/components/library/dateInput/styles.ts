import styled from "styled-components";

export const DateInputWrapper = styled.div<{
    width?: string;
    height?: string;
    styles?: string;
    isBordered?: boolean;
}>`
    width: ${(p) => p.width || "250px"};
    height: ${(p) => p.height || "50px"};
    display: grid;
    grid-template-columns: 32px 34px 1fr;
    grid-gap: 0px 10px;
    grid-template-rows: 30px;
    padding: ${(p) => (p.isBordered ? "10px" : "10px 0px")};
    text-align: center;
    position: relative;
    border-radius: 6px;
    outline: none;
    ${(p) =>
        p.isBordered &&
        `box-shadow: inset 2px 2px 5px #090a0b, inset -2px -2px 5px #383d43`};
    ${(p) => p.styles};

    & > div {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    & > div:not(:last-of-type):after {
        content: "";
        font-weight: bold;
        height: 15px;
        width: 2px;
        background: #565656;
        transform: rotate(25deg);
    }
    & div:nth-child(2) input:placeholder-shown {
        transform: translateX(-3px);
    }
    & .dateInputErrorLabel {
        bottom: ${(p) => (p.isBordered ? "-15px" : "0px")};
    }
`;

export const DateInputBox = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: white;
    font-weight: 700;
`;

export const ErrorLabel = styled.span`
    position: absolute;
    width: 100%;
    color: #e53b5a;
    text-align: left;
    font-size: 12px;
`;
