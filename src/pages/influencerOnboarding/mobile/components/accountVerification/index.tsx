import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@components/library/card";
import { CardWrapper } from "@components/library/card/styles";
import { Modal } from "@components/library/modal";
import { ProfileDisplay } from "@components/profileDisplay";
import { Flex } from "@components/library/containers";
import { IconsDisplay } from "@components/iconDisplay";
import ErrorPage from "@components/errorPage";
import {
    emptyAccountDetailsAction,
    fetchAccountDetails,
} from "@redux/influencer/actions";
import { selectInfluencer } from "@redux/influencer/slices";
import * as style from "./styles";
import PencilIcon from "@icons/pencil.svg";

const admin = {
    url: "",
    userName: "adshiker_verify",
    fullName: "Adshiker Admin",
};

function AccountVerification() {
    const { accountDetails } = useSelector(selectInfluencer);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(fetchAccountDetails());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const verifyHandler = () => {
        dispatch(emptyAccountDetailsAction());
    };

    if (accountDetails.loading) return <h1>Loading</h1>;

    if (accountDetails.error) return <ErrorPage />;

    if (!accountDetails.accountUserFullName) return <></>;

    return (
        <style.ComponentsWrapper>
            <style.Heading>verify your account</style.Heading>
            <style.SubTitle>
                verifying your account will allow you to get ads, this is your
                secret code for verification
            </style.SubTitle>
            <style.DivWrapper>
                <ProfileDisplay
                    user={{
                        fullName: accountDetails.accountUserFullName,
                        userName: accountDetails.accountUserName,
                        profilePicUrl: accountDetails.profilePicUrl,
                    }}
                    noShadow={true}
                    width={"max-content"}
                />
                <IconsDisplay
                    custom
                    name={PencilIcon}
                    height={"18px"}
                    onClick={() => setShowModal(true)}
                    style={{ marginLeft: "18px" }}
                />
            </style.DivWrapper>
            <Flex width={"100%"} styles={"justify-content: center"}>
                {accountDetails.accountCategories.map((c, i) => (
                    <Card
                        id={i}
                        width={"max-content"}
                        margin={"10px 22px 5px 0px"}
                        styles={"padding: 2px"}
                        height={"25px"}
                        centerItems
                        cursorPointer
                        selected
                        key={c.id}
                    >
                        <style.CategoryText bold>{c.name}</style.CategoryText>
                    </Card>
                ))}
            </Flex>
            <Card
                width={"max-content"}
                margin={"0 auto"}
                bg={
                    "linear-gradient(168.77deg, #0012B4 -19.94%, #00FFE0 184.34%)"
                }
                styles={"position: relative; display: flex;"}
                radius="20px"
                inset
            >
                <CardWrapper
                    style={{
                        textAlign: "center",
                        fontSize: "32px",
                        fontWeight: "bold",
                        lineHeight: "37px",
                        borderRadius: "20px",
                        letterSpacing: "0.26em",
                        padding: 10,
                    }}
                >
                    {`${accountDetails.secretCode.slice(
                        0,
                        3
                    )} ${accountDetails.secretCode.slice(3, 7)}`}
                </CardWrapper>
            </Card>
            <style.Heading fontSize={"14px"} style={{ marginBottom: 20 }}>
                DM this verification code to our Instagram account{" "}
            </style.Heading>
            <ProfileDisplay user={admin} noShadow />
            <style.Line style={{ height: "1px", width: "300px" }} />
            <style.DivWrapper flexDirection={"column"} marginBottom={"30%"}>
                <style.Paragraph
                    fontSize={"12px"}
                    color={"rgba(255, 255, 255, 0.7)"}
                >
                    * You must send this code from your selected instagram
                    account <span>@elon_musk</span>
                </style.Paragraph>
                <style.Paragraph
                    fontSize={"12px"}
                    color={"rgba(255, 255, 255, 0.7)"}
                >
                    Please follow <span>@adshiker_admin</span> if you don’t get
                    ‘Message’ option.
                </style.Paragraph>
                <style.Paragraph
                    fontSize={"12px"}
                    color={"rgba(255, 255, 255, 0.7)"}
                >
                    After you DM the code, we’ll evaluate the code and verify
                    your account. You’ll get an automated DM{" "}
                    <span>@elon_musk</span> and an email on{" "}
                    <span>elonmusk@gmail.com</span> for your account’s
                    confirmation.
                </style.Paragraph>
                <style.Paragraph
                    fontSize={"12px"}
                    color={"rgba(255, 255, 255, 0.7)"}
                >
                    Once your account is verified, you’ll be able to get ads and
                    your profile will be visible to the advertisers.
                </style.Paragraph>
                <style.Paragraph
                    fontSize={"12px"}
                    color={"rgba(255, 255, 255, 0.7)"}
                >
                    You’ll be redirected once your account is conformed.
                </style.Paragraph>
            </style.DivWrapper>
            <Modal
                height={"max-content"}
                showModal={showModal}
                bottomModal
                onCloseProps={() => setShowModal(false)}
            >
                <style.ComponentsWrapper>
                    <style.StyledButton
                        name={"Change Account"}
                        onClick={verifyHandler}
                        margin={"5px 0 10px"}
                        bg={"#ffffff"}
                        styles={
                            "color: #000; font-size: 14px; width: 232px; height: 38px; text-align: left"
                        }
                        borderRadius={"4px"}
                    />
                    <style.StyledButton
                        name={"Delete Account"}
                        onClick={verifyHandler}
                        margin={"5px 0"}
                        borderRadius={"4px"}
                        styles={
                            "font-size: 14px; width: 232px; height: 38px; color: #000; text-align: left;"
                        }
                        bg={"#ffffff"}
                    />
                </style.ComponentsWrapper>
            </Modal>
        </style.ComponentsWrapper>
    );
}

export default AccountVerification;
