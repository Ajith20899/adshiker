import React from "react";

import * as Styles from "./styles";

export function ErroredText(props: any) {
    const { error, children, padding } = props;
    return (
        <Styles.PlainText padding={padding} color={error ? "red" : "white"}>
            {error && children}
        </Styles.PlainText>
    );
}

export const PlainText = (props: any) => <Styles.PlainText {...props} />;

export const HeadingText = (props: any) => <Styles.HeadingText {...props} />;

export const SubtitleText = (props: any) => <Styles.SubtitleText {...props} />;
