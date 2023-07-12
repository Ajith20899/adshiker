import React from "react";
import { CheckboxPropsI } from "./types";
import * as Styles from "./styles";
import Tick from "@icons/Tick";

export function Checkbox(props: CheckboxPropsI) {
    const { width, height, padding, checked, margin, styles, onChange } = props;
    return (
        <Styles.CheckboxWrapper
            width={width}
            height={height}
            padding={padding}
            margin={margin}
            checked={checked}
            onClick={onChange}
            styles={styles}
        >
            <Tick />
        </Styles.CheckboxWrapper>
    );
}
