import { useState } from "react";

export const useInput = (initValue: string) => {
    const [value, setValue] = useState(initValue);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const setInputText = (str: string) => {
        setValue(str);
    };
    return {
        value,
        onChange,
        setInputText,
    };
};
