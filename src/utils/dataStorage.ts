import Cookies from "universal-cookie";

/* -- redux store */
export const loadState = () => {
    const cookies = new Cookies();
    try {
        // const userId = cookies.get("");
        // if (userId) {
        // 	const serializedState = localStorage.getItem(``);
        // 	if (serializedState === null) {
        // 		return undefined;
        // 	}
        // 	return JSON.parse(serializedState);
        // }
        return undefined;
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: any) => {
    const cookies = new Cookies();
    try {
        // const userId = cookies.get("");
        // if (userId) {
        // 	const serializedState = JSON.stringify(state);
        // 	localStorage.setItem(``, serializedState);
        // }
    } catch (e) {
        console.log("save state error ", e);
    }
};

export const getTokens = () => {
    const cookies = new Cookies();
    const userId = cookies.get("");
    const identityToken = cookies.get(``);
    const accessToken = cookies.get(``);
    return {
        identityToken,
        accessToken,
    };
};
