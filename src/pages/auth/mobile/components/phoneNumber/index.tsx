import React from "react";

import { Input } from "@components/library/input";
import CountryCodeInput from "@pages/auth/mobile/components/countryPicker";
import { ErroredText, SubtitleText } from "@pages/auth/mobile/components/text";
import { Flex } from "@components/library/containers";

import { PhoneNumberInputPropsI } from "./types";

import * as Styles from "./styles";

import Advertisor from "@icons/advertisor.svg";
import Influencer from "@icons/influencer.svg";

function PhoneNumberInput(props: PhoneNumberInputPropsI) {
    const {
        value,
        countryCode,
        influencer,
        defaultImg,
        error,
        phoneNumberHandler,
        countryCodeHandler,
    } = props;

    return (
        <>
            <img
                src={defaultImg ?? (influencer ? Influencer : Advertisor)}
                width={defaultImg ? "124px" : "78px"}
                height={defaultImg ? "126px" : "80px"}
                alt={""}
            />
            {!defaultImg && (
                <Styles.TitleText margin={"20px 0 0 0"}>
                    signing up as a {influencer ? "influencer" : "advertiser"}
                </Styles.TitleText>
            )}
            <SubtitleText
                width={"284px"}
                margin={defaultImg ? "25px 0 14px 0" : "30px 0 14px 0"}
            >
                help us with your phone number to get you through
            </SubtitleText>
            <Flex padding={"0 0 0 20%"}>
                <CountryCodeInput
                    value={countryCode}
                    changeHandler={countryCodeHandler}
                />
                <Styles.CountryLabel>+{countryCode}</Styles.CountryLabel>
                <Input
                    onChangeHandler={phoneNumberHandler}
                    value={value}
                    type={"tel"}
                    pattern={"[0-9]*"}
                    fontSize={"21px"}
                    width={"initial"}
                    placeholder={`9999999999`}
                    margin={""}
                />
            </Flex>
            <ErroredText error={error}>please provide your number</ErroredText>
        </>
    );
}

export default PhoneNumberInput;
