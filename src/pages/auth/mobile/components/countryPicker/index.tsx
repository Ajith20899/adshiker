import React, { useState } from "react";

import { Modal } from "@components/library/modal";
import { Input } from "@components/library/input";

import { countryCodesList } from "@fixtures/auth";

import { CountryCodeInputPropsI } from "./types";

import * as Styles from "./styles";
import { Column, Row } from "@pages/auth/styles";

import searchIcon from "@icons/searchIcon.svg";

function CountryCodeInput({ value, changeHandler }: CountryCodeInputPropsI) {
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState("");
    const filteredCountries = countryCodesList.filter(
        (c) =>
            !(
                search.trim() &&
                !c.name.toLowerCase().includes(search.trim().toLowerCase())
            )
    );

    const modalHandler = () => {
        setModal(false);
        setSearch("");
    };

    const countryShortCode = countryCodesList.filter((c) => c.code === value)[0]
        .short;

    return (
        <>
            <img
                src={`https://www.countryflags.io/${countryShortCode.toLowerCase()}/flat/32.png`}
                width="31.32px"
                height="30px"
                onClick={() => setModal(true)}
                alt={""}
            />
            <Modal
                showModal={modal}
                bottomModal
                height={"60%"}
                onCloseProps={modalHandler}
                styles={"padding: 25px 50px 20px 50px;"}
            >
                <Styles.InputWrapper code={`+${value}`}>
                    <Input
                        onChangeHandler={(e: any) => setSearch(e.target.value)}
                        value={search}
                        margin={"5px auto"}
                        placeholder={"search your country"}
                        styles={"color: #000;"}
                        icon={
                            <img
                                height={"100%"}
                                src={searchIcon}
                                alt="search"
                            />
                        }
                    />
                </Styles.InputWrapper>
                <Column
                    justifyContent={"initial"}
                    styles={"overflow-y: auto"}
                    margin={"70px 0 0 0"}
                    height={"calc(100% - 70px)"}
                >
                    {filteredCountries.length > 0 &&
                        filteredCountries.map((country) => (
                            <Row
                                borderRadius={"6px"}
                                bgColor={
                                    value === country.code ? "black" : "white"
                                }
                                padding={"0 20px"}
                                margin={"1px 64px"}
                                width={"100%"}
                                onClick={() => {
                                    changeHandler(country.code);
                                    setModal(false);
                                    setSearch("");
                                }}
                                justifyContent={"flex-start"}
                                key={country.code}
                            >
                                <Styles.TextElement
                                    color={
                                        value === country.code
                                            ? "white"
                                            : "black"
                                    }
                                >{`+${country.code}`}</Styles.TextElement>
                                &nbsp;
                                <Styles.TextElement
                                    color={
                                        value === country.code
                                            ? "white"
                                            : "black"
                                    }
                                >
                                    {country.name}
                                </Styles.TextElement>
                            </Row>
                        ))}
                    {filteredCountries.length === 0 && (
                        <Styles.NoDataText>
                            no countries found
                        </Styles.NoDataText>
                    )}
                </Column>
            </Modal>
        </>
    );
}

export default CountryCodeInput;
