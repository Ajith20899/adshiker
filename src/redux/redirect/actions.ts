import { UPDATE_REDIRECTION_PARAM } from "./actionTypes";
import { RedirectI } from "./types";

export const updateRedirectionParam = (value: RedirectI) => ({
    type: UPDATE_REDIRECTION_PARAM,
    payload: value,
});
