import React from "react";

import { Flex } from "../containers";

import { AppLogoInterfaceI, TagLinePropsI } from "./types";

import * as Styles from "./styles";

import Rocket from "@icons/logo1.jpg";

export default function AppLogo(props: AppLogoInterfaceI) {
    const {
        className,
        height,
        width,
        mHeight,
        mWidth,
        size,
        mSize,
        direction,
        margin,
        mMargin,
        hideIcon,
        hideName,
        styles,
    } = props;
    return (
        <Flex
            margin={margin}
            mMargin={mMargin}
            direction={"row"}
            className={className}
        >
            <>
                {!hideIcon && (
                    <Styles.Icon
                        height={height}
                        width={width}
                        mHeight={mHeight}
                        mWidth={mWidth}
                        alt={"Logo"}
                        src={Rocket}
                    />
                )}
                {!hideName && (
                    <Styles.Name size={size} mSize={mSize}>
                        haldio
                    </Styles.Name>
                )}
            </>
        </Flex>
    );
}

export const TagLine = (props: TagLinePropsI) => {
    const { className, color, margin, mMargin, size, mSize } = props;
    return (
        <Styles.Content
            color={color}
            margin={margin}
            mMargin={mMargin}
            size={size}
            mSize={mSize}
            className={className}
        >
            Get Your Ads Hiked!
        </Styles.Content>
    );
};
