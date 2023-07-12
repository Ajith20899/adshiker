export interface VerifyOTPPagePropsI {
    session: any;
    setSession: React.Dispatch<React.SetStateAction<null>>;
    phoneNumber: string;
    country: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    setPageState: React.Dispatch<React.SetStateAction<string>>;
    setFinalType: React.Dispatch<React.SetStateAction<string>>;
    showSnackbar: (snackbar: { status: string; msg: string }) => void;
    influencer: boolean;
}
