import styled from "styled-components";

export const ProfileDetailsContainer = styled.div`
    margin: 20px 0px;
`;
export const ProfileDetailsWrapper = styled.div`
    border-radius: 10px;
    padding: 20px 15px;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: 0px 14px;
    align-items: center;
`;
export const ProfileImage = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 30px;
`;
export const Username = styled.div`
    font-size: 18px;
`;
export const ProfileDetailsBlock = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
`;
export const ProfileDetailsChildWrapper = styled.div`
    flex: 1;
    margin-top: 20px;
    & div:nth-child(1) {
        font-weight: bold;
        font-size: 16px;
        color: #bbb0a1;
    }
    & div:nth-child(2) {
        margin-top: 6px;
        font-weight: bold;
        font-size: 18px;
    }
`;
