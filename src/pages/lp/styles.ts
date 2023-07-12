import styled from "styled-components";

import { PlainButton } from "@components/library/button/plain";

export const Wrapper = styled.div`
    text-transform: lowercase;
    text-align: center;
    position: relative;
 
`;

export const Spacer = styled.div`
    flex-grow: 1;
`;

export const Button = styled(PlainButton)<{
    bgColor?: string;
    border?: string;
    color?: string;
}>`
    height: 50px;
    width: 120px;
    font-size: 16px;
    font-weight: bold;
    background-color: ${(p) => p.bgColor || "transparent"};
    color: ${(p) => p.color || "white"};
    ${(p) => p.border && `border: ${p.border};`}
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const IconWrapper = styled.div`
    text-align: center;
    margin-top: 24px;
    margin-bottom: 11px;
`;

export const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: relative;
`;

export const Soon = styled.div`
    /* position: absolute; */
    bottom: 50px;
    font-size: 40px;
      color: #1d2022;

    font-weight: bold;
    /* left: 0;
    right: 0;
    margin: auto; */
margin: 50px 0 0 0;
text-align: center;
`

export const Logo = styled.img`
    height: 100px;
    width: 100px;
   margin: 20px auto;
   display: block;
`