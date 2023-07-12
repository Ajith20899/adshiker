import React from "react";
import { SpinLoader } from "../loader";
import { PrimaryInputI } from "./types";
import { Icon } from "../button/icon/styles";
import * as Styles from "./styles";

export function Input(props: PrimaryInputI) {
    // props
    const {
        width,
        height,
        padding,
        margin,
        hintFont,
        borderRadius,
        value,
        icon,
        iconWidth,
        iconHeight,
        loaderWidth,
        loaderHeight,
        loading,
        fontSize,
        placeholder,
        label,
        labelSize,
        labelColor,
        bordered,
        floatingLabel,
        capitalizedLabel,
        id,
        className,
        styles,
        color,
        bgColor,
        objectFit,
        iconStyles,
        alt,
        type,
        pattern,
        onBlur,
        onChangeHandler,
        onFocus,
        onKeyDown,
        onKeyPress,
        onMouseDown,
        errorLabel,
    } = props;

    return (
        <Styles.InputWrapper
            width={width}
            height={height}
            margin={margin}
            bordered={bordered}
            styles={styles}
            padding={padding}
            className={className}
            fontSize={fontSize}
            color={color}
            bgColor={bgColor}
            icon={icon}
            loading={loading ? 1 : 0}
            borderRadius={borderRadius}
        >
            {icon &&
                (typeof icon === "string" ? (
                    <Icon
                        iconWidth={iconWidth}
                        iconHeight={iconHeight}
                        src={icon}
                        objectFit={objectFit}
                        iconStyles={iconStyles}
                        className={"inputIconWrapper"}
                        alt={alt || "icon"}
                    />
                ) : (
                    <Styles.IconWrapper
                        className={"inputIconWrapper"}
                        iconWidth={iconWidth}
                        iconHeight={iconHeight}
                    >
                        {icon}
                    </Styles.IconWrapper>
                ))}
            <Styles.InputBox
                id={id}
                value={value}
                type={type || "text"}
                hintFont={hintFont}
                pattern={pattern}
                placeholder={placeholder}
                floatingLabel={floatingLabel}
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={onChangeHandler}
                onKeyDown={onKeyDown}
                onKeyPress={onKeyPress}
                onMouseDown={onMouseDown}
            />
            {loading && (
                <SpinLoader width={loaderWidth} height={loaderHeight} />
            )}
            {label && (
                <Styles.Label
                    className={"inputLabel"}
                    capitalizedLabel={capitalizedLabel}
                    floatingLabel={floatingLabel}
                    bordered={bordered}
                    labelSize={labelSize}
                    labelColor={labelColor}
                >
                    {label}
                </Styles.Label>
            )}
            {errorLabel && (
                <Styles.ErrorLabel className={"inputErrorLabel"}>
                    {errorLabel}
                </Styles.ErrorLabel>
            )}
        </Styles.InputWrapper>
    );
}
