import React, { useEffect, useState } from "react";
import { Arrow } from "@icons/Arrow";
import { Modal } from "@components/library/modal";
import { DropdownPropsI } from "../types";
import * as Styles from "./styles";

interface MobilePropsI extends DropdownPropsI {}

export function DropdownMobile(props: MobilePropsI) {
    //props
    const {
        id,
        isSwiped,
        width,
        maxWidth,
        height,
        maxHeight,
        margin,
        mMargin,
        className,
        placeholder,
        bordered,
        label,
        selectedValue,
        dropdownList,
        getSelectedValue,
        fontSize,
        isClosed,
        styles,
        onClickProps,
    } = props;

    // local state
    const [showList, setShowList] = useState(true);
    const [isShowModal, setIsShowModal] = useState(isSwiped || false);

    const onCloseModalHandler = () => {
        setIsShowModal(false);
        isClosed && isClosed(false);
        onClickProps && onClickProps();
    };

    const expandHandler = () => {
        setShowList(!showList);
    };

    const selectionHandler = (value: string | number) => {
        getSelectedValue(value);
        setShowList(!showList);
    };

    return (
        <Modal
            onCloseProps={onCloseModalHandler}
            showModal={isShowModal}
            bottomModal
            hideClose
            preventOutsideClose={false}
            id={"dropdownModal"}
        >
            <Styles.DropdownWrapper
                styles={styles}
                onClick={expandHandler}
                showList={showList}
                width={width}
                maxWidth={maxWidth}
                height={height}
                maxHeight={maxHeight}
                margin={margin}
                mMargin={mMargin}
                className={className}
                bordered={bordered}
                fontSize={fontSize}
                id={id || "dropdown"}
            >
                <Styles.DisplayText
                    height={height}
                    holder={selectedValue ? false : true}
                >
                    {selectedValue || placeholder}
                    <Styles.ArrowIcon
                        position={showList}
                        opacity={selectedValue}
                    >
                        <Arrow
                            width={"15px"}
                            height={"15px"}
                            fill={Boolean(selectedValue) ? "#000" : "#737373"}
                        />
                    </Styles.ArrowIcon>
                </Styles.DisplayText>
                <Styles.DropdownItemsWrapper showList={showList}>
                    {dropdownList?.map((data, index) => {
                        return (
                            <Styles.DropdownItem
                                selectedValue={Boolean(
                                    selectedValue === data.value
                                )}
                                id={`selectOption_${index}`}
                                key={index}
                                onClick={() => selectionHandler(data.value)}
                            >
                                {data.displayValue}
                            </Styles.DropdownItem>
                        );
                    })}
                </Styles.DropdownItemsWrapper>
                {label && (
                    <Styles.Label
                        showList={showList}
                        bordered={bordered}
                        filled={Boolean(selectedValue || showList)}
                    >
                        {label}
                    </Styles.Label>
                )}
            </Styles.DropdownWrapper>
        </Modal>
    );
}
