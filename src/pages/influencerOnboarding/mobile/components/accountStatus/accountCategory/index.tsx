import React from "react";
import { ProfileDisplay } from "@components/profileDisplay";
import { Flex } from "@components/library/containers";
import { Card } from "@components/library/card";
import { IconsDisplay } from "@components/iconDisplay";
import { AccountCategoryPropsI } from "./types";
import { CategoryI } from "../types";
import {
    DivWrapper,
    Heading,
    Line,
    SubTitle,
    CategoryText,
    ComponentsWrapper,
} from "./styles";
import PencilIcon from "@icons/pencil.svg";

function AccountCategory(props: AccountCategoryPropsI) {
    const { instagram, editHandler, categories, categoriesHandler } = props;

    const categorySelectHandler = (c: CategoryI, i: number) => {
        if (!c.selected) {
            const items = categories.filter((t) => t.selected).length;

            if (items >= 3) return;
        }
        const cates = categories.map((ct) => ({
            ...ct,
        }));
        cates[i].selected = !cates[i].selected;
        categoriesHandler(cates);
    };

    return (
        <ComponentsWrapper>
            <Heading>link instagram account</Heading>
            <SubTitle margin={"10px auto 15px"}>
                search your instagram account for linking with us.
            </SubTitle>
            <DivWrapper>
                <ProfileDisplay
                    style={{ alignItems: "center" }}
                    user={instagram}
                    noShadow={true}
                    width={"max-content"}
                >
                    <IconsDisplay
                        custom
                        name={PencilIcon}
                        height={"18px"}
                        onClick={editHandler}
                        style={{ marginLeft: "18px" }}
                    />
                </ProfileDisplay>
            </DivWrapper>
            <Line />
            <DivWrapper marginLeft={"-12px"}>
                <SubTitle
                    fontSize={"16px"}
                    color={"#FFFFFF"}
                    fontWeight={"bold"}
                    style={{ marginBottom: 27, marginLeft: 12 }}
                >
                    select upto 3 categories
                </SubTitle>
                <Flex
                    width={"100%"}
                    styles={"flex-wrap: wrap; justify-content: flex-start"}
                    padding={"0 3px 0 33px"}
                >
                    {categories.map((c, i) => (
                        <Card
                            id={c.id}
                            key={c.id}
                            width={"max-content"}
                            margin={c.selected ? "5px 0px" : "5px 10px"}
                            styles={"padding: 2px"}
                            height={"25px"}
                            centerItems
                            noShadow={!c.selected}
                            cursorPointer
                            selectable
                            onClickProps={() => categorySelectHandler(c, i)}
                            selected={c.selected}
                        >
                            <CategoryText bold={c.selected}>
                                {c.name}
                            </CategoryText>
                        </Card>
                    ))}
                </Flex>
            </DivWrapper>
        </ComponentsWrapper>
    );
}

export default AccountCategory;
