import React from "react";
import { IconTextButtonPropsI } from "./types";
import * as Styles from "./styles";
import { Icon } from "../icon/styles";

export function IconTextButton(props: IconTextButtonPropsI) {
    const {
        icon,
        iconPlacedRight,
        iconWidth,
        iconHeight,
        width,
        height,
        padding,
        margin,
        fontSize,
        borderRadius,
        name,
        objectFit,
        iconStyles,
        alt,
        id,
        className,
        styles,
        disabled,
        onClick,
    } = props;

    return (
        <Styles.IconTextButtonWrapper
            id={id}
            width={width}
            height={height}
            margin={margin}
            styles={styles}
            padding={padding}
            fontSize={fontSize}
            className={className}
            borderRadius={borderRadius}
            disabled={disabled}
            onClick={disabled ? undefined : onClick}
        >
            {icon &&
                (typeof icon === "string" ? (
                    <Icon
                        iconWidth={iconWidth}
                        iconHeight={iconHeight}
                        src={icon}
                        objectFit={objectFit}
                        iconStyles={iconStyles}
                        className={"buttonIconTextWrapper"}
                        alt={alt || "icon"}
                    />
                ) : (
                    <Styles.IconWrapper
                        className={"buttonIconTextWrapper"}
                        iconWidth={iconWidth}
                        iconHeight={iconHeight}
                    >
                        {icon}
                    </Styles.IconWrapper>
                ))}
            {name && <Styles.Text>{name}</Styles.Text>}
        </Styles.IconTextButtonWrapper>
    );
}
