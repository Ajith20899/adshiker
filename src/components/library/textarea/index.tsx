import React from "react";
import { TextAreaPropsI } from "./types";
import * as Styles from "./styles";

export function TextArea(props: TextAreaPropsI) {
    // props
    const {
        width,
        height,
        padding,
        margin,
        bordered,
        borderRadius,
        value,
        fontSize,
        placeholder,
        label,
        labelSize,
        capitalizedLabel,
        id,
        className,
        styles,
        onBlur,
        onChangeHandler,
        onFocus,
    } = props;

    return (
        <Styles.TextAreaWrapper
            className={className}
            margin={margin}
            styles={styles}
        >
            {label && (
                <Styles.Label
                    id="textAreaLabel"
                    bordered={bordered}
                    labelSize={labelSize}
                    capitalizedLabel={capitalizedLabel}
                >
                    {label}
                </Styles.Label>
            )}
            <Styles.TextAreaBoxWrapper
                width={width}
                height={height}
                bordered={bordered}
                padding={padding}
                fontSize={fontSize}
                borderRadius={borderRadius}
            >
                <Styles.TextAreaBox
                    id={id}
                    value={value}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onChange={onChangeHandler}
                    placeholder={placeholder}
                />
            </Styles.TextAreaBoxWrapper>
        </Styles.TextAreaWrapper>
    );
}
