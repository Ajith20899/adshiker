import React, { useEffect, useState } from "react";
import { PlainButton } from "@components/library/button/plain";
import { Modal } from "@components/library/modal";
import { ModalLocationFieldPropsI } from "./types";
import { ComponentsWrapper, DarkInput, SubTitle } from "../../styles";

export default function ModalLocationField(props: ModalLocationFieldPropsI) {
    const { showModal, locationHandler, closeHandler } = props;

    const [location, setLocation] = useState({
        district: "",
        state: "",
        country: "",
    });
    const [error, setError] = useState({
        district: false,
        state: false,
        country: false,
    });

    const slideDownHandler = () => {
        setLocation({
            district: "",
            state: "",
            country: "",
        });
        setError({
            district: false,
            state: false,
            country: false,
        });
        closeHandler();
    };

    const proceedHandler = () => {
        if (location.country && location.district && location.state) {
            locationHandler({
                district: location.district,
                state: location.state,
                country: location.country,
            });
        }
        setLocation({
            district: "",
            state: "",
            country: "",
        });
        setError({
            district: false,
            state: false,
            country: false,
        });
        closeHandler();
    };

    const cityHandler = (e: any) => {
        setLocation({ ...location, district: e.target.value });
        setError({
            ...error,
            district: false,
        });
    };
    const cityOnBlur = () => {
        if (!location.district) {
            setError({
                ...error,
                district: true,
            });
        }
    };

    const stateHandler = (e: any) => {
        setLocation({ ...location, state: e.target.value });
        setError({
            ...error,
            state: false,
        });
    };
    const stateOnBlur = () => {
        if (!location.state) {
            setError({
                ...error,
                state: true,
            });
        }
    };

    const countryHandler = (e: any) => {
        setLocation({ ...location, country: e.target.value });
        setError({
            ...error,
            country: false,
        });
    };
    const countryOnBlur = () => {
        if (!location.country) {
            setError({
                ...error,
                country: true,
            });
        }
    };

    return (
        <Modal
            height={"75%"}
            showModal={showModal}
            bottomModal
            hideClose
            onCloseProps={slideDownHandler}
        >
            <ComponentsWrapper padding={"30px 30px 0"}>
                <SubTitle
                    fontSize={"12px"}
                    margin={"0 0 15px"}
                    color={"#000"}
                    letterSpacing={"0"}
                    fontWeight={"bold"}
                >
                    please provide us the below details
                </SubTitle>
                <DarkInput
                    onChangeHandler={cityHandler}
                    value={location.district}
                    margin={"25px 2px 5px"}
                    fontSize={"16px"}
                    label={"city"}
                    padding={"6px 40px"}
                    placeholder={"city"}
                    labelColor={"rgba(0, 0, 0, 0.7)"}
                    styles={"color: #000"}
                    errorLabel={error.district ? "enter city name" : undefined}
                    onBlur={cityOnBlur}
                />
                <DarkInput
                    onChangeHandler={stateHandler}
                    value={location.state}
                    margin={"25px 2px 5px"}
                    fontSize={"16px"}
                    label={"state"}
                    padding={"6px 40px"}
                    placeholder={"state"}
                    labelColor={"rgba(0, 0, 0, 0.7)"}
                    styles={"color: #000"}
                    errorLabel={error.state ? "enter state name" : undefined}
                    onBlur={stateOnBlur}
                />
                <DarkInput
                    onChangeHandler={countryHandler}
                    value={location.country}
                    margin={"25px 2px 5px"}
                    fontSize={"16px"}
                    label={"country"}
                    padding={"6px 40px"}
                    placeholder={"country"}
                    labelColor={"rgba(0, 0, 0, 0.7)"}
                    styles={"color: #000"}
                    errorLabel={
                        error.country ? "enter country name" : undefined
                    }
                    onBlur={countryOnBlur}
                />
                <PlainButton
                    name={"PROCEED"}
                    onClick={proceedHandler}
                    margin={"20px auto"}
                    width={"200px"}
                    height={"50px"}
                    borderRadius={"10px"}
                />
            </ComponentsWrapper>
        </Modal>
    );
}
