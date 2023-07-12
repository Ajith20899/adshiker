import React, { useState, lazy } from "react";

import { Snackbar } from "@components/library/snackbar";
const VerifyOTPPage = lazy(() => import("./components/verifyOtpPage"));
const PhoneNumberSignUp = lazy(() => import("./components/mainPage"));
const SelectTypePage = lazy(() => import("./components/selectTypePage"));
const SuccessPage = lazy(() => import("./components/successPage"));

function MobileSignUpPage() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("91");
    const [pageState, setPageState] = useState("type");
    const [session, setSession] = useState(null);
    const [influencer, setInfluencer] = useState(true);
    const [finalType, setFinalType] = useState("");
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
        const timeOutID = window.setTimeout(() => {
            setSnackbar({
                status: "",
                msg: "",
                show: false,
                timeOutID: undefined,
            });
        }, 5000);
        setSnackbar({ ...data, show: true, timeOutID: timeOutID });
    };

    let content: JSX.Element = <></>;
    switch (pageState) {
        case "type":
            content = (
                <SelectTypePage
                    setInfluencer={setInfluencer}
                    setPageState={setPageState}
                />
            );
            break;

        case "phoneNumber":
            content = (
                <>
                    <PhoneNumberSignUp
                        countryCode={countryCode}
                        influencer={influencer}
                        phoneNumber={phoneNumber}
                        setCountryCode={setCountryCode}
                        setPhoneNumber={setPhoneNumber}
                        setPageState={setPageState}
                        setSession={setSession}
                        showSnackbar={showSnackbar}
                    />

                    {snackbar.show && snackbar.status && (
                        <Snackbar type={snackbar.status} text={snackbar.msg} />
                    )}
                </>
            );
            break;

        case "otp":
            content = (
                <>
                    <VerifyOTPPage
                        setPageState={setPageState}
                        session={session}
                        country={countryCode}
                        influencer={influencer}
                        setFinalType={setFinalType}
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
            break;

        case "success":
            content = <SuccessPage influencer={finalType} />;
            break;

        default:
            content = <>Error</>;
    }
    return content;
}

export default MobileSignUpPage;
