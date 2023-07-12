export interface PhoneNumberInputPropsI {
    value: string;
    countryCode: string;
    phoneNumberHandler: (any) => void;
    countryCodeHandler: (countryCode: string) => void;
    influencer?: boolean;
    defaultImg?: string;
    error?: boolean;
}
