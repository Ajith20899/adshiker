import React, { useState } from "react";

import PhoneNumberInput from "@pages/auth/mobile/components/phoneNumber";
import VerifyOTPPage from "./components/verifyOtpPage";
import Header from "@pages/auth/mobile/components/header";
import { Snackbar } from "@components/library/snackbar";

import { Flex, BoldButton } from "@pages/auth/styles";

import { getRequest } from "@services/http_requests";
import { userURL } from "@services/urls";
import { signIn } from "@pages/auth/common";

import { SNACKBAR_TYPES } from "@utils/constants";

import UserImg from "@icons/userImg.svg";

function MobileLoginPage() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("91");
    const [proceed, setProceed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [session, setSession] = useState(null);

    const [error, setError] = useState(false);

    const [snackbar, setSnackbar] = useState<{
        status: string;
        msg: string;
        show: boolean;
        timeOutID?: number;
    }>({
        status: "",
        msg: "",
        show: false,
        timeOutID: undefined,
    });

    const showSnackbar = (data: { status: string; msg: string }) => {
        if (snackbar.timeOutID) {
            window.clearTimeout(snackbar.timeOutID);
        }
        const timeOutID = window.setTimeout(
            () =>
                setSnackbar({
                    status: "",
                    msg: "",
                    show: false,
                    timeOutID: undefined,
                }),
            5000
        );
        setSnackbar({ ...data, show: true, timeOutID: timeOutID });
    };

    const phoneNumberHandler = (e: any) => {
        if (e.target.validity.valid && /[0-9]*/.test(e.target.value)) {
            setError(false);
            setPhoneNumber(e.target.value);
        }
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
                        signIn(
                            `+${countryCode}${tempPhoneNumber}`,
                            (e: any, result: any) => {
                                if (result) {
                                    setSession(result);
                                    showSnackbar({
                                        status: SNACKBAR_TYPES.success,
                                        msg: "OTP SENT SUCCESSFULLY",
                                    });
                                    setProceed(true);
                                } else {
                                    showSnackbar({
                                        status: SNACKBAR_TYPES.failure,
                                        msg:
                                            "OOPS! SOMETHING IS NOT RIGHT. TRY AGAIN",
                                    });
                                }
                                setLoading(false);
                            }
                        );
                    } else {
                        showSnackbar({
                            status: SNACKBAR_TYPES.failure,
                            msg: "USER ACCOUNT DOESN'T EXIST",
                        });
                        setLoading(false);
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

    let content: JSX.Element;
    if (proceed) {
        content = (
            <>
                <VerifyOTPPage
                    setProceed={setProceed}
                    session={session}
                    country={countryCode}
                    setSession={setSession}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    showSnackbar={showSnackbar}
                />

                {snackbar.show && snackbar.status && (
                    <Snackbar type={snackbar.status} text={snackbar.msg} />
                )}
            </>
        );
    } else {
        content = (
            <>
                <Header option="signup" />
                <Flex
                    direction="column"
                    width="100%"
                    margin="5% 0 0 0"
                    justifyContent={"center"}
                >
                    <PhoneNumberInput
                        error={error}
                        defaultImg={UserImg}
                        value={phoneNumber}
                        countryCode={countryCode}
                        countryCodeHandler={setCountryCode}
                        phoneNumberHandler={phoneNumberHandler}
                    />
                </Flex>
                <BoldButton
                    onClick={checkAndProceed}
                    borderRadius={"70px"}
                    name={"PROCEED"}
                    isColor
                    loader={loading}
                    disabled={loading}
                    margin={"60px auto 0 auto"}
                />

                {snackbar.show && snackbar.status && (
                    <Snackbar type={snackbar.status} text={snackbar.msg} />
                )}
            </>
        );
    }
    return content;
}

export default MobileLoginPage;
