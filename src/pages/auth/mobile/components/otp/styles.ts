import styled from "styled-components";
import { PlainText } from "@pages/auth/mobile/components/text";

export const TimerText = styled(PlainText)`
    font-weight: 500;
    font-size: 15px;
    line-height: 12px;
    letter-spacing: 0.1em;
    color: #dedede;
    margin-top: 8px;
`;

export const NumberText = styled(PlainText)`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.06em;
    margin-right: 8px;
`;

export const ResendText = styled(PlainText)<{
    color: string;
}>`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.3em;
    color: ${(p) => p.color};
`;
