import React from "react";

import { DividerPropsI } from "./types";

import * as Styles from "./styles";

export default function Divider(props: DividerPropsI) {
    const { margin, styles } = props;
    return <Styles.Wrapper styles={styles} margin={margin}></Styles.Wrapper>;
}
