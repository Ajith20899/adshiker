import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "@components/library/button/primary";
import { DateInput } from "@components/library/dateInput";
import { RadioGroup } from "@components/library/radio";
import { Snackbar } from "@components/library/snackbar";
import { updateRedirectionParam } from "@redux/redirect/actions";
import { selectInfluencer } from "@redux/influencer/slices";
import { influenceBasicDetailsAction } from "@redux/influencer/actions";
import { postRequest } from "@services/http_requests";
import { influencerPostURL } from "@services/urls";
import {
    objectToTimestamp,
    timestampToObject,
    timestampToString,
    validateDateFormat,
} from "@utils/date";
import { SNACKBAR_TYPES } from "@utils/constants";
import { history } from "@utils/history";
import { emailValidation } from "@utils/validation";
import { basicDetailsValidation } from "@pages/influencerOnboarding/validate";
import { Pages } from "@pages/influencerOnboarding/constants";
import {
    ButtonWrapper,
    ComponentBlock,
    DivWrapper,
    Heading,
    Label,
    SubTitle,
    Wrapper,
    BasicInput,
} from "./styles";

function PersonalDetails() {
    const dispatch = useDispatch();

    const influencer = useSelector(selectInfluencer);

    const { basicDetails, date: reduxDate } = influencer;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState({ day: "", month: "", year: "" });
    const [gender, setGender] = useState("");
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState("");
    const [proceed, setProceed] = useState(false);
    const [error, setError] = useState({
        name: false,
        email: false,
        date: false,
        gender: false,
    });
    const [validation, setValidation] = useState(false);
    const [genderOptions, setGenderOptions] = useState([
        {
            displayValue: "male",
            selected: false,
            value: "male",
        },
        {
            displayValue: "female",
            selected: false,
            value: "female",
        },
    ]);

    useEffect(() => {
        setValidation(
            basicDetailsValidation(name, email, date, gender) &&
                emailValidation(email) &&
                validateDateFormat(`${date.day}-${date.month}-${date.year}`)
        );
    }, [name, email, date, gender]);

    const handleGenderSelection = (value: string) => {
        setGenderOptions([
            {
                displayValue: "male",
                selected: value === "male",
                value: "male",
            },
            {
                displayValue: "female",
                selected: value === "female",
                value: "female",
            },
        ]);
        setGender(value);
        setError({
            ...error,
            gender: !(value === "male" || value === "female"),
        });
    };

    useEffect(() => {
        if (!proceed) {
            setName(basicDetails.name || "");
            setEmail(basicDetails.email || "");
            setDate(timestampToObject(influencer.date));
            setGender(influencer.gender || "");
            setGenderOptions([
                {
                    displayValue: "male",
                    selected: influencer.gender === "male",
                    value: "male",
                },
                {
                    displayValue: "female",
                    selected: influencer.gender === "female",
                    value: "female",
                },
            ]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [influencer]);

    const nameInputHandler = (name: any) => {
        setName(name.target.value);
        setError({
            ...error,
            name: false,
        });
    };

    const nameOnBlur = () => {
        if (!name) {
            setError({
                ...error,
                name: true,
            });
        }
    };

    const emailInputHandler = (email: any) => {
        setEmail(email.target.value);
        setError({
            ...error,
            email: false,
        });
    };

    const emailOnBlur = () => {
        if (!email || !emailValidation(email)) {
            setError({
                ...error,
                email: true,
            });
        }
    };

    const dateInputHandler = (date: any) => {
        setDate(date);
        setError({
            ...error,
            date: false,
        });
    };

    const clickHandler = async () => {
        if (validation) {
            setLoading(true);
            const timestamp = objectToTimestamp(date);
            dispatch(
                influenceBasicDetailsAction({
                    basicDetails: { name, email },
                    date: timestamp,
                    gender,
                })
            );
            dispatch(
                updateRedirectionParam({
                    requireRedirectUrl: true,
                })
            );
            try {
                const { data: result } = await postRequest(
                    influencerPostURL.influencerPostDetails,
                    {
                        data: {
                            fullName: name,
                            emailId: email,
                            dob: timestamp,
                            gender,
                        },
                    }
                );
                if (result && result.status) {
                    setProceed(true);
                    history.push(Pages.LOCATION_DETAILS);
                    return;
                }
                setLoading(false);
                setSnackbar("Oops...Something Went Wrong!");
            } catch (e) {
                setLoading(false);
                setSnackbar("Oops...Something Went Wrong!");
            }
        }
    };

    return (
        <Wrapper>
            {snackbar && (
                <Snackbar text={snackbar} type={SNACKBAR_TYPES.failure} />
            )}
            <ComponentBlock>
                <Heading>personal details</Heading>
                <SubTitle style={{ margin: "10px auto 15px" }}>
                    help us with few details to identify you
                </SubTitle>
                <BasicInput
                    onChangeHandler={nameInputHandler}
                    value={name}
                    margin={"40px auto 0"}
                    fontSize={"16px"}
                    label={"full name"}
                    placeholder={"full name"}
                    padding={"6px 40px"}
                    height={"30px"}
                    errorLabel={error.name ? "enter valid name" : undefined}
                    onBlur={nameOnBlur}
                />
                <BasicInput
                    onChangeHandler={emailInputHandler}
                    value={email}
                    margin={"40px auto 0"}
                    fontSize={"16px"}
                    label={"email id"}
                    placeholder={"elonmusk@mail.com"}
                    height={"30px"}
                    errorLabel={error.email ? "enter valid email" : undefined}
                    onBlur={emailOnBlur}
                />
                <DivWrapper margin={"30px auto 0"}>
                    <Label>date of birth</Label>
                    <DateInput
                        defaultDate={timestampToString(reduxDate)}
                        defaultPlaceholder={"DD/MM/YYYY"}
                        styles={"padding: 2px 0 10px"}
                        dateInputHandler={dateInputHandler}
                        isRequired
                    />
                </DivWrapper>
                <DivWrapper
                    margin={"12px auto 0"}
                    display={"flex"}
                    flexDirection={"column"}
                    paddingRight={"80px"}
                >
                    <Label style={{ marginBottom: "15px" }}>gender</Label>
                    <RadioGroup
                        errorLabel={
                            error.gender ? "Choose a gender" : undefined
                        }
                        options={genderOptions}
                        handleSelection={handleGenderSelection}
                    />
                </DivWrapper>
            </ComponentBlock>
            <ButtonWrapper>
                <PrimaryButton
                    disabled={!validation || loading}
                    onClick={clickHandler}
                    name={"PROCEED"}
                    borderRadius={"50px"}
                    loader={loading}
                    margin={"0 auto"}
                    width={"200px"}
                    height={"50px"}
                />
            </ButtonWrapper>
        </Wrapper>
    );
}

export default PersonalDetails;
