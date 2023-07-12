import {
    CategoryI,
    InstagramUserI,
} from "@pages/influencerOnboarding/mobile/components/accountStatus/types";
import {
    PincodeDetails,
    JourneyStatus,
    InfluencerDetails,
    AccountDetails,
} from "./actionTypes";
import * as state from "./types";

export type InfluencerType = state.IBasicDetState &
    state.ILocationDetState &
    state.IAccountDetState &
    state.IJourneyStatus & {
        accountDetails: state.AccountVerificationResponse;
    } & {
        journeyDone: boolean;
    };

const influencerOnboardingState: InfluencerType = {
    basicDetails: { name: "", email: "" },
    date: undefined,
    gender: "",
    instagram: {
        profilePicUrl: "",
        userName: "",
        fullName: "",
        accountCategories: [],
    },
    pincode: "",
    pincodeDetails: { district: "", state: "", country: "" },
    error: null,
    redirectUrl: "",
    urlLoading: false,
    urlError: "",
    firstTime: true,
    accountDetails: {
        accountStatus: "",
        accountCategories: [],
        profilePicUrl: "",
        accountPlatform: "",
        accountUserFullName: "",
        updatedAt: 0,
        secretCode: "",
        createdAt: 0,
        accountUserName: "",
        error: "",
        loading: false,
    },
    journeyDone: false,
};

export function influencerOnboardingReducer(
    state = influencerOnboardingState,
    action: any
) {
    switch (action.type) {
        case InfluencerDetails.INFLUENCER_BASIC_DETAILS:
            return {
                ...state,
                basicDetails: action.payload.basicDetails,
                date: action.payload.date,
                gender: action.payload.gender,
            };
        case InfluencerDetails.INFLUENCER_LOCATION_DETAILS:
            return {
                ...state,
                ...action.payload,
            };
        case InfluencerDetails.INFLUENCER_ACCOUNT_DETAILS:
            const instagram: InstagramUserI = action.payload.instagram;
            const categories: CategoryI[] = action.payload.accountCategories;

            return {
                ...state,
                instagram: {
                    profilePicUrl: instagram.profilePicUrl,
                    fullName: instagram.fullName,
                    userName: instagram.userName,
                    accountCategories: categories,
                },
            };
        case PincodeDetails.FETCH_SUCCEEDED:
            return {
                ...state,
                pincodeDetails: action.payload,
                error: null,
            };
        case PincodeDetails.FETCH_FAILED:
            return {
                ...state,
                pincodeDetails: { district: "", state: "", country: "" },
                error: action.payload,
            };
        case JourneyStatus.FETCH_JOURNEY_STATUS_SUCCESS:
            return {
                ...state,
                redirectUrl: action.payload,
                urlLoading: false,
                urlError: "",
            };

        case JourneyStatus.FETCH_JOURNEY_STATUS_UPDATE:
            return {
                ...state,
                urlLoading: true,
                redirectUrl: "",
                urlError: "",
                firstTime: false,
            };
        case JourneyStatus.FETCH_JOURNEY_STATUS_FAILURE:
            return {
                ...state,
                redirectUrl: "",
                urlLoading: false,
                urlError: action.payload || "Error",
            };
        case JourneyStatus.SET_JOURNEY_STATUS:
            return {
                ...state,
                journeyDone: action.payload,
            };
        case AccountDetails.FETCH_ACCOUNT_DETAILS_FAILURE:
            return {
                ...state,
                accountDetails: {
                    createdAt: 0,
                    accountCategories: [],
                    accountStatus: "",
                    accountUserFullName: "",
                    accountUserName: "",
                    secretCode: "",
                    profilePicUrl: "",
                    error: action.payload,
                    updatedAt: 0,
                    accountPlatform: "",
                    loading: false,
                },
            };
        case AccountDetails.FETCH_ACCOUNT_DETAILS_SUCCESS:
            return {
                ...state,
                accountDetails: {
                    ...action.payload,
                    error: "",
                    loading: false,
                },
            };

        case AccountDetails.FETCH_ACCOUNT_DETAILS_UPDATE:
            return {
                ...state,
                "accountDetails.loading": true,
                "accountDetails.error": "",
            };
        case AccountDetails.EMPTY_ACCOUNT_DETAILS:
            return {
                ...state,
                instagram: {
                    fullName: "",
                    userName: "",
                    profilePicUrl: "",
                    accountCategories: [],
                },
            };

        default:
            return state;
    }
}
