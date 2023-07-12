import { all, takeLatest, call, put } from "redux-saga/effects";
import { ActionTypes, JourneyStatus, SagaActionTypes } from "./actionTypes";
import { getJourneyStatusAPI, getUserBasicInformationAPI } from "./services";
import { history } from "@utils/history";
import {
    fetchJourneyStatusFailure,
    fetchJourneyStatusSuccess,
    fetchJourneyStatusUpdate,
} from "./actions";

// get request

function* getUserBasicInformationSaga() {
    const response = yield call(getUserBasicInformationAPI);
    const { hasError, data, redirectionURL, errorMessage } = response;

    if (hasError && errorMessage?.length > 0) {
    } else {
        yield put({
            type: ActionTypes.UPDATE_USER_BASIC_INFORMATIONS,
            payload: data,
        });
        if (redirectionURL) {
            yield call([history, history.push], redirectionURL);
        }
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
            // yield put(setJourneyStatusAction(redirectUrl === "/"));
            if (redirectUrl === "/") {
                yield call([history, history.push], "/");
            }
        }
    } catch (e) {
        yield put(fetchJourneyStatusFailure("Network error"));
        yield call([history, history.push], "/error");
    }
}

function* userSaga() {
    yield all([
        takeLatest(
            SagaActionTypes.GET_USER_BASIC_INFORMATIONS,
            getUserBasicInformationSaga
        ),
        takeLatest(JourneyStatus.FETCH_JOURNEY_STATUS, fetchJourneyStatusAsync),
    ]);
}
export default userSaga;
