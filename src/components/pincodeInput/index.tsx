import React from "react";
import { StyledPincodeInput } from "./styles";
import { PincodeInputI } from "./types";

export const PincodeInput = (props: PincodeInputI) => {
    const { noStyle, value, placeholder, handler } = props;
    const pincodeValidation = (value: string) => !isNaN(Number(value));
    const inputHandler = (e: any) => {
        const data = e.target.value;
        if (pincodeValidation(data)) {
            handler(data);
        }
    };
    return (
        <StyledPincodeInput
            noStyle={noStyle}
            value={value}
            placeholder={placeholder}
            onChange={inputHandler}
        />
    );
};
