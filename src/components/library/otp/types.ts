export interface SingleLineOtpPropsI {
    otpHandler: (s: string) => void;
    width?: string;
    placeholder?: string;
    height?: string;
    className?: string;
    fontSize?: string;
    isBordered?: boolean;
    type?: string;
    gap?: string;
    styles?: string;
}

export interface OtpPropsI extends SingleLineOtpPropsI {
    columnCount: number;
}
