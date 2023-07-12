import React, { useState } from "react";

import { Flex } from "@components/library/containers";

import { NAVIGATION_LINKS } from "@utils/constants";

import * as Styles from "./styles";
import Divider from "@components/library/divider";

export default function BottomNavigationBar() {
    const [links, setLinks] = useState(NAVIGATION_LINKS.influencerLinks);
    const [selected, setSelected] = useState("explore");
    return (
        <>
            <Styles.Wrapper
                cols={4}
                justifyContent={"center"}
                alignItems={"center"}
            >
                {links?.map((item) => (
                    <Flex
                        direction={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        key={item.key}
                        styles={`opacity: ${
                            selected === item.key ? "1" : "0.4"
                        };transition: 0.3s ease;`}
                        onClick={() => setSelected(item.key)}
                    >
                        <Styles.Icon src={item.icon} />
                        <Styles.Name>{item.name}</Styles.Name>
                    </Flex>
                ))}
            </Styles.Wrapper>
        </>
    );
}
