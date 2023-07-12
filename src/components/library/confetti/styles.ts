import styled from "styled-components";

export const ConfettiWrapper = styled.div`
    width: 100%;

    & img {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 510px;
        z-index: -1;
        transform-origin: left bottom;
        animation: reveal 1.2s linear forwards;
    }
    & img.leftConfetti {
        right: 0;
        animation: reveal2 1.2s linear forwards;
    }

    @keyframes reveal {
        0% {
            transform: translateX(-100%);
        }
        30% {
            transform: translateX(0%) scale(1);
        }
        60% {
            transform: translateX(0%) scale(1.3);
        }
        90% {
            transform: translateX(0%) scale(1);
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes reveal2 {
        0% {
            transform: translateX(200%) scale(1) rotate(-90deg);
        }
        30% {
            transform: translateX(100%) scale(1) rotate(-90deg);
        }
        60% {
            transform: translateX(100%) scale(1.3) rotate(-90deg);
        }
        90% {
            transform: translateX(100%) scale(1) rotate(-90deg);
            opacity: 1;
        }
        100% {
            transform: translateX(100%) scale(1) rotate(-90deg);
            opacity: 0;
        }
    }
`;
