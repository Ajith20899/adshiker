import styled from "styled-components";

export const CardWrapper = styled.div<{
    width?: string;
    height?: string;
    inset?: boolean;
    styles?: string;
    margin?: string;
    radius?: string;
    selectable?: boolean;
    noShadow?: boolean;
    noBorder?: boolean;
    cursorPointer?: boolean;
}>`
    width: ${(p) => p.width || "100%"};
    height: ${(p) => p.height || "100%"};
    ${(p) => p.margin && `margin: ${p.margin}`};
    box-shadow: ${(p) =>
        p.noShadow
            ? "none"
            : p.inset
            ? `
            inset 4px 4px 8px #191b1d, 
            inset -4px -4px 8px #2b2f31
        `
            : `
            7px 7px 14px #191b1d, 
            -7px -7px 14px #2b2f31
        `};
    border-radius: ${(p) => p.radius || "10px"};
    ${(p) => p.cursorPointer && `cursor: pointer`};
    border: ${(p) =>
        p.inset || p.noShadow || p.noBorder ? "none" : "2px solid #282a2b"};
    ${(p) => p.styles};

    &:active {
        ${(p) =>
            p.selectable &&
            `
            box-shadow: inset 4px 4px 8px #191b1d, inset -4px -4px 8px #2b2f31;
            border: 2px solid transparent;
        `}
    }
`;

export const CardChildWrapper = styled.div<{
    inset?: boolean;
    bg?: string;
    radius?: string;
    centerItems?: boolean;
}>`
    ${(p) =>
        p.inset
            ? `
            width: calc(100% - 16px);
            height: calc(100% - 16px);
            margin: 8px;
        `
            : `
            width: 100%;
            height: 100%;
        `};
    border-radius: ${(p) => p.radius || "10px"};
    background: ${(p) => p.bg || "transparent"};
    ${(p) =>
        p.centerItems &&
        `display: flex;justify-content: center;align-items: center`};
`;
