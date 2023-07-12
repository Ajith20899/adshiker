export interface RadioGroupsPropsI {
    options: {
        displayValue: string;
        selected: boolean;
        value: string;
        icon?: string;
    }[];
    handleSelection: (value: string) => void;
    display?: string;
    margin?: string;
    errorLabel?: string;
    icon?: string;
    styles?: string;
}
