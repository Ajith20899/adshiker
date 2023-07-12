import React, { useEffect, useState } from "react";
import { Arrow } from "@icons/Arrow";
import { DropdownPropsI } from "../types";
import * as Styles from "./styles";

export function DropdownDesktop(props: DropdownPropsI) {
    //props
    const {
        id,
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
        onClickProps,
        styles,
    } = props;

    // local state
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        const dropdownWrapper = document.getElementById(id || "dropdown");
        function outClickHandler(e: any) {
            try {
                if (dropdownWrapper && !dropdownWrapper.contains(e.target)) {
                    setShowList(false);
                }
            } catch (e) {
                console.log(e);
            }
        }

        document.addEventListener("click", outClickHandler);
        return () => document.addEventListener("click", outClickHandler);
    }, []);
    return (
        <Styles.DropdownWrapper
            onClick={(e: any) => {
                setShowList(!showList);
                if (e?.target?.id !== "selectOption")
                    onClickProps && onClickProps();
            }}
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
            styles={styles}
            id={id || "dropdown"}
        >
            <Styles.DisplayText
                height={height}
                holder={selectedValue ? false : true}
            >
                {selectedValue || placeholder}
                <Styles.ArrowIcon position={showList} opacity={selectedValue}>
                    <Arrow
                        width={"15px"}
                        height={"15px"}
                        fill={Boolean(selectedValue) ? "#fff" : "#737373"}
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
                            onClick={() => {
                                getSelectedValue(data.value);
                                setShowList(!showList);
                            }}
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
    );
}
