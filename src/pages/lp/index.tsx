import React from "react";

import AppLogo, { TagLine } from "@components/library/appLogo";
import { Flex } from "@components/library/containers";

import { history } from "@utils/history";

import * as Styles from "./styles";

import downArrow from "@icons/downArrow.svg";
import Rocket from "@icons/logo1.jpg";

export default function LP() {
    return (
        <Styles.ComponentWrapper>
            {/* <Styles.Logo src={Rocket} /> */}
            {/* <Styles.Spacer /> */}
            <Styles.Wrapper>
                <AppLogo size={"100px"} mSize={"60px"} height={"100px"} width={ "1000px"}/>
                {/* <TagLine size={"30px"} mSize={"30px"} /> */}
                <Styles.Soon>coming soon</Styles.Soon>
            </Styles.Wrapper>
            {/* <Styles.Spacer /> */}
            {/* <Styles.ButtonWrapper>
                <Styles.Button
                    name="Log in"
                    border={"1px solid #FFF"}
                    borderRadius={"10px 0px 0px 10px"}
                    onClick={() => history.push("/login")}
                />
                <Styles.Button
                    borderRadius={"0px 10px 10px 0px"}
                    color={"#000"}
                    bgColor={"#FFF"}
                    name="Sign up"
                    onClick={() => history.push("/signup")}
                />
            </Styles.ButtonWrapper>
            <Styles.IconWrapper>
                <img src={downArrow} alt="" />
            </Styles.IconWrapper> */}
        </Styles.ComponentWrapper>
    );
}
