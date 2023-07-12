import React from "react";
import ProfilePicture from "@images/profile.jpg";
import * as Styles from "../styles";
import { Card } from "@components/library/card";

const profileDetails = {
    0: {
        name: "Posts",
        count: "18",
    },
    1: {
        name: "Followers",
        count: "10K",
    },
    2: {
        name: "Money",
        count: "100K",
    },
};

export function ProfileDetails() {
    return (
        <Styles.ProfileDetailsContainer>
            <Card width={"100%"} height={"auto"}>
                <Styles.ProfileDetailsWrapper>
                    <Styles.ProfileImage src={ProfilePicture} alt={"profile"} />
                    <Styles.Username>{"Ajith20899"}</Styles.Username>
                    <Styles.ProfileDetailsBlock>
                        {profileDetails &&
                            Object.keys(profileDetails).map(
                                (data: any, index) => {
                                    return (
                                        <Styles.ProfileDetailsChildWrapper
                                            key={index}
                                        >
                                            <div>
                                                {profileDetails[data]?.name}
                                            </div>
                                            <div>
                                                {profileDetails[data]?.count}
                                            </div>
                                        </Styles.ProfileDetailsChildWrapper>
                                    );
                                }
                            )}
                    </Styles.ProfileDetailsBlock>
                </Styles.ProfileDetailsWrapper>
            </Card>
        </Styles.ProfileDetailsContainer>
    );
}
