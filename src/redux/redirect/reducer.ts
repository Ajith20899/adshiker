import { RedirectI } from "./types";
import { UPDATE_REDIRECTION_PARAM } from "./actionTypes";

const redirectionState: RedirectI = {
    requireRedirectUrl: true,
    requiredJourneyStep: undefined,
};

export function redirectReducer(
    state = redirectionState,
    action: any
): RedirectI {
    switch (action.type) {
        case UPDATE_REDIRECTION_PARAM:
            return {
                requireRedirectUrl: action.payload.requireRedirectUrl,
                requiredJourneyStep: action.payload.requiredJourneyStep,
            };
        default:
            return state;
    }
}
