export const ddmm = (date: Date) => {
    const day = date.getDate();
    const month = monthString((date.getMonth() + 1).toString());
    return `${day} ${month}`;
};

export const objectToString = (
    obj: { day: string; month: string; year: string },
    delimiter: string = "/"
) => {
    if (obj.day && obj.month && obj.year) {
        return `${obj.day}${delimiter}${obj.month}${delimiter}${obj.year}`;
    }
    return undefined;
};

export const timestampToObject = (timestamp: number | undefined) => {
    const date = new Date(timestamp || "");
    let day = "" + (date.getDate() || "");
    let month = "" + (date.getMonth() + 1 || "");
    const year = "" + (date.getFullYear() || "");
    if (day.length === 1) {
        day = "0" + day;
    }
    if (month.length === 1) {
        month = "0" + month;
    }
    return { day, month, year };
};

export const timestampToString = (timestamp: number | undefined) => {
    const obj = timestampToObject(timestamp);
    return objectToString(obj);
};

export const objectToTimestamp = (obj: {
    day: string;
    month: string;
    year: string;
}) => {
    const timestamp = new Date(
        Number(obj.year),
        Number(obj.month) - 1,
        Number(obj.day)
    ).getTime();
    return timestamp;
};

export const monthString = (month: string) => {
    switch (month) {
        case "1" || "01":
            return "Jan";
        case "2" || "02":
            return "Feb";
        case "3" || "03":
            return "Mar";
        case "4" || "04":
            return "Apr";
        case "5" || "05":
            return "May";
        case "6" || "06":
            return "Jun";
        case "7" || "07":
            return "Jul";
        case "8" || "08":
            return "Aug";
        case "9" || "09":
            return "Sep";
        case "10":
            return "Oct";
        case "11":
            return "Nov";
        case "12":
            return "Dec";
        default:
            return "Jan";
    }
};

export const getMaxExpireDate = () => {
    var d = new Date();
    d.setTime(d.getTime() + 999 * 24 * 60 * 60 * 1000);
    return d;
};

export const validateDateFormat = (str: string) => {
    var parms = str.split(/[.\-/]/);
    var yyyy = parseInt(parms[2], 10);
    var mm = parseInt(parms[1], 10);
    var dd = parseInt(parms[0], 10);
    var date = new Date(yyyy, mm - 1, dd, 0, 0, 0, 0);
    if (
        !(
            mm === date.getMonth() + 1 &&
            dd === date.getDate() &&
            yyyy === date.getFullYear() &&
            yyyy?.toString()?.length !== 3
        )
    )
        return false;
    return true;
};

// validation
export const dayValidation = (str: string): string => {
    var parms = str.split(/[.\-/]/);
    var yyyy = parseInt(parms[2], 10);
    var mm = parseInt(parms[1], 10);
    var dd = parseInt(parms[0], 10);
    var date = new Date(yyyy, mm - 1, dd, 0, 0, 0, 0);
    if (
        !(
            mm === date.getMonth() + 1 &&
            dd === date.getDate() &&
            yyyy === date.getFullYear() &&
            yyyy?.toString()?.length !== 3
        )
    )
        return "please check the date";
    else return "";
};
