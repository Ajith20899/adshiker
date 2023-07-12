import { Dispatch } from "redux";
import {
    influenceBasicDetailsAction,
    influenceLocationDetailsAction,
} from "@redux/influencer/actions";
import { journeyURL } from "@services/urls";
import { history } from "@utils/history";
import { Pages } from "@pages/influencerOnboarding/constants";

export const handleInfluencerData = async (
    getRequest,
    requireRedirectUrl: boolean,
    requiredJourneyStep: string | undefined,
    dispatch: Dispatch<any>
) => {
    const response = await getRequest(journeyURL.JourneyStatus, {
        requireRedirectUrl: requireRedirectUrl ? undefined : requireRedirectUrl,
        requiredJourneyStep,
    });
    if (response.data?.status) {
        const { redirectUrl, data } = response.data;
        let lastPath: string = "";
        if (redirectUrl) {
            const paths = redirectUrl.split("/");
            lastPath = paths[paths.length - 1];
        }
        switch (requiredJourneyStep || lastPath) {
            case Pages.PERSONAL_DETAILS:
                const d = new Date(data.dob);
                let day: string = "" + (d.getDate() || "");
                if (day.length === 1) {
                    day = "0" + day;
                }
                let month: string = "" + (d.getMonth() + 1 || "");
                if (month.length === 1) {
                    month = "0" + month;
                }
                dispatch(
                    influenceBasicDetailsAction({
                        basicDetails: {
                            name: data.fullName,
                            email: data.emailId,
                        },
                        date: data.dob,
                        gender: data.gender,
                    })
                );
                break;
            case Pages.LOCATION_DETAILS:
                dispatch(
                    influenceLocationDetailsAction({
                        pincode: data.pincode,
                        pincodeDetails: {
                            district: data.cityName,
                            state: data.stateName,
                            country: data.country,
                        },
                    })
                );
        }
        if (redirectUrl) {
            history.push(redirectUrl);
        }
    } else history.push("/error");
};
