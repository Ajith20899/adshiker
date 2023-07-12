export const basicDetailsValidation = (
    name: string,
    email: string,
    date: { day: string; month: string; year: string },
    gender: string
) =>
    !(
        name === "" ||
        email === "" ||
        date.day.length !== 2 ||
        date.month.length !== 2 ||
        date.year.length !== 4 ||
        gender === ""
    );

export const locationDetailsValidate = (
    pincode: string,
    city: string,
    state: string,
    country: string
) => pincode?.length === 6 && city !== "" && state !== "" && country !== "";
