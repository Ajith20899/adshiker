import axios from "axios";
import { getTokens } from "@utils/dataStorage";
import Cookies from "universal-cookie";

export const getRequest = async (url: string, params?: any) => {
    try {
        const { accessToken, identityToken } = getTokens();
        const userId = new Cookies().get("__adshiker_user_id__");
        let newParams = params || {};

        newParams["userId"] = userId;
        const response = await axios({
            method: "GET",
            url,
            params: newParams,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Authorization: identityToken,
                "Access-Token": accessToken,
            },
        });
        return response;
    } catch (e) {
        if (e?.response) {
            return e.response;
        }
        return e;
    }
};

export const postRequest = async (url: string, payload: any = {}) => {
    try {
        const { accessToken, identityToken } = getTokens();
        const userId = new Cookies().get("__adshiker_user_id__");
        if (payload) {
            payload["userId"] = userId;
        }
        const response = await axios({
            method: "POST",
            url,
            data: JSON.stringify(payload),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Authorization: identityToken,
                "Access-Token": accessToken,
            },
        });
        return response;
    } catch (e) {
        if (e?.response) {
            return e.response;
        }
        return e;
    }
};
