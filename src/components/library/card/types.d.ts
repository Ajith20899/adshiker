import { ReactComponentElement } from "react";

export interface CardPropsI {
    id?: string | number;
    className?: string;
    children: ReactComponentElement;
    width?: string;
    height?: string;
    inset?: boolean;
    selected?: boolean;
    styles?: string;
    bg?: string;
    margin?: string;
    radius?: string;
    selectable?: boolean;
    centerItems?: boolean;
    noShadow?: boolean;
    noBorder?: boolean;
    cursorPointer?: boolean;
    onClickProps?: () => void;
}
