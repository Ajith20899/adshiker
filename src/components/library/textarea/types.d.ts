export interface TextAreaPropsI {
    value: string;
    id?: string;
    width?: string;
    height?: string;
    styles?: string;
    margin?: string;
    bordered?: boolean;
    padding?: string;
    fontSize?: string;
    label?: string;
    labelSize?: string;
    capitalizedLabel?: boolean;
    className?: string;
    placeholder?: string;
    borderRadius?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    onChangeHandler: (e: any) => void;
}
