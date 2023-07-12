import styled from "styled-components";

import { DividerPropsI } from "./types";

export const Wrapper = styled.div<DividerPropsI>`
    background: linear-gradient(90deg, #1d2022, #717171, #1d2022);
    height: 1px;
    width: 100%;
    ${(p) => p.margin && `margin: ${p.margin}`};
    ${(p) => p.styles};
`;
