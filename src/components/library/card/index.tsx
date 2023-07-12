import React from "react";
import { CardPropsI } from "./types";
import * as Styles from "./styles";

export function Card(props: CardPropsI) {
    // props
    const {
        id,
        width,
        height,
        inset,
        selected,
        bg,
        styles,
        children,
        margin,
        radius,
        selectable,
        noShadow,
        noBorder,
        cursorPointer,
        className,
        centerItems,
        onClickProps,
    } = props;

    return (
        <Styles.CardWrapper
            id={`card_${id}`}
            className={className}
            width={width}
            height={height}
            inset={inset || selected}
            styles={styles}
            margin={margin}
            radius={radius}
            selectable={selectable}
            noShadow={noShadow}
            noBorder={noBorder}
            cursorPointer={cursorPointer}
            onClick={onClickProps}
        >
            <Styles.CardChildWrapper
                inset={inset || selected}
                bg={bg}
                radius={radius}
                centerItems={centerItems}
            >
                {children}
            </Styles.CardChildWrapper>
        </Styles.CardWrapper>
    );
}
