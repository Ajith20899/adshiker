export interface IBasicDetState {
    basicDetails: { name: string; email: string };
    date: number | undefined;
    gender: string;
}

export interface ILocationDetState {
    pincode: string;
    pincodeDetails: { district: string; state: string; country: string };
    error: any;
}

export interface IAccountDetState {
    instagram: {
        fullName: string;
        profilePicUrl: string;
        userName: string;
        accountCategories: InstagramCategory[];
    };
}

export interface UserAccountDetailsT {
    accountUserName: string;
    accountUserFullName: string;
    profilePicUrl: string;
    accountCategories: InstagramCategory[];
}

export interface AccountVerificationResponse {
    accountStatus: string;
    accountCategories: InstagramCategory[];
    profilePicUrl: string;
    accountPlatform: string;
    accountUserFullName: string;
    updatedAt: number;
    secretCode: string;
    createdAt: number;
    accountUserName: string;
    error?: string;
    loading: boolean;
}

export interface InstagramCategory {
    id: string;
    name: string;
}

export interface IJourneyStatus {
    redirectUrl: string;
    urlLoading: boolean;
    urlError?: string;
    firstTime: boolean;
}
