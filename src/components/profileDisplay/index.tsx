import React from "react";
import { Card } from "@components/library/card";
import { CardIcon, ComponentBlock, DivWrapper, TextView } from "./styles";

export const ProfileDisplay = (props: any) => {
    const {
        style,
        onClick,
        noShadow,
        width,
        cursorPointer,
        selected,
        children,
    } = props;
    const { userName, fullName, profilePicUrl } = props.user;
    return (
        <ComponentBlock style={style}>
            <Card
                onClickProps={onClick}
                inset={selected}
                cursorPointer={cursorPointer}
                noShadow={noShadow}
                noBorder
                width={width || "282px"}
                height={"60px"}
                radius={"20px"}
            >
                <DivWrapper
                    flexDirection={"row"}
                    height={"100%"}
                    alignItems={"center"}
                >
                    <Card
                        radius={"50%"}
                        width={"45px"}
                        height={"42px"}
                        margin={"10px"}
                        noShadow
                    >
                        <CardIcon src={profilePicUrl} />
                    </Card>

                    <DivWrapper
                        flexDirection={"column"}
                        marginLeft={"14px"}
                        height={"100%"}
                    >
                        <TextView style={{ marginTop: 8 }}>{userName}</TextView>
                        <TextView
                            fontSize={"12px"}
                            opacity={0.8}
                            style={{ marginTop: 8 }}
                        >
                            {fullName}
                        </TextView>
                    </DivWrapper>
                    {children}
                </DivWrapper>
            </Card>
        </ComponentBlock>
    );
};
