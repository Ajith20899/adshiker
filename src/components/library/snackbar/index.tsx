import React from "react";
import { SnackbarPropsI } from "./types";
import * as Styles from "./styles";

export function Snackbar(props: SnackbarPropsI) {
    const { text, bg, type, styles } = props;
    return (
        <Styles.SnackbarWrapper styles={styles} bg={bg} type={type}>
            {text}
        </Styles.SnackbarWrapper>
    );
}
