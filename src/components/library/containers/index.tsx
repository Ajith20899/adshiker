import React from "react";

import { GridPropsI, FlexPropsI } from "./types";

import * as Styles from "./styles";

export function Grid(props: GridPropsI) {
    const {
        rows,
        customRows,
        cols,
        customCols,
        gap,
        children,
        width,
        height,
        margin,
        padding,
        mWidth,
        mHeight,
        mMargin,
        mPadding,
        justifyContent,
        alignItems,
        position,
        className,
        id,
        styles,
        onClick,
    } = props;
    return (
        <Styles.GridContainer
            id={id}
            width={width}
            height={height}
            rows={rows}
            cols={cols}
            customRows={customRows}
            customCols={customCols}
            margin={margin}
            padding={padding}
            mWidth={mWidth}
            mHeight={mHeight}
            mMargin={mMargin}
            mPadding={mPadding}
            gap={gap}
            justifyContent={justifyContent}
            alignItems={alignItems}
            className={className}
            styles={styles}
            position={position}
            onClick={onClick}
        >
            {children}
        </Styles.GridContainer>
    );
}

export function Flex(props: FlexPropsI) {
    const {
        children,
        margin,
        padding,
        width,
        height,
        mWidth,
        mHeight,
        mMargin,
        mPadding,
        justifyContent,
        alignItems,
        direction,
        position,
        className,
        id,
        styles,
        onClick,
    } = props;
    return (
        <Styles.FlexContainer
            id={id}
            width={width}
            height={height}
            margin={margin}
            padding={padding}
            mWidth={mWidth}
            mHeight={mHeight}
            mMargin={mMargin}
            mPadding={mPadding}
            justifyContent={justifyContent}
            alignItems={alignItems}
            direction={direction}
            className={className}
            styles={styles}
            position={position}
            onClick={onClick}
        >
            {children}
        </Styles.FlexContainer>
    );
}
