import React from "react";

import { IconButton } from "@components/library/button/icon";
import { Flex, Grid } from "@components/library/containers";
import AppLogo from "@components/library/appLogo";

import UserMale from "@icons/userMale.svg";
import Bell from "@icons/bell.png";
import Divider from "@components/library/divider";

export default function HeaderMobile() {
    return (
        <>
            <Grid cols={2} padding={"10px 20px"}>
                <AppLogo size={"18px"} />
                <div />
                <Flex justifyContent={"flex-end"}>
                    <IconButton
                        name={"notifications"}
                        direction={"column"}
                        height={"50px"}
                        width={"50px"}
                        icon={Bell}
                        iconWidth={"22px"}
                        iconHeight={"22px"}
                        size={"12px"}
                        onClick={() => {}}
                        margin={"0 30px 0 0"}
                    />
                    <IconButton
                        name={"Profile"}
                        direction={"column"}
                        height={"50px"}
                        width={"50px"}
                        icon={UserMale}
                        iconWidth={"80%"}
                        iconHeight={"80%"}
                        size={"12px"}
                        onClick={() => {}}
                    />
                </Flex>
            </Grid>
            <Divider />
        </>
    );
}
