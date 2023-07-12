import { getRequest, postRequest } from "@services/http_requests";
import { journeyURL, userURL } from "@services/urls";

export const getUserBasicInformationAPI = async () => {
    const response: any = await getRequest(userURL.UserBasicInformation);
    if (response?.data?.errorMessage) {
        return {
            hasError: true,
            errorMessage: response.data.errorMessage,
            status: response.status,
        };
    }
    return {
        hasError: false,
        data: response?.data?.user,
        redirectionURL: response?.data?.redirectionURL,
    };
};

export const getJourneyStatusAPI = async () => {
    const { data: response } = await getRequest(journeyURL.JourneyStatus);
    if (response && response.status) {
        return {
            errorMessage: "",
            redirectUrl: response.redirectUrl,
            status: response.status,
        };
    } else {
        return {
            errorMessage: response.errorMessage || "Error",
            status: response.status,
            redirectUrl: "",
        };
    }
};
