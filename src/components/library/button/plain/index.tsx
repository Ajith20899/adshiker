import React from "react";
import { PlainButtonPropsI } from "./types";
import * as Styles from "./styles";

export function PlainButton(props: PlainButtonPropsI) {
    const {
        width,
        height,
        padding,
        margin,
        borderRadius,
        name,
        bg,
        id,
        className,
        styles,
        disabled,
        onClick,
    } = props;

    return (
        <Styles.PlainButtonWrapper
            id={id}
            bg={bg}
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
            {name}
        </Styles.PlainButtonWrapper>
    );
}
