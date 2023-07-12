import React, { useEffect, useState } from "react";
import { dayValidation } from "@utils/date";
import { DateInputDetailsI, DateInputI } from "./types";
import * as Styles from "./styles";

const dateInputDeatils: DateInputDetailsI = {
    day: {
        placeholder: "DD",
        className: "dayInput",
        value: "",
    },
    month: {
        placeholder: "MM",
        className: "monthInput",
        value: "",
    },
    year: {
        placeholder: "YYYY",
        className: "yearInput",
        value: "",
    },
};

export function DateInput(props: DateInputI) {
    const {
        width,
        height,
        // dateFormat,
        defaultPlaceholder,
        defaultDate,
        isRequired,
        isBordered,
        dateInputHandler,
        styles,
    } = props;

    const [localDateInput, setLocalDateInput] = useState<DateInputDetailsI>(
        dateInputDeatils
    );
    const [errorLabel, setErrorLabel] = useState("");
    const [date, setDate] = useState({
        day: "",
        month: "",
        year: "",
    });

    useEffect(() => {
        const d = defaultDate?.split(/[.,\/ -]/);
        const p = defaultPlaceholder?.split(/[.,\/ -]/);
        if (d && p && d[0] && d[1] && d[2] && p[0] && p[1] && p[2]) {
            setDate({
                day: d[0],
                month: d[1],
                year: d[2],
            });
            setLocalDateInput({
                day: {
                    placeholder: p[0] || "DD",
                    className: "dayInput",
                    value: d[0] || "",
                },
                month: {
                    placeholder: p[1] || "MM",
                    className: "monthInput",
                    value: d[1] || "",
                },
                year: {
                    placeholder: p[2] || "YYYY",
                    className: "yearInput",
                    value: d[2] || "",
                },
            });
        }
    }, [defaultDate]);

    useEffect(() => {
        const dateInput = Array.from(
            document.getElementsByClassName("dateInput")
        ) as HTMLInputElement[];

        function keydownHandler(e: any, index: number) {
            if (e.repeat) return;
            if (
                !(
                    e.key?.match(/^[0-9]+$/) ||
                    e.key === "Backspace" ||
                    e.key === "ArrowLeft" ||
                    e.key === "ArrowRight"
                )
            ) {
                e.stopPropagation();
                return;
            }
            if (
                (e.key === "Backspace" || e.key === "ArrowLeft") &&
                e.target.selectionStart === 0
            ) {
                setTimeout(() => {
                    dateInput[index - 1]?.setSelectionRange(2, 2);
                    dateInput[index - 1]?.focus();
                }, 50);
            } else if (
                e.key === "ArrowRight" &&
                e.target.selectionStart === 2
            ) {
                setTimeout(() => {
                    dateInput[index + 1]?.setSelectionRange(0, 0);
                    dateInput[index + 1]?.focus();
                }, 50);
            }
            dateInput[index].removeEventListener("keydown", (e: any) =>
                keydownHandler(e, index)
            );
        }

        for (let i = 0; i < dateInput?.length; i++) {
            if (dateInput[i]) {
                dateInput[i].addEventListener("keydown", (e: any) =>
                    keydownHandler(e, i)
                );
            }
        }
    }, [localDateInput]);

    useEffect(() => {
        const dayInput = document.getElementsByClassName(
            "dayInput"
        )[0] as HTMLInputElement;
        const monthInput = document.getElementsByClassName(
            "monthInput"
        )[0] as HTMLInputElement;
        const yearInput = document.getElementsByClassName(
            "yearInput"
        )[0] as HTMLInputElement;

        if (
            date.day?.length === 2 &&
            date.month?.length === 2 &&
            date.year?.length === 4
        ) {
            dateInputHandler(date);
            return;
        }

        if (date.day?.length > 1 && monthInput) {
            monthInput.focus();
        }
        if (date.month?.length > 1 && yearInput && dayInput) {
            if (date.day?.length < 2) {
                dayInput.focus();
            } else yearInput.focus();
        }
        if (date.year?.length >= 4 && dayInput && monthInput) {
            if (date.month?.length === 0) monthInput.focus();
        }
    }, [date.day, date.month, date.year]);

    const onBlurHandler = (e: any) => {
        function resultHandler() {
            console.log("entry");
            if (!e?.currentTarget?.contains(e.relatedTarget)) {
                const result = dayValidation(
                    `${date.day}-${date.month}-${date.year}`
                );
                setErrorLabel(result);
                dateInputHandler(date);
            }
        }

        if (isRequired) {
            resultHandler();
        } else if (date.day || date.month || date.year) {
            resultHandler();
        } else {
            setErrorLabel("");
        }
    };

    const onChangeHandler = (e: any, format: string) => {
        const value: string = e?.target?.value;

        if (format === "day") {
            if (value?.length > 2) return;
            setDate({
                ...date,
                day: value,
            });
        } else if (format === "month") {
            if (value?.length > 2) return;
            setDate({
                ...date,
                month: value,
            });
        } else {
            if (value?.length > 4) return;
            setDate({
                ...date,
                year: value,
            });
        }

        const tempInputDetails = Object.assign({}, localDateInput);
        if (tempInputDetails[format]) tempInputDetails[format].value = value;
        setLocalDateInput(tempInputDetails);
    };

    return (
        <Styles.DateInputWrapper
            className={"dateInputWrapper"}
            isBordered={isBordered}
            width={width}
            height={height}
            styles={styles}
            onBlur={onBlurHandler}
            tabIndex={-1}
        >
            {localDateInput &&
                Object.keys(localDateInput)?.map((data, index) => {
                    const { className, placeholder, value } =
                        localDateInput[data] || {};
                    return (
                        <div key={index}>
                            <Styles.DateInputBox
                                className={`dateInput ${className}`}
                                type={"tel"}
                                value={value}
                                placeholder={placeholder}
                                onChange={(e: any) => onChangeHandler(e, data)}
                            />
                        </div>
                    );
                })}
            {errorLabel && (
                <Styles.ErrorLabel className={"dateInputErrorLabel"}>
                    {errorLabel}
                </Styles.ErrorLabel>
            )}
        </Styles.DateInputWrapper>
    );
}
