import { Grid } from "@components/library/containers";
import styled from "styled-components";

export const Wrapper = styled(Grid)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    height: 80px;
    background: linear-gradient(0deg, #0d0e0e, transparent);
`;

export const Icon = styled.img`
    height: 25px;
    width: 25px;
`;

export const Name = styled.div`
    font-size: 12px;
    margin: 10px 0 0 0;
    color: #fff;
`;
