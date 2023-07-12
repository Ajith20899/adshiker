import React from "react";
import { LocationTextWrapper } from "./styles";

export const LocationText = (props: any) => {
    return (
        <LocationTextWrapper>
            <h5 className="label">{props.label}</h5>
            <h3 className="location">{props.location}</h3>
        </LocationTextWrapper>
    );
};
