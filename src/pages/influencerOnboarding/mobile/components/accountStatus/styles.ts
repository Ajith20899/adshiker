import styled from "styled-components";

export const ComponentsWrapper = styled.div<{
    height?: string;
    width?: string;
    margin?: string;
    padding?: string;
    justify?: string;
}>`
    padding: ${(p) => p.padding || "30px 30px 0"};
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: ${(p) => p.justify || "initial"};
    height: 100%;
`;
