export interface PincodeInputI {
    value: string;
    handler: (value: string) => void;
    noStyle?: boolean;
    placeholder?: string;
}
