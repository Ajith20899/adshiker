import React, { useState, useEffect } from "react";

import { SingleLineOtp } from "@components/library/otp";
import {
    ErroredText,
    HeadingText,
    SubtitleText,
} from "@pages/auth/mobile/components/text";

import { OtpInputPropsI } from "./types";

import * as Styles from "./styles";
import { Column, Row, BoldButton } from "@pages/auth/styles";

import pencilLogo from "@icons/pencil.svg";

function OtpInput(props: OtpInputPropsI) {
    const {
        error,
        countryCode,
        phoneNumber,
        loading,
        timer,
        loginMode,
        otpHandler,
        editHandler,
        resendHandler,
        signupHandler,
        timerHandler,
    } = props;

    const [disable, setDisable] = useState(false);

    const resendCallback = () => {
        setDisable(true);
        resendHandler(() => setDisable(false));
    };

    useEffect(() => {
        if (timer > 0) {
            var timout = setTimeout(() => {
                timerHandler(timer - 1);
            }, 1000);
        } else {
            return;
        }
        return () => clearTimeout(timout);
    });

    useEffect(() => {
        if (timer === 0) {
            setDisable(false);
        }
    }, [timer]);

    return (
        <Column height={"100vh"}>
            <HeadingText>verify otp</HeadingText>
            <SubtitleText width={"284px"} margin={"8px 0 0 0"}>
                we have sent an OTP to your number for verification
            </SubtitleText>
            <Row margin={"20px 0 0 0"}>
                <Styles.NumberText>{`+${countryCode} ${phoneNumber}`}</Styles.NumberText>
                <img
                    onClick={editHandler}
                    width={"12px"}
                    src={pencilLogo}
                    alt="edit"
                />
            </Row>
            <SingleLineOtp
                styles={"margin-top: 30px"}
                fontSize={"40px; font-weight: bold"}
                placeholder={"0 0 0 0"}
                gap={"12px"}
                width={"160px"}
                otpHandler={otpHandler}
            />
            <ErroredText padding={"10px 0 30px"} error={error}>
                Invalid OTP
            </ErroredText>
            <Styles.ResendText
                line={!disable}
                color={disable ? "rgba(222, 222, 222, 0.1)" : "#DEDEDE"}
                onClick={disable ? undefined : resendCallback}
            >
                RESEND OTP
            </Styles.ResendText>
            {timer > 0 && <Styles.TimerText>0:{timer}</Styles.TimerText>}
            <BoldButton
                loader={loading}
                disabled={loading}
                onClick={signupHandler}
                borderRadius={"50px"}
                name={loginMode ? "LOG IN" : "SIGN UP"}
                isColor
                margin={"78px 0 0 0"}
            />
        </Column>
    );
}

export default OtpInput;
