import styled from "styled-components";

export const MediaList = styled.div`
    & label {
        display: none;
        position: absolute;
        bottom: -15px;
        left: 0px;
        width: 100%;
        height: 3px;
        border-radius: 4px;
        background: black;
        transform-origin: left center;
        animation: reveal 0.5s ease forwards;
    }
    & video {
        object-fit: cover;
    }
    & span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background: #00000075;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & span::after {
        content: "";
        position: absolute;
        width: calc(100% / 2);
        height: calc(100% / 2);
        background: white;
        transform: translateX(2px);
        clip-path: polygon(0 0, 0% 100%, 100% 50%);
    }

    & span:not(:first-child) {
        width: 30px;
        height: 30px;
    }

    @keyframes reveal {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
`;
