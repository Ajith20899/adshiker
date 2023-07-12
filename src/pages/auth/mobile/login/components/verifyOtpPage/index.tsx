import React, { useState } from "react";
import Cookies from "universal-cookie";

import OtpInput from "@pages/auth/mobile/components/otp";

import { userURL } from "@services/urls";
import { getRequest } from "@services/http_requests";

import { signIn, otpVerification } from "@pages/auth/common";
import { getMaxExpireDate } from "@utils/date";
import { history } from "@utils/history";
import { SNACKBAR_TYPES } from "@utils/constants";

import { VerifyOTPPagePropsI } from "../../types";

function VerifyOTPPage(props: VerifyOTPPagePropsI) {
    const {
        session,
        phoneNumber,
        country,
        setSession,
        setPhoneNumber,
        setProceed,
        showSnackbar,
    } = props;

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [timer, setTimer] = useState(0);

    const sendOtp = (tempPhoneNumber: string, func: () => void) => {
        setPhoneNumber(tempPhoneNumber);
        getRequest(userURL.AuthLoggedInCheck, {
            phoneNumber: `+${country}${tempPhoneNumber}`,
        })
            .then((res) => {
                if (res.data.isExist) {
                    signIn(
                        `+${country}${tempPhoneNumber}`,
                        (e: any, result: any) => {
                            if (result) {
                                setSession(result);
                                setProceed(true);
                                showSnackbar({
                                    status: SNACKBAR_TYPES.success,
                                    msg: "OTP SENT SUCCESSFULLY",
                                });
                                setTimer(30);
                            } else {
                                setTimer(0);
                                showSnackbar({
                                    status: SNACKBAR_TYPES.failure,
                                    msg:
                                        "OOPS! SOMETHING IS NOT RIGHT. TRY AGAIN",
                                });
                                func();
                            }
                        }
                    );
                } else {
                    setTimer(0);
                    showSnackbar({
                        status: SNACKBAR_TYPES.failure,
                        msg: "OOPS! SOMETHING IS NOT RIGHT. TRY AGAIN",
                    });
                    func();
                }
            })
            .catch((e) => {
                func();
            });
    };

    const resendOtp = (func: () => void) => {
        sendOtp(phoneNumber, func);
    };

    const checkOtpAndProceed = () => {
        let currOtp = otp.trim();
        if (currOtp.length !== 4) {
            setError(true);
        } else if (error) {
            setError(false);
        }
        console.log(currOtp);

        if (currOtp.length === 4) {
            setLoading(true);
            otpVerification(session, currOtp, (e: any, user: any) => {
                if (user) {
                    setSession(null);
                    const cookie = new Cookies();
                    const { sub } = user.attributes;
                    const accessToken =
                        user.signInUserSession.accessToken.jwtToken;
                    const idToken = user.signInUserSession.idToken.jwtToken;
                    const refreshToken =
                        user.signInUserSession.refreshToken.token;
                    cookie.set("__adshiker_user_id__", sub, {
                        path: "/",
                        expires: getMaxExpireDate(),
                    });
                    cookie.set(`__adshiker_${sub}_a_i_token__`, accessToken, {
                        path: "/",
                        expires: getMaxExpireDate(),
                    });
                    cookie.set(`__adshiker_${sub}_id_token__`, idToken, {
                        path: "/",
                        expires: getMaxExpireDate(),
                    });
                    cookie.set(
                        `__adshiker_${sub}_ref_i_token__`,
                        refreshToken,
                        {
                            path: "/",
                            expires: getMaxExpireDate(),
                        }
                    );
                    if (user.attributes["custom:user_type"] !== "ADVERTISER") {
                        history.replace(
                            "/influencer/onboarding/personal-details"
                        );
                    } else {
                        history.replace("/");
                    }
                } else {
                    setLoading(false);
                    setError(true);
                    if (e.code === "NotAuthorizedException") {
                        if (e.message === "Invalid session for the user.") {
                            setOtp("");
                            showSnackbar({
                                status: SNACKBAR_TYPES.failure,
                                msg: "Invalid session for the user.",
                            });
                            setProceed(false);
                        } else if (
                            e.message === "Incorrect username or password."
                        ) {
                            setError(true);
                        }
                    }
                }
            });
        }
    };

    const editHandler = () => {
        setPhoneNumber("");
        setProceed(false);
        setSession(null);
    };

    return (
        <OtpInput
            error={error}
            countryCode={country}
            phoneNumber={phoneNumber}
            loading={loading}
            timer={timer}
            otp={otp}
            loginMode
            otpHandler={(x) => setOtp(x)}
            editHandler={editHandler}
            resendHandler={resendOtp}
            signupHandler={checkOtpAndProceed}
            timerHandler={(x) => setTimer(x)}
        />
    );
}

export default VerifyOTPPage;
