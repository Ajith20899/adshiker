import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "@icons/Calendar";
import { Modal } from "../modal";
import { DatePickerPropsI } from "./types";
import "react-datepicker/dist/react-datepicker.css";
import * as Styles from "./styles";

export function ReactDatePicker(props: DatePickerPropsI) {
    const {
        width,
        height,
        selectedDate,
        startDate,
        endDate,
        dateFormat,
        selectRange,
        inline,
        label,
        calendarContainer,
        children,
        isClearable,
        closeOnScroll,
        customInput,
        showTimeSelect,
        timeClassName,
        renderCustomHeader,
        renderDayContents,
        showTimeInput,
        customTimeInput,
        calendarClassName,
        className,
        disabled,
        placeholderText,
        filterDate,
        locale,
        icon,
        fixedHeight,
        onChangeRaw,
        showWeekNumbers,
        minDate,
        maxDate,
        excludeTimes,
        excludeDates,
        popperPlacement,
        showDisabledMonthNavigation,
        shouldCloseOnSelect,
        onSelectHandler,
        onChangeHandler,
        isPopupShow,
        onCloseModalProps,
        styles,
    } = props;

    const [isShowModal, setIsShowModal] = useState(isPopupShow || false);

    const onCloseHandler = () => {
        setIsShowModal(false);
        onCloseModalProps();
    };

    return (
        <>
            {isShowModal && (
                <Modal
                    height={"70%"}
                    showModal
                    onCloseProps={onCloseHandler}
                    bottomModal
                >
                    <Styles.DatePickerWrapper
                        width={width}
                        height={height}
                        className={className}
                        styles={styles}
                    >
                        {label && <Styles.Label>{label}</Styles.Label>}
                        <DatePicker
                            id={"datePicker"}
                            selected={selectedDate}
                            dateFormat={dateFormat}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange={selectRange}
                            inline={inline}
                            minDate={minDate}
                            maxDate={maxDate}
                            locale={locale}
                            shouldCloseOnSelect={shouldCloseOnSelect || false}
                            showWeekNumbers={showWeekNumbers}
                            isClearable={isClearable}
                            showTimeSelect={showTimeSelect}
                            timeClassName={timeClassName}
                            closeOnScroll={closeOnScroll}
                            popperPlacement={popperPlacement}
                            renderCustomHeader={renderCustomHeader}
                            renderDayContents={renderDayContents}
                            calendarContainer={calendarContainer}
                            calendarClassName={calendarClassName}
                            customInput={customInput}
                            showTimeInput={showTimeInput}
                            customTimeInput={customTimeInput}
                            disabled={disabled}
                            excludeTimes={excludeTimes}
                            // readOnly={true}
                            filterDate={filterDate}
                            fixedHeight={fixedHeight}
                            excludeDates={excludeDates}
                            onChangeRaw={onChangeRaw}
                            placeholderText={placeholderText}
                            showDisabledMonthNavigation={
                                showDisabledMonthNavigation
                            }
                            onSelect={onSelectHandler}
                            onChange={onChangeHandler}
                        >
                            {children}
                        </DatePicker>
                        {icon && <Calendar />}
                    </Styles.DatePickerWrapper>
                </Modal>
            )}
        </>
    );
}
