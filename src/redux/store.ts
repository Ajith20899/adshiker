import { createStore, IModuleStore } from "redux-dynamic-modules";
import { getSagaExtension } from "redux-dynamic-modules-saga";
import throttle from "lodash.throttle";
import { saveState } from "@utils/dataStorage";

const store: IModuleStore<any> = createStore({
    extensions: [getSagaExtension({})],
});

store.subscribe(
    throttle(() => {
        saveState({
            ...store.getState(),
        });
    }, 1000)
);

export default store;
