import { ReactElement } from "react";

export interface IconTextButtonPropsI {
    name: string;
    icon: string | ReactElement;
    onClick: () => void;
    id?: string;
    iconPlacedRight?: boolean;
    iconWidth?: string;
    iconHeight?: string;
    width?: string;
    height?: string;
    styles?: string;
    margin?: string;
    padding?: string;
    isColor?: boolean;
    alt?: string;
    fontSize?: string;
    objectFit?: string;
    iconStyles?: string;
    className?: string;
    borderRadius?: string;
    disabled?: boolean;
}
