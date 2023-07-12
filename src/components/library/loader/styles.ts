import styled, { keyframes } from "styled-components";
import { DotGatheringI, SpinLoaderI } from "./types";

export const SpinLoaderWrapper = styled.div<
    Pick<SpinLoaderI, "width" | "height" | "styles">
>`
    width: ${(p) => p.width || "38px"};
    height: ${(p) => p.height || "38px"};
    ${(p) => p.styles};
`;

export const Svg = styled.svg`
    width: 100%;
    height: 100%;
`;

// fot gathering

export const DotGatheringCircle = styled.div<
    Pick<DotGatheringI, "width" | "height" | "styles" | "bgColor">
>`
    position: relative;
    width: ${(p) => p.width || "16px"};
    height: ${(p) => p.height || "16px"};
    border-radius: 50px;
    background: ${(p) => p.bgColor || "#fff"};
    color: transparent;
    filter: blur(1px);
    ${(p) => p.styles};

    &:before,
    :after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        left: -50px;
        width: ${(p) => p.width || "16px"};
        height: ${(p) => p.height || "16px"};
        border-radius: 50px;
        background: ${(p) => p.bgColor || "#fff"};
        color: transparent;
        opacity: 0;
        filter: blur(1px);
        animation: dotGathering 2s infinite ease-in;
    }

    &:after {
        animation-delay: 0.5s;
    }

    @keyframes dotGathering {
        0% {
            opacity: 0;
            transform: translateX(0) scale(0);
        }
        35%,
        60% {
            opacity: 1;
            transform: translateX(50px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateX(100px) scale(0);
        }
    }
`;

// dot typing

export const DotTypingWrapper = styled.div<
    Pick<DotGatheringI, "width" | "height" | "styles" | "bgColor">
>`
    position: relative;
    left: -9999px;
    width: ${(p) => p.width || "12px"};
    height: ${(p) => p.height || "12px"};
    background: ${(p) => p.bgColor || "#fff"};
    border-radius: 50px;
    color: transparent;
    box-shadow: 9984px 0 0 0 ${(p) => p.bgColor || "#fff"},
        9999px 0 0 0 ${(p) => p.bgColor || "#fff"},
        10014px 0 0 0 ${(p) => p.bgColor || "#fff"};
    animation: dotTyping 1.5s infinite linear;

    @keyframes dotTyping {
        0% {
            box-shadow: 9984px 0 0 0 ${(p) => p.bgColor || "#fff"},
                9999px 0 0 0 ${(p) => p.bgColor || "#fff"},
                10014px 0 0 0 ${(p) => p.bgColor || "#fff"};
        }
        16.667% {
            box-shadow: 9984px -10px 0 0 ${(p) => p.bgColor || "#fff"},
                9999px 0 0 0 ${(p) => p.bgColor || "#fff"},
                10014px 0 0 0 ${(p) => p.bgColor || "#fff"};
        }
        33.333% {
            box-shadow: 9984px 0 0 0 ${(p) => p.bgColor || "#fff"},
                9999px 0 0 0 ${(p) => p.bgColor || "#fff"},
                10014px 0 0 0 ${(p) => p.bgColor || "#fff"};
        }
        50% {
            box-shadow: 9984px 0 0 0 ${(p) => p.bgColor || "#fff"},
                9999px -10px 0 0 ${(p) => p.bgColor || "#fff"},
                10014px 0 0 0 ${(p) => p.bgColor || "#fff"};
        }
        66.667% {
            box-shadow: 9984px 0 0 0 ${(p) => p.bgColor || "#fff"},
                9999px 0 0 0 ${(p) => p.bgColor || "#fff"},
                10014px 0 0 0 ${(p) => p.bgColor || "#fff"};
        }
        83.333% {
            box-shadow: 9984px 0 0 0 ${(p) => p.bgColor || "#fff"},
                9999px 0 0 0 ${(p) => p.bgColor || "#fff"},
                10014px -10px 0 0 ${(p) => p.bgColor || "#fff"};
        }
        100% {
            box-shadow: 9984px 0 0 0 ${(p) => p.bgColor || "#fff"},
                9999px 0 0 0 ${(p) => p.bgColor || "#fff"},
                10014px 0 0 0 ${(p) => p.bgColor || "#fff"};
        }
    }
`;

// google loader
const GoogleRotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const GoogleDash = keyframes`
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
`;

export const GoogleLoaderWrapper = styled.span<{
    width: string;
    height: string;
    theme?: string;
}>`
    height: ${(props) => props.height || "45px"};
    width: ${(props) => props.width || "45px"};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${(p) => p.theme};
`;

export const GoogleSvg = styled.svg`
    animation: ${GoogleRotate} 2s linear infinite;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`;

export const GoogleCircle = styled.circle<{ strokeWidth: string | undefined }>`
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: ${GoogleDash} 1.5s ease-in-out infinite;
    stroke-linecap: round;
    stroke-width: ${(props) => props.strokeWidth || "4"};
`;
