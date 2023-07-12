const urlOrigin = `https://ahiln66lma.execute-api.ap-south-1.amazonaws.com`;
const urlOrigin2 = `https://0bp0wwtdq8.execute-api.ap-south-1.amazonaws.com`;
const urlOrigin3 = `https://se22qx4zci.execute-api.ap-south-1.amazonaws.com`;
const urlOrigin4 = `https://psst7q2fb1.execute-api.ap-south-1.amazonaws.com`;

const stage = "dev";

export const backURL = {
    EditPage: `${urlOrigin}/${stage}/user/influencer/journey/back`,
};

export const pincodeURL = {
    PincodeDetails: `${urlOrigin}/${stage}/user/pincode-search`,
};

export const accountURL = {
    accountDetails: `${urlOrigin2}/${stage}/user/account/create`,
};

export const userURL = {
    UserBasicInformation: `${urlOrigin3}/${stage}/user/basic-details`,
    AuthLoggedInCheck: `${urlOrigin}/${stage}/auth/check-logged-user`,
};

export const journeyURL = {
    JourneyStatus: `${urlOrigin}/${stage}/user/basic-details`,
};

export const accountDetURL = {
    userAccountDetails: `${urlOrigin}/${stage}/user/search/es`,
};

export const influencerPostURL = {
    influencerPostDetails: `${urlOrigin}/${stage}/user/basic-details/journey`,
};

export const accountSearchURL = {
    searchUserAccount: `${urlOrigin4}/${stage}/instagram/account/user-search`,
};
