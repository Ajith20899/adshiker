import React from "react";

import { IconButtonPropsI } from "./types";

import { Flex } from "@components/library/containers";
import * as Styles from "./styles";
import { Icon } from "./styles";

export function IconButton(props: IconButtonPropsI) {
    const {
        width,
        height,
        padding,
        margin,
        borderRadius,
        icon,
        id,
        className,
        name,
        direction,
        styles,
        iconWidth,
        iconHeight,
        size,
        disabled,
        fontSize,
        alt,
        isColor,
        objectFit,
        iconStyles,
        onClick,
    } = props;

    const disabledStyles = `opacity: 0.4;pointer-events: none;`;
    return (
        <Flex
            id={id}
            className={className}
            direction={direction}
            justifyContent={"center"}
            alignItems={"center"}
            width={"max-content"}
            margin={margin}
            styles={disabled ? `${styles};${disabledStyles}` : styles}
            onClick={disabled ? undefined : onClick}
        >
            <>
                <Styles.IconButtonWrapper
                    width={width}
                    fontSize={fontSize}
                    height={height}
                    padding={padding}
                    isColor={isColor}
                    disabled={disabled}
                    borderRadius={borderRadius}
                >
                    {icon &&
                        (typeof icon === "string" ? (
                            <Icon
                                iconWidth={iconWidth}
                                iconHeight={iconHeight}
                                src={icon}
                                objectFit={objectFit}
                                iconStyles={iconStyles}
                                className={"buttonIconWrapper"}
                                alt={alt || "icon"}
                            />
                        ) : (
                            <Styles.IconWrapper
                                className={"buttonIconWrapper"}
                                iconWidth={iconWidth}
                                iconHeight={iconHeight}
                            >
                                {icon}
                            </Styles.IconWrapper>
                        ))}
                </Styles.IconButtonWrapper>
                {name && (
                    <Styles.Name direction={direction} size={size}>
                        {name}
                    </Styles.Name>
                )}
            </>
        </Flex>
    );
}
