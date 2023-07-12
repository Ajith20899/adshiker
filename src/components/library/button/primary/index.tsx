import React from "react";
import { PrimaryButtonPropsI } from "./types";
import * as Styles from "./styles";
import { DotTyping } from "@components/library/loader";

export function PrimaryButton(props: PrimaryButtonPropsI) {
    const {
        width,
        height,
        padding,
        margin,
        isColor,
        borderRadius,
        name,
        id,
        className,
        styles,
        disabled,
        loader,
        onClick,
    } = props;

    return (
        <Styles.PrimaryButtonWrapper
            id={id}
            isColor={isColor}
            width={width}
            height={height}
            margin={margin}
            styles={styles}
            padding={padding}
            className={className}
            borderRadius={borderRadius}
            disabled={disabled}
            onClick={disabled ? undefined : onClick}
        >
            {loader ? <DotTyping /> : name}
        </Styles.PrimaryButtonWrapper>
    );
}
