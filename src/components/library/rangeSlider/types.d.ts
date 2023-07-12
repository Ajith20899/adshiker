export interface RangeSliderPropsI {
    margin?: string;
    mMargin?: string;
    width?: width;
    label?: string;
    labelSize?: string;
    capitalizedLabel?: boolean;
    className?: string;
    styles?: string;
    min: number;
    max: ?number;
    value: number | number[];
    overlapRangeValue: number;
    onChange: (value) => void;
}
