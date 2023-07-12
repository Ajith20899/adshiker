export const IssueList = [
    {
        displayValue: "site issue",
        value: "site issue",
    },
    {
        displayValue: "login issue",
        value: "login issue",
    },
    {
        displayValue: "others",
        value: "others",
    },
    {
        displayValue: "site issue",
        value: "site issue",
    },
    {
        displayValue: "login issue",
        value: "login issue",
    },
    {
        displayValue: "others",
        value: "others",
    },
];

// copy code source

export const Button1Code = `
    <PrimaryButton
        onClick={buttonHandler}
        name={'Welcome'}
        borderRadius={'50px'}
        margin={'20px auto'}
    />
`;
export const Button2Code = `
    <PrimaryButton
        onClick={buttonHandler}
        name={'Welcome'}
        isColor={true}
        borderRadius={'50px'}
        margin={'20px auto'}
    />
`;
export const Button3Code = `
    <IconTextButton
        onClick={buttonHandler}
        icon={Avatar}
        name={'Welcome'}
        margin={'20px auto'}
    />
`;
export const Button4Code = `
    <IconButton
        onClick={buttonHandler}
        icon={Avatar}
        margin={'20px auto'}
    />
`;
export const Button5Code = `
    <PlainButton
        name={'Button'}
        onClick={buttonHandler}
        margin={'20px auto'}
    />
`;

// input

export const Input1Code = `
    <Input
        onChangeHandler={(e: any) => setValue(e.target.value)}
        value={value}
        margin={"30px auto 0"}
        fontSize={"16px"}
        label={"Welcome"}
        padding={"0px"}
        placeholder={"Type"}
        height={"40px"}
    />
`;
export const Input2Code = `
    <Input
        onChangeHandler={(e: any) => setValue(e.target.value)}
        value={value}
        margin={"30px auto"}
        fontSize={"16px"}
        label={"Welcome"}
        floatingLabel={true}
        boxShadow={true}
    />
`;
export const Input3Code = `
    <Input
        onChangeHandler={(e: any) => setValue(e.target.value)}
        value={value}
        margin={"30px auto"}
        fontSize={"16px"}
        label={"Welcome"}
        boxShadow={true}
        src={Avatar}
        alt={"man"}
        loader={true}
        padding={"6px 40px"}
    />
`;

// Textarea

export const Textarea1code = `
    <TextArea
        onChangeHandler={(e: any) => setValue(e.target.value)}
        value={value}
        boxShadow={true}
        borderRadius={"5px"}
    />
`;

// modal

export const Modal1code = `
    <Modal
        onCloseProps={() => setIsOpen(false)}
        showModal={isOpen}
        bottomModal={true}
    >
        <>Hello</>
    </Modal>
`;

// dropdown

export const Dropdown1code = `
    <Dropdown
        selectedValue={selectedIssue}
        dropdownList={IssueList}
        getSelectedValue={(s) => {
            setSelectedIssue(s);
        }}
        margin={"30px auto"}
        width={"250px"}
        height={"50px"}
        placeholder={"Select issue"}
    />
`;
