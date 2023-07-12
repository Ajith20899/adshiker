import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocationText } from "./components/locationText";
import ModalLocationField from "./components/modal/index";
import { Flex } from "@components/library/containers";
import { PrimaryButton } from "@components/library/button/primary";
import { IconsDisplay } from "@components/iconDisplay";
import { PincodeInput } from "@components/pincodeInput";
import { Snackbar } from "@components/library/snackbar";
import {
    fetchPincodeDetails,
    influenceLocationDetailsAction,
} from "@redux/influencer/actions";
import { updateRedirectionParam } from "@redux/redirect/actions";
import { selectInfluencer } from "@redux/influencer/slices";
import { postRequest } from "@services/http_requests";
import { backURL, influencerPostURL } from "@services/urls";
import { history } from "@utils/history";
import { SNACKBAR_TYPES } from "@utils/constants";
import { Pages } from "@pages/influencerOnboarding/constants";
import { locationDetailsValidate } from "@pages/influencerOnboarding/validate";
import {
    ComponentsWrapper,
    DivWrapper,
    Heading,
    Label,
    Line,
    SubTitle,
} from "./styles";
import PencilIcon from "@icons/pencil.svg";

function LocationDetails() {
    const { pincodeDetails, error, pincode: reduxPincode } = useSelector(
        selectInfluencer
    );
    const dispatch = useDispatch();

    const [pincode, setPincode] = useState(reduxPincode || "");
    const [location, setLocation] = useState(pincodeDetails);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [backLoader, setBackLoader] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [proceed, setProceed] = useState(false);
    const [snackbar, setSnackbar] = useState("");
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        setValidated(
            locationDetailsValidate(
                pincode,
                location.district,
                location.state,
                location.country
            )
        );
    }, [pincode, location]);

    useEffect(() => {
        if (
            pincodeDetails.district &&
            pincodeDetails.state &&
            pincodeDetails.country
        ) {
            setPincode(reduxPincode || "");
            setLocation(pincodeDetails);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reduxPincode]);

    useEffect(() => {
        if (proceed) {
            history.push(Pages.ACCOUNT_DETAILS);
        }
    }, [proceed]);

    useEffect(() => {
        if (pincodeDetails?.country) {
            setLocation(pincodeDetails);
            setFetching(false);
        } else if (error) {
            setLocation({ district: "", state: "", country: "" });
            setFetching(false);
            setShowModal(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pincodeDetails]);

    const editHandler = () => {
        setShowModal(true);
    };

    const closeHandler = () => {
        setShowModal(false);
    };

    const pincodeInputHandler = (data: string) => {
        if (data.length <= 6) {
            setPincode(data);
            setLocation({
                district: "",
                state: "",
                country: "",
            });
            if (data.length === 6) {
                setFetching(true);
                dispatch(fetchPincodeDetails(data));
            }
        }
    };

    const backHandler = () => {
        setBackLoader(true);
        postRequest(backURL.EditPage)
            .then((res) => {
                dispatch(
                    updateRedirectionParam({
                        requireRedirectUrl: false,
                        requiredJourneyStep: Pages.PERSONAL_DETAILS,
                    })
                );
                history.push(Pages.PERSONAL_DETAILS);
            })
            .catch((e) => {
                setBackLoader(false);
                setSnackbar("Oops...Something Went Wrong!");
            });
    };

    const clearHandler = () => {
        setPincode("");
        setLocation({
            district: "",
            state: "",
            country: "",
        });
    };

    const onClickHandler = async () => {
        if (validated) {
            setLoading(true);
            try {
                dispatch(
                    updateRedirectionParam({
                        requireRedirectUrl: true,
                    })
                );
                const { data: result } = await postRequest(
                    influencerPostURL.influencerPostDetails,
                    {
                        data: {
                            pincode,
                            cityName: location.district,
                            stateName: location.state,
                            country: location.country,
                        },
                    }
                );

                if (result && result.status) {
                    dispatch(
                        influenceLocationDetailsAction({
                            pincode,
                            pincodeDetails: {
                                district: location.district,
                                state: location.state,
                                country: location.country,
                            },
                        })
                    );
                    setProceed(true);
                } else {
                    setSnackbar("Oops...Something Went Wrong!");
                }
            } catch (error) {
                setSnackbar("Oops...Something Went Wrong!");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <ComponentsWrapper margin={"0 auto"} padding={"0"}>
            <ComponentsWrapper margin={"0 auto"}>
                {snackbar && (
                    <Snackbar text={snackbar} type={SNACKBAR_TYPES.failure} />
                )}
                <Heading>location details</Heading>
                <SubTitle margin={"5px 0 20px"}>
                    let us know where you’re from
                </SubTitle>
                <DivWrapper flexDirection={"column"} length={pincode.length}>
                    <Label center>pincode</Label>
                    <DivWrapper margin={"12px auto 30px"} alignItems={"center"}>
                        <PincodeInput
                            noStyle
                            value={pincode}
                            placeholder={"000000"}
                            handler={pincodeInputHandler}
                        />
                        {pincode.length === 6 && (
                            <IconsDisplay
                                name={PencilIcon}
                                custom
                                height={"18px"}
                                onClick={clearHandler}
                            />
                        )}
                    </DivWrapper>
                </DivWrapper>
                {pincode.length < 6 && (
                    <SubTitle fontSize={"12px"}>
                        this will help us try to find your city, state and
                        country
                    </SubTitle>
                )}
                {fetching && (
                    <SubTitle fontSize={"14px"}>
                        fetching pincode details...
                    </SubTitle>
                )}
                {pincode.length === 6 && location.state && (
                    <>
                        <Line />
                        <SubTitle margin={"4px auto 10px"} fontSize={"12px"}>
                            verify the details and proceed
                        </SubTitle>
                        <LocationText
                            label={"City"}
                            location={location.district}
                        />
                        <LocationText
                            label={"State"}
                            location={location.state}
                        />
                        <LocationText
                            label={"Country"}
                            location={location.country}
                        />
                        <SubTitle
                            margin={"13px auto 35px"}
                            fontSize={"12px"}
                            onClick={editHandler}
                            style={{ cursor: "pointer" }}
                        >
                            Not your location?
                        </SubTitle>
                    </>
                )}
            </ComponentsWrapper>
            <ModalLocationField
                showModal={showModal}
                locationHandler={(loc) => setLocation(loc)}
                closeHandler={closeHandler}
            />
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
                    onClick={onClickHandler}
                    name={"PROCEED"}
                    borderRadius={"50px"}
                    width={"140px"}
                    height={"50px"}
                    loader={loading}
                    styles={"margin-left: 18px"}
                />
            </Flex>
        </ComponentsWrapper>
    );
}

export default LocationDetails;
