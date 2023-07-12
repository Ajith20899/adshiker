import React from "react";
import { IconsDisplay } from "@components/iconDisplay";
import { ComponentsWrapper, PlainText } from "./styles";

function ErrorPage(props: any) {
    return (
        <ComponentsWrapper>
            <PlainText marginLeft={"90px"}>Error Page</PlainText>
            <PlainText>Oops...Something Went Wrong!</PlainText>
            <IconsDisplay name={"sad"} variant={"plasticine"} size={100} />
        </ComponentsWrapper>
    );
}

export default ErrorPage;
