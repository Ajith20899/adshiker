import React from "react";
import Slider from "@material-ui/core/Slider";

import { RangeSliderPropsI } from "./types";

import * as Styles from "./styles";

export function RangeSlider(props: RangeSliderPropsI) {
    const {
        width,
        margin,
        mMargin,
        label,
        labelSize,
        capitalizedLabel,
        className,
        styles,
        min,
        max,
        value,
        overlapRangeValue,
        onChange,
    } = props;
    return (
        <Styles.RangeWrapper
            className={className}
            width={width}
            margin={margin}
            mMargin={mMargin}
            styles={
                value && typeof value !== "number" && value?.length >= 1
                    ? `#rangeSlider > span[data-index="0"]::before {
                    content: "${value[0]}";
                        }
                        #rangeSlider > span[data-index="1"]::before {
                            content: "${value[1]}";
                            top: ${
                                Math.abs(value[1] - value[0]) <
                                overlapRangeValue
                                    ? "-28px"
                                    : "26px"
                            };
                            ${styles};
                        }`
                    : `${styles}`
            }
        >
            {label && (
                <Styles.Label
                    id="rangeSliderLabel"
                    capitalizedLabel={capitalizedLabel}
                    labelSize={labelSize}
                >
                    {label}
                </Styles.Label>
            )}
            <Slider
                id="rangeSlider"
                value={value}
                onChange={(e, newValue) => onChange(newValue)}
                onChangeCommitted={(event, value) => {
                    console.log(value);
                }}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                valueLabelFormat={() => {
                    return null;
                }}
                min={min || 0}
                max={max || 10}
            />
        </Styles.RangeWrapper>
    );
}
