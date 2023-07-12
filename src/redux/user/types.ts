import { Maybe } from "@utils/types";

export interface IUserState {
    createdAt: number;
    dob?: Maybe<number>;
    phoneNumber: string;
    emailId?: Maybe<string>;
    fullName?: Maybe<string>;
    gender?: Maybe<string>;
    isJourneyDone: boolean;
    pincode?: Maybe<string>;
    userId: string;
}

export interface IJourneyStatus {
    redirectUrl: string;
    urlLoading: boolean;
    urlError?: string;
    firstTime: boolean;
}
