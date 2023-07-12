import React from "react";

import UserTypeCard from "@pages/auth/mobile/components/typeCard";
import Header from "@pages/auth/mobile/components/header";

import { Column } from "@pages/auth/styles";
import { CardContainer } from "@pages/auth/styles";
import { TitleText } from "./styles";

import Advertiser from "@icons/advertisor.svg";
import Influencer from "@icons/influencer.svg";

import { SelectTypePagePropsI } from "./types";

function SelectTypePage(props: SelectTypePagePropsI) {
    const { setInfluencer, setPageState } = props;

    const selectAndProceed = async (type: boolean) => {
        setInfluencer(type);
        setPageState("phoneNumber");
    };
    return (
        <>
            <Header option="login" />
            <Column padding={"0 32px"}>
                <TitleText>you're an</TitleText>

                <CardContainer>
                    <UserTypeCard
                        image={Advertiser}
                        index={1}
                        onClick={() => selectAndProceed(false)}
                        text={"advertiser"}
                        color={"#E78B57"}
                    />
                    <UserTypeCard
                        image={Influencer}
                        index={2}
                        onClick={() => selectAndProceed(true)}
                        text={"influencer"}
                        color={"#84CAFD"}
                        margin={"0 12px 0"}
                    />
                </CardContainer>
            </Column>
        </>
    );
}

export default SelectTypePage;
