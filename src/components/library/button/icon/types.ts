import { ReactComponentElement } from "react";

export interface IconButtonPropsI {
    icon: any;
    id?: string;
    width?: string;
    height?: string;
    styles?: string;
    iconWidth?: string;
    iconHeight?: string;
    name?: string;
    margin?: string;
    padding?: string;
    direction?: string;
    size?: string;
    className?: string;
    borderRadius?: string;
    alt?: string;
    fontSize?: string;
    isColor?: boolean;
    objectFit?: string;
    disabled?: boolean;
    iconStyles?: string;
    onClick: () => void;
}
