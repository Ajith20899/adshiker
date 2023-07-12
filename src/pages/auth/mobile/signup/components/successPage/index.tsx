import React from "react";

import { history } from "@utils/history";

import * as Styles from "./styles";
import { Column, BoldButton } from "@pages/auth/styles";

import confettiLogo from "@icons/confetti.svg";

function SuccessPage(props: { influencer: string }) {
    const clickHandler = () => {
        if (props.influencer !== "ADVERTISER") {
            history.replace("/influencer/onboarding/personal-details");
        } else {
            history.replace("/");
        }
    };

    return (
        <Column height="100vh" justifyContent={"flex-start"}>
            <Styles.ConfettiLogo src={confettiLogo} alt="" />
            <Styles.WelcomeText>Welcome!</Styles.WelcomeText>
            <Styles.BannerText>to adshiker</Styles.BannerText>
            <BoldButton
                onClick={clickHandler}
                borderRadius={"50px"}
                margin={"81px auto 20px auto"}
                name={"PROCEED"}
            />
        </Column>
    );
}

export default SuccessPage;
