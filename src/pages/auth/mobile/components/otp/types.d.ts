export interface OtpInputPropsI {
    error: boolean;
    countryCode: string;
    phoneNumber: string;
    loading: boolean;
    timer: number;
    otp: string;
    loginMode?: boolean;
    otpHandler: (string) => void;
    editHandler: () => void;
    resendHandler: (func: () => void) => void;
    signupHandler: () => void;
    timerHandler: (x: number) => void;
}
