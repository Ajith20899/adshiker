import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PrimaryButton } from "@components/library/button/primary";
import { Snackbar } from "@components/library/snackbar";
import { Flex } from "@components/library/containers";
import AccountDetails from "./accountDetails";
import AccountCategory from "./accountCategory";
import { influenceAccountDetailsAction } from "@redux/influencer/actions";
import * as Types from "@redux/influencer/types";
import { updateRedirectionParam } from "@redux/redirect/actions";
import { history } from "@utils/history";
import { SNACKBAR_TYPES } from "@utils/constants";
import { postRequest } from "@services/http_requests";
import { accountURL, backURL } from "@services/urls";
import { categories } from "@fixtures/influencerCategories";
import { Pages } from "@pages/influencerOnboarding/constants";
import { InstagramUserI } from "../accountVerification/types";
import { CategoryI } from "./types";
import * as Styles from "./styles";

function AccountStatus() {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(-1);
    const [searchUserList, setUserSearchList] = useState<InstagramUserI[]>([]);
    const [instaCategories, setInstaCategories] = useState<CategoryI[]>(
        categories.map((c) => ({ ...c, selected: false }))
    );
    const range = Array.from({ length: searchUserList.length }, (x, i) => i);
    const [validated, setValidated] = useState(false);
    const [snackbar, setSnackbar] = useState("");
    const [loading, setLoading] = useState(false);
    const [backLoader, setBackLoader] = useState(false);

    useEffect(() => {
        const categoryLength = instaCategories.filter((ct) => ct.selected)
            .length;
        setValidated(
            range.includes(selected) && categoryLength > 0 && categoryLength < 4
        );
    }, [instaCategories, range, selected]);

    const verifyHandler = () => {
        if (range.includes(selected)) {
            const selectedCategories = instaCategories.filter(
                (ct) => ct.selected
            );

            if (
                !(
                    selectedCategories.length > 0 &&
                    selectedCategories.length < 4
                )
            )
                return;

            const user = searchUserList[selected];

            const userAccountDetails: Types.UserAccountDetailsT = {
                accountCategories: selectedCategories,
                accountUserFullName: user.fullName,
                accountUserName: user.userName,
                profilePicUrl: user.profilePicUrl,
            };
            dispatch(
                updateRedirectionParam({
                    requireRedirectUrl: true,
                })
            );
            setLoading(true);
            postRequest(accountURL.accountDetails, { userAccountDetails })
                .then((res) => {
                    console.log(res.data);
                    if (res.data.status) {
                        dispatch(
                            influenceAccountDetailsAction({
                                instagram: searchUserList[selected],
                                accountCategories: selectedCategories,
                            })
                        );
                        history.push(Pages.ACCOUNT_VERIFICATION);
                        return;
                    }
                    setLoading(false);
                    setSnackbar("Oops...Something Went Wrong!");
                })
                .catch((e) => {
                    setLoading(false);
                    setSnackbar("Oops...Something Went Wrong!");
                });
        }
    };

    let content: JSX.Element;
    if (range.includes(selected)) {
        content = (
            <AccountCategory
                editHandler={() => {
                    setSelected(-1);
                    setUserSearchList([]);
                    setInstaCategories(
                        categories.map((c) => ({
                            ...c,
                            selected: false,
                        }))
                    );
                }}
                categories={instaCategories}
                categoriesHandler={(categories: CategoryI[]) => {
                    setInstaCategories(categories);
                }}
                instagram={searchUserList[selected]}
            />
        );
    } else {
        content = (
            <AccountDetails
                userList={searchUserList}
                userListHandler={(userList: InstagramUserI[]) =>
                    setUserSearchList(userList)
                }
                selected={selected}
                selectedHandler={(selected: number) => setSelected(selected)}
            />
        );
    }

    const backHandler = () => {
        setBackLoader(true);
        postRequest(backURL.EditPage)
            .then(() => {
                dispatch(
                    updateRedirectionParam({
                        requireRedirectUrl: false,
                        requiredJourneyStep: Pages.LOCATION_DETAILS,
                    })
                );
                history.push(Pages.LOCATION_DETAILS);
            })
            .catch((e) => {
                setBackLoader(false);
                setSnackbar("Oops...Something Went Wrong!");
            });
    };

    return (
        <Styles.ComponentsWrapper padding={"0"}>
            {snackbar && (
                <Snackbar text={snackbar} type={SNACKBAR_TYPES.failure} />
            )}
            {content}
            <Flex
                styles={
                    "margin-bottom: 45px;width: 100%;justify-content: space-evenly"
                }
            >
                <PrimaryButton
                    onClick={backHandler}
                    name={"BACK"}
                    borderRadius={"50px"}
                    width={"140px"}
                    height={"50px"}
                    styles={"margin-left: -4px"}
                    loader={backLoader}
                    disabled={backLoader}
                />
                <PrimaryButton
                    disabled={!validated || loading}
                    onClick={verifyHandler}
                    name={"PROCEED"}
                    borderRadius={"50px"}
                    width={"140px"}
                    height={"50px"}
                    loader={loading}
                    styles={"margin-left: 18px"}
                />
            </Flex>
        </Styles.ComponentsWrapper>
    );
}

export default AccountStatus;
