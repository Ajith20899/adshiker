export interface GridPropsI {
    rows?: number;
    customRows?: string;
    cols?: number;
    customCols?: string;
    gap?: string;
    children?: string | React.ReactElement | React.ReactElement[];
    width?: string;
    height?: string;
    mWidth?: string;
    mHeight?: string;
    margin?: string;
    mMargin?: string;
    padding?: string;
    mPadding?: string;
    justifyContent?: string;
    alignItems?: string;
    position?: string;
    className?: string;
    id?: string;
    styles?: string;
    onClick?: () => void;
}

export interface FlexPropsI {
    children?: string | React.ReactElement | React.ReactElement[];
    margin?: string;
    height?: string;
    width?: string;
    mMargin?: string;
    mWidth?: string;
    mHeight?: string;
    padding?: string;
    mPadding?: string;
    justifyContent?: string;
    alignItems?: string;
    direction?: string;
    position?: string;
    className?: string;
    styles?: string;
    id?: string;
    onClick?: () => void;
}
