export interface PhoneNumberSignUpPropsI {
    phoneNumber: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    countryCode: string;
    setCountryCode: React.Dispatch<React.SetStateAction<string>>;
    setSession: React.Dispatch<React.SetStateAction<null>>;
    setPageState: React.Dispatch<React.SetStateAction<string>>;
    showSnackbar: (snackbar: { status: string; msg: string }) => void;
    influencer: boolean;
}
