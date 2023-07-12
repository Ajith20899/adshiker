import { ISagaModule } from "redux-dynamic-modules-saga";
import { redirectReducer } from "./reducer";

export function getRedirectModule(): ISagaModule<any> {
    return {
        id: "redirect",
        reducerMap: {
            redirect: redirectReducer,
        },
        sagas: [],
    };
}
