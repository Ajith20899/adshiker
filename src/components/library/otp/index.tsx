import React, { useEffect, useState } from "react";
import { OtpPropsI, SingleLineOtpPropsI } from "./types";
import * as Styles from "./styles";

export function Otp(props: OtpPropsI) {
    const {
        width,
        height,
        placeholder,
        columnCount,
        className,
        otpHandler,
        type,
        fontSize,
        isBordered,
        gap,
        styles,
    } = props;

    const [inputColumnsCount, setInputColumnsCount] = useState<number[]>([]);
    const [otpValue, setOtpValue] = useState<any>(null);
    const [gatherOtp, setGatherOtp] = useState("");
    let tempGatherOtp = "";
    const placeHolder = placeholder?.split("", columnCount);

    useEffect(() => {
        const tempOtpValue = Object.assign({}, otpValue);
        if (columnCount) {
            for (let i = 0; i < columnCount; i++) {
                setInputColumnsCount((p) => [...p, i]);
                tempOtpValue[i] = { value: "" };
                setOtpValue(tempOtpValue);
            }
        }
    }, []);

    useEffect(() => {
        if (gatherOtp?.length === columnCount) {
            otpHandler(gatherOtp);
        }
    }, [gatherOtp]);

    function onkeydownHandler(e: any, index: number) {
        const value = e?.key;
        const re = /^[0-9\b]+$/;

        if (otpValue[index]?.value === value) return;
        if (!re.test(value) && !(e.key === "Backspace")) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    function onKeyUpHandler(e: any, index: number) {
        let otpInputElements = (Array.from(
            document.getElementsByClassName("otpInputBox")
        ) as unknown) as HTMLInputElement[];

        if (e.key === "Backspace" || e.key === "ArrowLeft") {
            otpInputElements[index - 1]?.setSelectionRange(1, 1);
            otpInputElements[index - 1]?.focus();
        } else if (
            e.key === "ArrowRight" &&
            otpInputElements[index + 1]?.value !== ""
        ) {
            otpInputElements[index + 1]?.focus();
        } else {
            for (let i = 0; i < otpInputElements?.length; i++) {
                if (otpInputElements[i]?.value === "") {
                    otpInputElements[i]?.focus();
                    return;
                } else {
                    otpInputElements[i + 1]?.focus();
                }
                tempGatherOtp += otpInputElements[i]?.value?.toString();
            }
            if (tempGatherOtp?.length === columnCount) {
                setGatherOtp(tempGatherOtp);
                tempGatherOtp = "";
                return;
            }
        }
    }

    function inputListener(e: any, index: number) {
        const value = e?.target?.value;
        if (otpValue[index]?.value === value.slice(-1)) return;

        const tempOtpValue = Object.assign({}, otpValue);

        if (tempOtpValue[index]?.value === value.slice(-1)) return;
        if (tempOtpValue[index]) tempOtpValue[index].value = value.slice(-1);
        setOtpValue(tempOtpValue);
    }

    return (
        <Styles.OtpWrapper
            width={width}
            height={height}
            columnCount={columnCount}
            className={className}
            gap={gap}
            styles={styles}
        >
            {inputColumnsCount?.map((_data, index) => {
                return (
                    <Styles.OtpInputBox
                        placeholder={(placeHolder && placeHolder[index]) || "0"}
                        key={index}
                        type={type || "tel"}
                        isBordered={isBordered}
                        fontSize={fontSize}
                        className={"otpInputBox"}
                        onChange={(e: any) => inputListener(e, index)}
                        onKeyUp={(e: any) => onKeyUpHandler(e, index)}
                        onKeyDown={(e: any) => onkeydownHandler(e, index)}
                        value={otpValue && otpValue[index]?.value}
                    />
                );
            })}
        </Styles.OtpWrapper>
    );
}

export function SingleLineOtp(props: SingleLineOtpPropsI) {
    const {
        width,
        height,
        placeholder,
        className,
        otpHandler,
        fontSize,
        isBordered,
        gap,
        type,
        styles,
    } = props;

    const [otp, setOtp] = useState("");

    useEffect(() => {
        if (otp.length === 4) {
            otpHandler(otp);
        }
    }, [otp]);

    const onchangeHandler = (e: any) => {
        setOtp(e.target.value);
    };

    const keyDownHandler = (e: any) => {
        if (
            e.key === "Backspace" ||
            e.key === "Delete" ||
            e.key === "ArrowRight" ||
            e.key === "ArrowLeft"
        ) {
            return;
        } else if (otp.length > 3) {
            e.preventDefault();
        }
    };

    return (
        <Styles.SingleLineOtpWrapper
            width={width}
            height={height}
            isBordered={isBordered}
            fontSize={fontSize}
            className={className}
            gap={gap}
            styles={styles}
        >
            <input
                type={type || "tel"}
                value={otp}
                placeholder={placeholder}
                onChange={onchangeHandler}
                onKeyDown={keyDownHandler}
            />
        </Styles.SingleLineOtpWrapper>
    );
}
