interface dateObject {
    day: string;
    month: string;
    year: string;
}

export interface DateInputI {
    dateInputHandler: (s: dateObject) => void;
    defaultDate?: string;
    defaultPlaceholder?: string;
    width?: string;
    isRequired?: boolean;
    height?: string;
    isBordered?: boolean;
    styles?: string;
}

export interface DateInputDetailsI {
    [key: string]: {
        placeholder: string;
        className: string;
        value: string;
    };
}
