import styled from "styled-components";

export const MediaCarouselWrapper = styled.div<{ styles?: string }>`
    margin: 18px 0 0 0;
    padding: 0;
    height: calc(100% - 18px);
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    ${(p) => p.styles};

    & > div:last-of-type {
        display: flex;
        overflow: auto;
        flex-direction: row;
        padding-bottom: 15px;
    }
    & > div:last-of-type > div {
        min-width: 60px;
        height: 60px;
        position: relative;
    }
    & > div:last-of-type > div:not(:last-of-type) {
        margin-right: 20px;
        position: relative;
    }
    & > div:last-of-type > div > img {
        border-radius: 6px;
    }
    & > div:last-of-type > div > video {
        border-radius: 6px;
    }
`;
export const SelectedMedia = styled.div`
    width: 100%;
    height: 80%;
    position: relative;

    & > div {
        height: 100%;
    }
    & > div img {
        border-radius: 6px;
    }
    & > div video {
        border-radius: 6px;
    }
`;
