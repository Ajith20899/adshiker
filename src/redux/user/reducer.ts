import { ActionTypes, JourneyStatus } from "./actionTypes";
import { IJourneyStatus, IUserState } from "./types";

var userState: IUserState & IJourneyStatus = {
    userId: "",
    phoneNumber: "",
    fullName: null,
    dob: null,
    emailId: null,
    gender: null,
    isJourneyDone: false,
    pincode: null,
    createdAt: Date.now(),
    redirectUrl: "",
    urlLoading: false,
    urlError: "",
    firstTime: true,
};

function userReducer(state = userState, action: any) {
    switch (action.type) {
        case ActionTypes.UPDATE_USER_BASIC_INFORMATIONS:
            return {
                ...state,
                ...(action.payload as IUserState),
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
        default:
            return state;
    }
}

export default userReducer;
