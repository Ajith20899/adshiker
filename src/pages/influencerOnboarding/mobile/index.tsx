import React, { lazy } from "react";
import { useParams } from "react-router-dom";
import { Pages } from "../constants";

const PersonalDetails = lazy(() => import("./components/personalDetails"));
const LocationDetails = lazy(() => import("./components/locationDetails"));
const AccountStatus = lazy(() => import("./components/accountStatus"));
const AccountVerification = lazy(
    () => import("./components/accountVerification")
);

const Mobile = () => {
    const { influencerPage } = useParams<{ influencerPage: string }>();

    switch (influencerPage) {
        case Pages.PERSONAL_DETAILS:
            return <PersonalDetails />;
        case Pages.LOCATION_DETAILS:
            return <LocationDetails />;
        case Pages.ACCOUNT_DETAILS:
            return <AccountStatus />;
        case Pages.ACCOUNT_VERIFICATION:
            return <AccountVerification />;
        default:
            return <></>;
    }
};

export default Mobile;
