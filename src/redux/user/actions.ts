import { JourneyStatus, SagaActionTypes } from "./actionTypes";

export const getUserBasicInformations = () => ({
    type: SagaActionTypes.GET_USER_BASIC_INFORMATIONS,
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
