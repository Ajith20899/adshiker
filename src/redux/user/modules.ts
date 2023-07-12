import { ISagaModule } from "redux-dynamic-modules-saga";
import userReducer from "./reducer";
import userSaga from "./saga";

export function getUserModule(): ISagaModule<any> {
    return {
        id: "user",
        reducerMap: {
            user: userReducer,
        },
        sagas: [userSaga],
    };
}
