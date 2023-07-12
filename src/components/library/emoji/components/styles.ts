import styled from "styled-components";

export const EmojiBlock = styled.span<{ position: string; bgImage: string }>`
    padding: 6px;
    border-radius: 20px;
    display: inline-block;

    &:hover {
        background: lightgrey;
    }
    & span {
        display: block;
        width: 25px;
        height: 25px;
        background-size: 5700% 5700%;
        background-image: ${(p) => p.bgImage};
        background-position: ${(p) => p.position};
    }
`;
