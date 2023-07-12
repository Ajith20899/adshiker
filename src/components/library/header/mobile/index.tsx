import React from "react";

import { IconButton } from "@components/library/button/icon";
import { Flex, Grid } from "@components/library/containers";
import Divider from "@components/library/divider";
import AppLogo from "@components/library/appLogo";

import UserMale from "@icons/userMale.svg";
import Bell from "@icons/bell.svg";

export default function HeaderMobile() {
    return (
        <>
            <Grid cols={2} padding={"10px"}>
                {/* <AppLogo hideName /> */}
                <div />
                <Flex justifyContent={"flex-end"}>
                    <IconButton
                        direction={"column"}
                        height={"50px"}
                        width={"50px"}
                        icon={Bell}
                        iconWidth={"22px"}
                        iconHeight={"22px"}
                        size={"12px"}
                        onClick={() => {}}
                        margin={"0 20px 0 0"}
                    />
                    <IconButton
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
