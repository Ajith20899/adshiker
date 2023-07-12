import styled from "styled-components";

export const SnackbarWrapper = styled.div<{
    type: string;
    bg?: string;
    styles?: string;
}>`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 400px;
    line-height: 20px;
    padding: 10px 40px;
    z-index: 999;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    letter-spacing: 0.15em;
    color: #fff;
    background: ${(p) =>
        p.bg ||
        (p.type === "succeed" ? "rgba(63, 254, 151)" : " rgba(225, 67, 96)")};
    ${(p) => p.styles};

    @media (min-width: 420px) {
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
    }
`;
