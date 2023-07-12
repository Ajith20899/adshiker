import { ISagaModule } from "redux-dynamic-modules-saga";
import { influencerSaga } from "./saga";
import { influencerOnboardingReducer } from "./reducer";

export function influencerOnboardingModule(): ISagaModule<any> {
    return {
        id: "influencer",
        reducerMap: {
            influencer: influencerOnboardingReducer,
        },
        sagas: [influencerSaga],
    };
}
