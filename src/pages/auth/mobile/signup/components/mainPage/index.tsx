import React, { useState } from "react";

import PhoneNumberInput from "@pages/auth/mobile/components/phoneNumber";
import Header from "@pages/auth/mobile/components/header";

import { signUp, signIn } from "@pages/auth/common";

import { SNACKBAR_TYPES } from "@utils/constants";

import { PhoneNumberSignUpPropsI } from "./types";

import { Flex, BoldButton } from "@pages/auth/styles";

import { getRequest } from "@services/http_requests";
import { userURL } from "@services/urls";

function PhoneNumberSignUp(props: PhoneNumberSignUpPropsI) {
    const {
        phoneNumber,
        setPhoneNumber,
        countryCode,
        setSession,
        setPageState,
        influencer,
        setCountryCode,
        showSnackbar,
    } = props;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const phoneNumberHandler = (e: any) => {
        if (e.target.validity.valid && /[0-9]*/.test(e.target.value)) {
            setError(false);
            setPhoneNumber(e.target.value);
        }
    };

    const handleSignUpResponse = (tempPhoneNumber: string) => {
        signIn(tempPhoneNumber, (e: any, result: any) => {
            setLoading(false);
            if (result) {
                setSession(result);
                showSnackbar({
                    status: SNACKBAR_TYPES.success,
                    msg: "OTP SENT SUCCESSFULLY",
                });
                setPageState("otp");
            } else {
                showSnackbar({
                    status: SNACKBAR_TYPES.failure,
                    msg: "OOPS! SOMETHING IS NOT RIGHT. TRY AGAIN",
                });
            }
        });
    };

    const checkAndProceed = () => {
        let tempPhoneNumber = phoneNumber.trim();
        if (tempPhoneNumber.length !== 10) {
            setError(true);
        } else if (error) {
            setError(false);
        }
        if (tempPhoneNumber.length === 10 && !isNaN(Number(tempPhoneNumber))) {
            setLoading(true);
            setPhoneNumber(tempPhoneNumber);
            getRequest(userURL.AuthLoggedInCheck, {
                phoneNumber: `+${countryCode}${tempPhoneNumber}`,
            })
                .then((res) => {
                    if (res.data.isExist) {
                        handleSignUpResponse(
                            `+${countryCode}${tempPhoneNumber}`
                        );
                    } else {
                        signUp(
                            `+${countryCode}${tempPhoneNumber}`,
                            influencer ? "INFLUENCER" : "ADVERTISER",
                            (e: any, result: any) => {
                                if (result) {
                                    handleSignUpResponse(
                                        `+${countryCode}${tempPhoneNumber}`
                                    );
                                } else {
                                    if (e.code === "UsernameExistsException") {
                                        handleSignUpResponse(
                                            `+${countryCode}${tempPhoneNumber}`
                                        );
                                    } else {
                                        showSnackbar({
                                            status: SNACKBAR_TYPES.failure,
                                            msg:
                                                "OOPS! SOMETHING IS NOT RIGHT. TRY AGAIN",
                                        });
                                        setLoading(false);
                                    }
                                }
                            }
                        );
                    }
                })
                .catch((e) => {
                    showSnackbar({
                        status: SNACKBAR_TYPES.failure,
                        msg: "OOPS! SOMETHING IS NOT RIGHT. TRY AGAIN",
                    });
                    setLoading(false);
                });
        }
    };
    return (
        <>
            <Header option="login" backNav={() => setPageState("type")} />
            <Flex
                direction="column"
                width="100%"
                margin="5% 0 0 0"
                justifyContent={"center"}
            >
                <PhoneNumberInput
                    error={error}
                    influencer={influencer}
                    value={phoneNumber}
                    countryCode={countryCode}
                    countryCodeHandler={setCountryCode}
                    phoneNumberHandler={phoneNumberHandler}
                />
                <BoldButton
                    onClick={checkAndProceed}
                    borderRadius={"70px"}
                    name={"PROCEED"}
                    isColor
                    loader={loading}
                    disabled={loading}
                    margin={"35px auto 0 auto"}
                />
            </Flex>
        </>
    );
}

export default PhoneNumberSignUp;
