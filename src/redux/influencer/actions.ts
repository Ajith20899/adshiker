import {
    CategoryI,
    InstagramUserI,
} from "@pages/influencerOnboarding/mobile/components/accountStatus/types";
import {
    InfluencerDetails,
    JourneyStatus,
    PincodeDetails,
    AccountDetails,
} from "./actionTypes";
import { AccountVerificationResponse } from "./types";

export const influenceBasicDetailsAction = (details: any) => {
    return {
        type: InfluencerDetails.INFLUENCER_BASIC_DETAILS,
        payload: details,
    };
};

export const influenceAccountDetailsAction = (
    details: { instagram: InstagramUserI } & { accountCategories: CategoryI[] }
) => {
    return {
        type: InfluencerDetails.INFLUENCER_ACCOUNT_DETAILS,
        payload: details,
    };
};

export const influenceLocationDetailsAction = (details: any) => {
    return {
        type: InfluencerDetails.INFLUENCER_LOCATION_DETAILS,
        payload: details,
    };
};

export const fetchPincodeDetails = (pincode: string) => ({
    type: PincodeDetails.FETCH_PINCODE_DETAILS,
    payload: pincode,
});

export const fetchPincodeSuccess = (pincodeData: any) => ({
    type: PincodeDetails.FETCH_SUCCEEDED,
    payload: pincodeData,
});

export const fetchPincodeFailed = (error: any) => ({
    type: PincodeDetails.FETCH_FAILED,
    payload: error,
});

export const fetchJourneyStatus = () => ({
    type: JourneyStatus.FETCH_JOURNEY_STATUS,
});

export const fetchJourneyStatusUpdate = () => ({
    type: JourneyStatus.FETCH_JOURNEY_STATUS_UPDATE,
    payload: {},
});

export const fetchJourneyStatusSuccess = (status: string) => ({
    type: JourneyStatus.FETCH_JOURNEY_STATUS_SUCCESS,
    payload: status,
});

export const fetchJourneyStatusFailure = (error: string) => ({
    type: JourneyStatus.FETCH_JOURNEY_STATUS_FAILURE,
    payload: error,
});

export const setJourneyStatusAction = (journeyDone: boolean) => ({
    type: JourneyStatus.SET_JOURNEY_STATUS,
    payload: journeyDone,
});

export const fetchAccountDetails = () => ({
    type: AccountDetails.FETCH_ACCOUNT_DETAILS,
});

export const fetchAccountDetailsUpdate = () => ({
    type: AccountDetails.FETCH_ACCOUNT_DETAILS_UPDATE,
});

export const fetchAccountDetailsSuccess = (
    data: AccountVerificationResponse
) => ({
    type: AccountDetails.FETCH_ACCOUNT_DETAILS_SUCCESS,
    payload: data,
});

export const fetchAccountDetailsFailure = (error: string) => ({
    type: AccountDetails.FETCH_ACCOUNT_DETAILS_FAILURE,
    payload: error,
});

export const emptyAccountDetailsAction = () => ({
    type: AccountDetails.EMPTY_ACCOUNT_DETAILS,
});
