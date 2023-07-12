import { getRequest } from "@services/http_requests";
import { journeyURL, pincodeURL, accountDetURL } from "@services/urls";

export const getPincodeDetailsAPI = async (
    pincode: string,
    countryCode: string
) => {
    const response = await getRequest(pincodeURL.PincodeDetails, {
        pincode,
        countryCode,
    });

    if (response?.data.errorMessage) {
        return {
            hasError: true,
            errorMessage: response.data.errorMessage || "Error",
            data: null,
            status: response.data.status,
        };
    }
    return {
        hasError: false,
        data: response,
        status: response.data.status,
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

export const userAccountDetailsAPI = async () => {
    const { data: response } = await getRequest(
        accountDetURL.userAccountDetails
    );
    return response;
};
