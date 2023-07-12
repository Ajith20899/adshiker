import { all, takeLatest, fork, put, call } from "redux-saga/effects";
import { JourneyStatus, PincodeDetails, AccountDetails } from "./actionTypes";
import {
    fetchPincodeSuccess,
    fetchPincodeFailed,
    fetchJourneyStatusFailure,
    fetchJourneyStatusSuccess,
    fetchJourneyStatusUpdate,
    fetchAccountDetailsFailure,
    fetchAccountDetailsSuccess,
    fetchAccountDetailsUpdate,
} from "./actions";
import {
    getPincodeDetailsAPI,
    getJourneyStatusAPI,
    userAccountDetailsAPI,
} from "./services";
import { history } from "@utils/history";

function* fetchPincodeDetails(action: any) {
    try {
        const response = yield getPincodeDetailsAPI(action.payload, "IN");
        const { hasError, errorMessage, data } = response;

        if (hasError && errorMessage?.length > 0) {
            yield put(fetchPincodeFailed(errorMessage));
        } else {
            const { district, state, country } = data.data;
            yield put(fetchPincodeSuccess({ district, state, country }));
        }
    } catch (e) {
        yield put(fetchPincodeFailed("Network error"));
    }
}

function* fetchJourneyStatusAsync() {
    yield put(fetchJourneyStatusUpdate());
    try {
        const response = yield getJourneyStatusAPI();
        const { errorMessage, redirectUrl, status } = response;
        if (errorMessage || !status) {
            yield put(fetchJourneyStatusFailure(errorMessage));
            yield call([history, history.push], "/error");
        } else {
            yield put(fetchJourneyStatusSuccess(redirectUrl));
            if (redirectUrl === "/") {
                yield call([history, history.push], "/");
            }
        }
    } catch (e) {
        yield put(fetchJourneyStatusFailure("Network error"));
        yield call([history, history.push], "/error");
    }
}

function* fetchUserAccountDetails() {
    try {
        yield put(fetchAccountDetailsUpdate());
        const response = yield userAccountDetailsAPI();
        const { errorMessage, user, status } = response;
        console.log(response);
        if (errorMessage || !status) {
            yield put(fetchAccountDetailsFailure(errorMessage));
        } else {
            yield put(fetchAccountDetailsSuccess(user));
        }
    } catch (error) {
        yield put(fetchJourneyStatusFailure("Network error"));
    }
}

export function* influencerSaga() {
    yield all([
        takeLatest(PincodeDetails.FETCH_PINCODE_DETAILS, fetchPincodeDetails),
        takeLatest(JourneyStatus.FETCH_JOURNEY_STATUS, fetchJourneyStatusAsync),
        takeLatest(
            AccountDetails.FETCH_ACCOUNT_DETAILS,
            fetchUserAccountDetails
        ),
    ]);
}
