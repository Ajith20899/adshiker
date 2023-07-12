import React from "react";
import { IconsDisplayPropsI } from "./types";

export const IconsDisplay = (props: IconsDisplayPropsI) => {
    const { height, custom, name, variant, size, color, style } = props;

    return (
        <img
            height={height}
            src={
                custom
                    ? name
                    : `https://img.icons8.com/${variant || "fluent"}/${
                          size || 48
                      }/${color || "000"}/${name}.png`
            }
            alt={name}
            onClick={props.onClick}
            style={{ ...style }}
        />
    );
};
