import React from "react";
import { RadioGroupsPropsI } from "./types";
import * as Styles from "./styles";

export function RadioGroup(props: RadioGroupsPropsI) {
    const {
        margin,
        options,
        errorLabel,
        handleSelection,
        display,
        icon,
        styles,
    } = props;
    return (
        <Styles.Container margin={margin} styles={styles}>
            <Styles.Wrapper display={display}>
                {options?.length &&
                    options?.map((option, index) => (
                        <Styles.Radio
                            key={index}
                            onClick={() => handleSelection(option.value)}
                            className={display ? "gridDesign" : ""}
                        >
                            <Styles.Circle selected={option.selected} />
                            {icon ? option.icon : null}
                            {option.displayValue}
                        </Styles.Radio>
                    ))}
            </Styles.Wrapper>
            {errorLabel && errorLabel.length != 0 && (
                <Styles.ErrorLabel>{errorLabel}</Styles.ErrorLabel>
            )}
        </Styles.Container>
    );
}
