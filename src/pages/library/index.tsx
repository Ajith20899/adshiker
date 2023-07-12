import React, { useEffect, useState } from "react";
import styled from "styled-components";
import isMobile from "is-mobile";

import { PrimaryButton } from "@components/library/button/primary";
import { IconButton } from "@components/library/button/icon";
import { IconTextButton } from "@components/library/button/iconText";
import { PlainButton } from "@components/library/button/plain";
import { Input } from "@components/library/input";
import { Modal } from "@components/library/modal";
import { Dropdown } from "@components/library/dropdown";
import { TextArea } from "@components/library/textarea";
import { ReactDatePicker } from "@components/library/datePicker";
import { IssueList } from "../../fixtures/library/dropdown";
import { DateInput } from "@components/library/dateInput";
import { Otp, SingleLineOtp } from "@components/library/otp";
import { Checkbox } from "@components/library/checkbox";
import { Card } from "@components/library/card";
import Divider from "@components/library/divider";
import { RangeSlider } from "@components/library/rangeSlider";
import { Grid } from "@components/library/containers";
import { Snackbar } from "@components/library/snackbar";
import { SNACKBAR_TYPES } from "@utils/constants";
import { RadioGroup } from "@components/library/radio";
import { Placeholder } from "@components/library/placeHolder";
import { Avatar } from "@icons/Avatar";
import { Copy } from "@icons/Copy";
import Man from "@icons/man.png";
import { Confetti } from "@components/library/confetti";
import { FileUpload } from "@components/library/fileUpload";
import { MediaCarousel } from "@components/library/carousel";

const mediaCollection = [
    "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://homepages.cae.wisc.edu/~ece533/images/frymire.png",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://homepages.cae.wisc.edu/~ece533/images/girl.png",
];

