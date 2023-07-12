import styled from "styled-components";

export const Container = styled.div<{ margin?: string; styles?: string }>`
    ${(props) => (props.margin ? `margin: ${props.margin}` : null)};
    ${(p) => p.styles};
`;

export const Wrapper = styled.div<{ display?: string; margin?: string }>`
    display: ${(props) => (props.display ? props.display : "grid")};
    grid-template-columns: max-content max-content max-content;
    ${(props) => (props.margin ? `margin: ${props.margin}` : null)};

    & > div:not(:first-child) {
        margin: ${(props) => (props.display ? "0" : "0 15px")};
    }
`;

export const Radio = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.gridDesign {
        display: grid;
        grid-template-columns: 15px 60px 1fr;
        grid-gap: 20px;
        margin-bottom: 20px;
    }
`;

export const Circle = styled.div<{ selected: boolean }>`
    border-radius: 50%;
    height: 18px;
    width: 18px;
    padding: 3px;
    margin: 0 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: ${(props) =>
        props.selected
            ? `inset 4px 4px 8px #171717, inset -4px -4px 8px #35373a`
            : `4px 4px 8px #171717, -4px -4px 8px #35373a`};
    transition: all 0.2s ease;

    &::before {
        content: "";
        background: ${(props) =>
            props.selected ? "var(--blueGradient)" : "transparent"};
        height: 100%;
        width: 100%;
        display: inline-block;
        border-radius: 50%;
        transition: all 0.2s ease;
    }

    &:active,
    &:focus {
        &::before {
            background: var(--blueGradient);
        }
    }
`;

export const ErrorLabel = styled.div<{ width?: string; mWidth?: string }>`
    color: red;
    font-size: 11px;
    margin: 10px 5px 5px;
    width: ${(props) => props.width || "320px"};

    @media (max-width: 700px) {
        max-width: ${(props) => props.mWidth || "320px"};
    }
`;
