import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@components/library/input";
import { ProfileDisplay } from "@components/profileDisplay";
import { IconsDisplay } from "@components/iconDisplay";
import { accountSearchURL } from "@services/urls";
import { InstagramUserI } from "../types";
import { AccountDetailsPropsI } from "./types";
import {
    DivWrapper,
    Heading,
    Line,
    Paragraph,
    SmallHeading,
    SubTitle,
    ComponentsWrapper,
} from "./styles";
import boxIcon from "@icons/box.svg";
import searchIcon from "@icons/search.svg";

function AccountDetails(props: AccountDetailsPropsI) {
    const { userList, userListHandler, selected, selectedHandler } = props;
    const searchUserList = userList as InstagramUserI[];
    const [instagram, setInstagram] = useState("");
    const [searching, setSearching] = useState(false);
    const [noData, setNoData] = useState(false);
    const [error, setError] = useState(false);
    const [searchTimeout, setSearchTimeout] = useState<ReturnType<
        typeof setTimeout
    > | null>(null);

    const searchInstagramUsers = async (
        query: string
    ): Promise<InstagramUserI[]> => {
        const { data } = await axios.get(accountSearchURL.searchUserAccount, {
            params: { userName: query },
        });
        if (data.errorMessage) {
            setError(true);
            return [];
        }
        if (error) setError(false);

        return data.accounts;
    };

    useEffect(() => {
        if (instagram.length > 3) {
            setSearching(true);
            setNoData(false);
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
            setSearchTimeout(
                setTimeout(async () => {
                    await searchInstagramUsers(instagram).then((accounts) => {
                        if (accounts.length > 0) {
                            userListHandler(accounts);
                        } else {
                            userListHandler([]);
                            setNoData(true);
                        }
                        setSearching(false);
                    });
                }, 1000)
            );
        } else {
            setSearching(false);
        }

        if (instagram.length <= 3) selectedHandler(-1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [instagram]);

    const instagramInputHandler = (instagram: any) => {
        setInstagram(instagram.target.value);
    };

    return (
        <ComponentsWrapper>
            <Heading>link instagram account</Heading>
            <SubTitle>
                search your instagram account for linking with us.
            </SubTitle>
            <DivWrapper length={searchUserList.length}>
                <Input
                    onChangeHandler={instagramInputHandler}
                    value={instagram}
                    fontSize={"16px"}
                    width={"240px"}
                    bordered
                    loading={searching}
                    padding={"6px 25px"}
                    placeholder={"search your account"}
                    hintFont={"14px"}
                    borderRadius={"20px"}
                    icon={searchIcon}
                    iconWidth={"12px"}
                    iconHeight={"12px"}
                />
            </DivWrapper>
            {instagram?.length <= 3 && (
                <DivWrapper style={{ marginLeft: 10 }}>
                    <Line />
                    <DivWrapper
                        display={"flex"}
                        flexDirection={"row"}
                        style={{ marginLeft: 16 }}
                    >
                        <IconsDisplay name="error" height="12.53px" />
                        <SmallHeading>NOTE</SmallHeading>
                    </DivWrapper>
                    <ol style={{ marginLeft: -12 }}>
                        <Paragraph>
                            You must add the account in which you’ll be posting
                            the ADS.
                        </Paragraph>
                        <Paragraph>
                            If you don’t post the ADS in the selected account,
                            you may not get your reviews, Adshiker coins and
                            payments.
                        </Paragraph>
                        <Paragraph>
                            We will review &amp; verify your account once added.
                        </Paragraph>
                    </ol>
                </DivWrapper>
            )}
            <div style={{ marginLeft: 20 }}>
                {instagram?.length > 3 &&
                    !error &&
                    !noData &&
                    !searching &&
                    searchUserList.map((user, index) => (
                        <ProfileDisplay
                            key={index}
                            user={user}
                            selected={index === selected}
                            cursorPointer
                            onClick={() => selectedHandler(index)}
                            selectable
                            noShadow={index !== selected}
                        />
                    ))}
            </div>
            {error && (
                <>
                    <DivWrapper display={"block"}>
                        <IconsDisplay custom name={boxIcon} height={"47px"} />
                    </DivWrapper>

                    <Paragraph>
                        no users found, please try with other names
                    </Paragraph>
                </>
            )}
        </ComponentsWrapper>
    );
}

export default AccountDetails;