export default function Library() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [singleRange, setSingleRange] = useState(0);
    const [dualRange, setDualRange] = useState([0, 10]);
    const [rangeDate, setRangeDate] = useState({
        start: null,
        end: null,
    });
    const [selectedIssue, setSelectedIssue] = useState("");
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [isShowDropdown, setIsShowDropdown] = useState(false);
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [genderOptions, setGenderOptions] = useState([
        { displayValue: "Male", selected: false, value: "Male" },
        { displayValue: "Female", selected: false, value: "Female" },
    ]);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        let timer = setTimeout(() => {
            setIsCompleted(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleGenderSelection = (value: string) => {
        let options = genderOptions.slice();
        genderOptions.forEach((opt, index) => {
            options[index].selected = false;
            if (opt.value === value) {
                options[index].selected = true;
            }
        });
        setGenderOptions(options);
        // setValues({
        //     ...values,
        //     gender: value,
        // });
    };

    const buttonHandler = () => {};

    const dateHandler = (dates: any) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        setRangeDate({
            start: start?.toLocaleDateString("en-US"),
            end: end?.toLocaleDateString("en-IN"),
        });
    };

    const dateInputHandler = (date: any) => {
        console.log("dateInput ", date);
    };

    const otpHandler = (otp: string) => {
        console.log("otp ", otp);
    };

    const datePickerCustomInputHandler = () => {
        const datePickerInput = document.getElementById("datePicker");

        if (datePickerInput) {
            datePickerInput.focus();
        }
    };

    const handleSingleRange = (value: number) => {
        setSingleRange(value);
    };

    const handleDualRange = (value: number[]) => {
        setDualRange(value);
    };

    return (
        <ComponentsWrapper>
            <Heading>Buttons</Heading>
            <ComponentBlock>
                <PrimaryButton
                    onClick={buttonHandler}
                    name={"Welcome"}
                    // loader

                    borderRadius={"50px"}
                    margin={"20px auto"}
                />
            </ComponentBlock>
            <ComponentBlock>
                <PrimaryButton
                    onClick={buttonHandler}
                    name={"Welcome"}
                    borderRadius={"50px"}
                    isColor
                    margin={"20px auto"}
                />
            </ComponentBlock>
            <ComponentBlock>
                <IconTextButton
                    onClick={buttonHandler}
                    icon={<Avatar />}
                    name={"Welcome"}
                    margin={"20px auto"}
                    disabled
                />
            </ComponentBlock>
            <ComponentBlock>
                <IconButton
                    height={"50px"}
                    width={"50px"}
                    onClick={buttonHandler}
                    icon={<Avatar height={"20px"} width={"20px"} />}
                    margin={"20px auto"}
                />
            </ComponentBlock>
            <ComponentBlock>
                <PlainButton
                    name={"Button"}
                    onClick={buttonHandler}
                    margin={"20px auto"}
                />
            </ComponentBlock>
            <Divider margin={"20px auto"} />
            <Heading>Input</Heading>
            <ComponentBlock>
                <Input
                    onChangeHandler={(e: any) => setValue(e.target.value)}
                    value={value}
                    margin={"30px auto 0"}
                    fontSize={"16px"}
                    label={"full name"}
                    errorLabel={"Invalid string"}
                    color={"blue"}
                    placeholder={"Elon Musk"}
                    height={"50px"}
                />
            </ComponentBlock>
            <ComponentBlock>
                <Input
                    onChangeHandler={(e: any) => setValue(e.target.value)}
                    value={value}
                    margin={"30px auto 0"}
                    capitalizedLabel
                    label={"mobile number"}
                    type={"number"}
                    placeholder={"99999 99999"}
                    height={"40px"}
                    loading={true}
                    icon={<Avatar />}
                />
            </ComponentBlock>
            <ComponentBlock>
                <Input
                    onChangeHandler={(e: any) => setValue(e.target.value)}
                    value={value}
                    margin={"30px auto"}
                    label={"Welcome"}
                    floatingLabel={true}
                    bordered={true}
                    loading={true}
                />
            </ComponentBlock>
            <ComponentBlock>
                <Input
                    onChangeHandler={(e: any) => setValue(e.target.value)}
                    value={value}
                    margin={"30px auto"}
                    label={"Welcome"}
                    bordered={true}
                    icon={<Avatar />}
                    loading={true}
                />
            </ComponentBlock>
            <Divider margin={"20px auto"} />
            <Heading>Textarea</Heading>
            <ComponentBlock>
                <TextArea
                    onChangeHandler={(e: any) => setValue(e.target.value)}
                    value={value}
                    label={"Text Area"}
                    capitalizedLabel
                    placeholder={"Content goes here...."}
                    margin={"20px auto"}
                />
            </ComponentBlock>
            <ComponentBlock>
                <TextArea
                    onChangeHandler={(e: any) => setValue(e.target.value)}
                    value={value}
                    label={"Text Area"}
                    bordered
                    placeholder={"Content goes here...."}
                    margin={"20px auto"}
                />
            </ComponentBlock>
            <Divider margin={"20px auto"} />
            <Heading>Modal</Heading>
            <ComponentBlock>
                <button
                    onClick={() => setIsOpen(true)}
                    style={{
                        color: "black",
                        width: "250px",
                        margin: "20px auto",
                    }}
                >
                    click
                </button>
                <Modal
                    onCloseProps={() => setIsOpen(false)}
                    showModal={isOpen}
                    bottomModal
                    height={"45%"}
                >
                    <div>Hello</div>
                </Modal>
            </ComponentBlock>
            <Divider margin={"20px auto"} />
            <Heading>Dropdown</Heading>
            <ComponentBlock>
                {isShowDropdown && (
                    <Dropdown
                        placeholder={"Select"}
                        selectedValue={selectedIssue}
                        dropdownList={IssueList}
                        onClickProps={() => setIsShowDropdown(false)}
                        isSwiped
                        getSelectedValue={(s) => {
                            setSelectedIssue(s);
                        }}
                        margin={"0px auto"}
                        width={"250px"}
                        height={"50px"}
                        maxWidth={"calc(100% - 20px)"}
                        mMargin={"0px 10px"}
                    />
                )}
                <button onClick={() => setIsShowDropdown(true)}>click</button>
            </ComponentBlock>
            <Divider margin={"20px auto"} />
            <Heading>Date Widget</Heading>
            <ComponentBlock>
                <ReactDatePicker
                    isPopupShow={true}
                    onCloseModalProps={() => {}}
                    selectedDate={startDate}
                    onChangeHandler={dateHandler}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    selectRange
                    width={"100%"}
                    height={"46px"}
                    popperPlacement={""}
                    fixedHeight={false}
                    icon
                    label={"Select Range"}
                    customInput={
                        <CustomDatePickerInput
                            value={startDate}
                            readonly
                            endDate={endDate}
                            onClick={datePickerCustomInputHandler}
                        />
                    }
                    styles={`margin-top: 34px;`}
                />
            </ComponentBlock>
            <Divider margin={"20px auto"} />
            <Heading>{"Date Input"}</Heading>
            <DateInput
                dateInputHandler={dateInputHandler}
                // defaultDate={"20-08-1999"} // u can use any symbol from this (., -, /, space, comma)
                // defaultPlaceholder={"dd-mm-yyyy"} // same above
                isBordered
                isRequired
            />
            <Divider margin={"20px auto"} />
            <Heading>{"One Time Password"}</Heading>
            <Otp
                columnCount={4}
                otpHandler={otpHandler}
                isBordered
                placeholder={"1111"}
            />
            <SingleLineOtp otpHandler={otpHandler} placeholder={"type..."} />
            <Divider margin={"20px auto"} />
            <Heading>{"Checkbox"}</Heading>
            <Checkbox
                checked={checkboxChecked}
                margin={"20px auto"}
                onChange={() => setCheckboxChecked(!checkboxChecked)}
            />
            <Divider margin={"20px auto"} />
            <Heading>{"Range Picker"}</Heading>
            <RangeSlider
                margin={"20px auto"}
                min={1}
                max={10}
                value={singleRange}
                overlapRangeValue={1}
                onChange={handleSingleRange}
            />
            <RangeSlider
                margin={"40px auto"}
                min={1}
                max={100}
                value={dualRange}
                overlapRangeValue={10}
                onChange={handleDualRange}
            />
            <Divider margin={"20px auto"} />
            <Grid cols={isMobile() ? 2 : 6} margin={"0 auto"} gap={"30px"}>
                <Card
                    selectable
                    cursorPointer
                    width={"100px"}
                    height={"100px"}
                    inset
                >
                    <CardWrapper>Card 1</CardWrapper>
                </Card>
                <Card width={"100px"} height={"100px"}>
                    <CardWrapper>Card 2</CardWrapper>
                </Card>
                <Card width={"100px"} height={"100px"} bg={"brown"} inset>
                    <CardWrapper>Card 3</CardWrapper>
                </Card>
                <Card width={"100px"} height={"100px"} bg={"brown"}>
                    <CardWrapper>Card 4</CardWrapper>
                </Card>
                <Card radius={"50%"} width={"80px"} height={"80px"} inset>
                    <CardWrapper>Card 5</CardWrapper>
                </Card>
                <Card radius={"50%"} width={"80px"} height={"80px"}>
                    <CardWrapper>Card 6</CardWrapper>
                </Card>
                <Card radius={"50%"} width={"80px"} height={"80px"} noBorder>
                    <CardWrapper>Card 7</CardWrapper>
                </Card>
                <Card
                    radius={"50%"}
                    width={"80px"}
                    height={"80px"}
                    noShadow
                    selectable
                    cursorPointer
                >
                    <CardWrapper>Click</CardWrapper>
                </Card>
                <Card
                    selectable
                    cursorPointer
                    radius={"50%"}
                    width={"80px"}
                    height={"80px"}
                >
                    <CardWrapper>Click</CardWrapper>
                </Card>
                <Card radius={"50%"} width={"80px"} height={"80px"}>
                    <CardIcon src={Man} />
                </Card>
                <Card radius={"50%"} width={"80px"} height={"80px"} inset>
                    <CardIcon src={Man} />
                </Card>
            </Grid>
            <Divider />
            <Heading>Snackbar</Heading>
            <Snackbar
                type={SNACKBAR_TYPES.success}
                text={"OTP SENT SUCCESSFULLY"}
            />
            <Snackbar
                type={SNACKBAR_TYPES.failure}
                text={"THERE WAS AN ERROR SENDING OTP"}
            />
            <Divider />
            <Heading>Radio</Heading>
            <RadioGroup
                errorLabel={"Error"}
                options={genderOptions}
                handleSelection={handleGenderSelection}
            />
            <Placeholder type={"image"} />
            <Confetti />
            <Divider />
            <Heading>file upload</Heading>
            <FileUpload
                isCompleted={isCompleted}
                fileHandler={() => console.log("hello")}
                mediaUrl={
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                }
                // mediaUrl={
                //     "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
                // }
                percentage={10}
            />
            <Divider />
            <Heading>Carousel</Heading>
            <button
                onClick={() => setIsCarouselOpen(true)}
                style={{
                    color: "black",
                    width: "250px",
                    margin: "20px auto",
                }}
            >
                click
            </button>
            {isCarouselOpen && <MediaCarousel media={mediaCollection} />}
        </ComponentsWrapper>
    );
}

const CustomDatePickerInput = React.forwardRef((props: any, _ref) => {
    const { value, readonly, endDate, onClick } = props;
    return (
        <CustomDatePickerInputWrapper onClick={onClick}>
            <input readOnly={readonly} value={value || "Start"} />
            {value && (
                <>
                    <span className={"splitDate"}></span>
                    <input
                        className={"datePickerEndDateInput"}
                        readOnly={readonly}
                        value={endDate?.toLocaleDateString("en-IN") || "End"}
                    />
                </>
            )}
        </CustomDatePickerInputWrapper>
    );
});

// styles

const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    height: 100%;
`;

const CardIcon = styled.img`
    height: 100%;
    width: 100%;
`;

const Heading = styled.div`
    color: #fff;
    margin: 10px auto;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
`;

const ComponentsWrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

const ComponentBlock = styled.div`
    position: relative;
    text-align: center;
    padding: 20px;
    display: grid;
    grid-template-columns: 3fr 1fr 10px;
    align-items: center;
    justify-content: center;

    & > input {
        opacity: 0;
    }

    & .splitDate {
        width: 100%;
        height: 2px;
        border-radius: 4px;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`;

const CustomDatePickerInputWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 10px 1fr;
    grid-gap: 0px 2px;
    align-items: center;
    cursor: pointer;
    z-index: 1;
    height: 100%;
    width: 200px;

    & > * {
        color: black !important;
        background: black;
    }
`;
