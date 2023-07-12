import { Input } from "@components/library/input";
import styled from "styled-components";

export const Heading = styled.div`
    color: #ffffff;
    font-size: 26px;
    font-weight: bold;
    margin: 0 auto;
    width: 253px;
`;

export const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
`;

export const BasicInput = styled(Input)`
    & .inputErrorLabel {
    }
`;

export const PlainText = styled.div`
    padding: 10px;
    text-align: center;
`;

export const ComponentBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3%;
    width: max-content;
`;

export const ButtonWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30%;
`;

export const SubTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    margin: 20px auto;
    color: rgba(238, 238, 238, 0.5);
    width: 250px;
`;

export const Label = styled.label`
    font-style: normal;
    font-size: 12px;
    font-weight: bold;
    line-height: 14px;
    color: var(--fontLight);
    background: var(--appBlack);
    letter-spacing: 0.05em;
`;

export const DivWrapper = styled.div<{
    margin?: string;
    display?: string;
    flexDirection?: string;
    paddingRight?: string;
}>`
    margin: ${(p) => p.margin};
    display: ${(p) => p.display};
    flex-direction: ${(p) => p.flexDirection};
    padding-right: ${(p) => p.paddingRight};
    position: relative;
`;
