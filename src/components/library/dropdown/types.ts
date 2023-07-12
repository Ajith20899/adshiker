import { Dispatch, SetStateAction } from "react";

interface ListItemI {
    displayValue: string | number;
    value: string | number;
    addonValue?: any;
}

export interface DropdownPropsI {
    selectedValue: string | number;
    dropdownList: ListItemI[];
    getSelectedValue: (selectedValue: any) => void;
    id?: string;
    height?: string;
    maxHeight?: string;
    width?: string;
    maxWidth?: string;
    margin?: string;
    mMargin?: string;
    className?: string;
    placeholder?: string;
    bordered?: boolean;
    label?: string;
    fontSize?: string;
    showList?: boolean;
    isSwiped?: boolean;
    styles?: string;
    isClosed?: Dispatch<SetStateAction<boolean>>;
    onClickProps?: () => void;
}
