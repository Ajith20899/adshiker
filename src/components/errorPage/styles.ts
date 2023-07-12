import styled from "styled-components";

export const ComponentsWrapper = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const PlainText = styled.div<{
    marginLeft?: string;
}>`
    padding: 10px;
    width: max-content;
    font-size: 20px;
    margin-left: ${(p) => p.marginLeft};
`;
