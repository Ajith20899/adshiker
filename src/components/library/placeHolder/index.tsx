import React from "react";
import { PlaceholderPropsI } from "./types";
import * as Styles from "./styles";

export function Placeholder(props: PlaceholderPropsI) {
    const {
        type,
        width,
        height,
        margin,
        padding,
        shadowColor,
        backgroundColor,
        styles,
        className,
    } = props;

    function contentHandler() {
        switch (type) {
            case "image":
                return <Styles.ImageLoader />;
            case "content":
                return <></>;
            default:
                return <></>;
        }
    }

    return (
        <Styles.PlaceholderWrapper
            className={className}
            styles={styles}
            width={width}
            height={height}
            margin={margin}
            padding={padding}
            shadowColor={shadowColor}
            backgroundColor={backgroundColor}
        >
            {contentHandler()}
        </Styles.PlaceholderWrapper>
    );
}
