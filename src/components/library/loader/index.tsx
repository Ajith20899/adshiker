import React from "react";
import { DotGatheringI, SpinLoaderI, DotTypingI, GoogleLoaderT } from "./types";
import * as Styles from "./styles";

export function SpinLoader(props: SpinLoaderI) {
    const { width, height, styles, className } = props;

    return (
        <Styles.SpinLoaderWrapper
            className={className || "spinLoaderWrapper"}
            width={width}
            height={height}
            styles={styles}
        >
            <Styles.Svg
                version="1.1"
                id="L9"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enable-background="new 0 0 0 0"
            >
                <path
                    fill="#fff"
                    d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                >
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="1s"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite"
                    />
                </path>
            </Styles.Svg>
        </Styles.SpinLoaderWrapper>
    );
}

// dot gathering

export function DotGathering(props: DotGatheringI) {
    const { width, height, styles, className, bgColor } = props;

    return (
        <Styles.DotGatheringCircle
            className={className}
            width={width}
            height={height}
            bgColor={bgColor}
            styles={styles}
        />
    );
}

// dot typing

export function DotTyping(props: DotTypingI) {
    const { width, height, styles, className, bgColor } = props;

    return (
        <Styles.DotTypingWrapper
            className={className}
            width={width}
            height={height}
            bgColor={bgColor}
            styles={styles}
        />
    );
}

// google loader

export function GoogleLoader(props: GoogleLoaderT) {
    const { width, height, strokeWidth, color, theme } = props;

    return (
        <Styles.GoogleLoaderWrapper
            width={width}
            height={height}
            theme={theme}
            className={"Styles.googleLoader"}
        >
            <Styles.GoogleSvg className="circular" viewBox="25 25 50 50">
                <Styles.GoogleCircle
                    className="path"
                    cx="50"
                    cy="50"
                    r="20"
                    fill="none"
                    stroke={color || "black"}
                    strokeWidth={strokeWidth}
                    stroke-miterlimit="10"
                />
            </Styles.GoogleSvg>
        </Styles.GoogleLoaderWrapper>
    );
}
