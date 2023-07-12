export interface VerifyOTPPagePropsI {
    session: any;
    setSession: React.Dispatch<React.SetStateAction<null>>;
    phoneNumber: string;
    country: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    setProceed: React.Dispatch<React.SetStateAction<boolean>>;
    showSnackbar: (snackbar: { status: string; msg: string }) => void;
}
