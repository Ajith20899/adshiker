import React from "react";

import { IconButton } from "@components/library/button/icon";

import { history } from "@utils/history";

import * as Types from "./types";

import * as Styles from "./styles";
import { Row, Flex } from "@pages/auth/styles";

import leftArrow from "@icons/leftArrow.svg";

function Header(props: Types.AuthHeaderPropsI) {
    const { option, backNav } = props;

    return (
        <Styles.Wrapper>
            <Row height="95px" width="100%" padding="25px">
                {backNav && (
                    <IconButton
                        width={"45px"}
                        height={"45px"}
                        borderRadius={"50px"}
                        onClick={backNav ?? (() => {})}
                        icon={leftArrow}
                    />
                )}
                <Styles.Spacing />
                <Flex direction={"column"} width={"max-content"}>
                    <Styles.NavText
                        onClick={() =>
                            history.push(
                                option === "login" ? "/login" : "/signup"
                            )
                        }
                    >
                        {option}
                    </Styles.NavText>
                </Flex>
            </Row>
        </Styles.Wrapper>
    );
}

export default Header;
