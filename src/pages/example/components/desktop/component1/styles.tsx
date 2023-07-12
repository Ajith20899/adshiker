import styled from "styled-components";

export const ManagerWrapper = styled.div``;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 400px 500px;
    grid-gap: 50px;
    padding: 0 20px;
    margin: 50px 0 0 0;
    max-width: 1200px;
    width: max-content;
    margin: 0 auto;

    & > div:first-child {
        border-right: 1px solid #eee;
    }
`;

export const Heading = styled.div`
    font-weight: bold;
    font-size: 18px;
`;

export const Info = styled.div`
    font-size: 14px;
    line-height: 22px;
    margin: 20px 0;
    text-align: left;
    width: 400px;
    color: gray;
`;

export const SyncedAccounts = styled.div``;
