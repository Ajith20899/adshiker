import styled from "styled-components";

import { PlainText } from "@pages/auth/mobile/components/text";

export const Wrapper = styled.div`
    width: 100%;
    height: 95px;
`;

export const Spacing = styled.div`
    flex: 1;
`;

export const NavText = styled(PlainText)`
    letter-spacing: 0.13em;
    font-size: 16px;
    font-weight: 900;
    &::after {
        content: "";
        display: block;
        margin-top: 2px;
        background-color: #fff;
        height: 2px;
    }
`;
