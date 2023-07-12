import React from "react";

import { Card } from "@components/library/card";

import { UserTypeCardPropsI } from "./types";

import * as Styles from "./styles";

function UserTypeCard(props: UserTypeCardPropsI) {
    const { selected, margin, onClick, color, image, text } = props;
    return (
        <Card
            noShadow={!selected}
            inset={selected}
            cursorPointer
            width={"145px"}
            height={"196px"}
            radius={"10px"}
            styles={"padding-top: 5px"}
            margin={margin}
            onClickProps={onClick}
        >
            <Styles.ImgWrapper color={color}>
                <Styles.ImgType src={image} alt="" />
            </Styles.ImgWrapper>
            <Styles.TypeText>{text}</Styles.TypeText>
        </Card>
    );
}

export default UserTypeCard;
