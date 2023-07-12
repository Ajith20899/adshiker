import styled from "styled-components";

export const FileUploadWrapper = styled.div`
    width: 50px;
    height: 50px;
    position: relative;

    & label {
        cursor: pointer;
        border: 2px dashed #5c5e5f78;
        border-radius: 4px;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
    }
    & label + img {
        pointer-events: none;
        width: 18px;
    }
`;

export const MediaWrapper = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: relative;

    & video {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        object-fit: fill;
    }
    & img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }
    & span.mediaPlayIcon:first-of-type {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% / 2);
        height: calc(100% / 2);
        background: #00000057;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & span.mediaPlayIcon:first-of-type::before {
        content: "";
        display: inherit;
        width: calc(100% / 2);
        height: calc(100% / 2);
        background: #fff;
        clip-path: polygon(0 0, 0% 100%, 100% 50%);
        transform: translateX(1px);
    }
    & span.percentage {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        font-size: 14px;
        font-weight: bold;
        border-radius: 4px;
        align-items: center;
        background: #00000080;
        justify-content: center;
    }
`;
