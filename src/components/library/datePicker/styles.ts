import styled from "styled-components";

export const DatePickerWrapper = styled.div<{
    width?: string;
    height?: string;
    padding?: string;
    styles?: string;
}>`
    width: ${(p) => p.width || "250px"};
    height: ${(p) => p.height || "46px"};
    padding: ${(p) => p.padding || "10px"};
    border-radius: 6px;
    position: relative;
    text-align: left;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    ${(p) => p.styles};

    & .react-datepicker__day--in-range:first-line {
        background: yellow !important;
    }
    & .react-datepicker__input-container input {
        width: 100%;
        height: 100%;
        outline: none;
        border-radius: 5px;
        background: transparent;
        border: none;
        font-size: 15px;
        cursor: pointer;
    }
    & .react-datepicker__input-container input:nth-of-type(2) {
        text-align: center;
    }
    & .react-datepicker__triangle {
        display: none;
    }
    & .react-datepicker__navigation--previous {
        outline: none;
        border-right-color: var(--blueLeftLinear);
        top: 30px;
    }
    & .react-datepicker__navigation--next {
        outline: none;
        border-left-color: var(--blueLeftLinear);
        top: 30px;
    }
    & .react-datepicker__navigation--previous:hover {
        border-right-color: var(--blueRightLinear);
    }
    & .react-datepicker__navigation--next:hover {
        border-left-color: var(--blueRightLinear);
    }
    & .react-datepicker {
        background-color: transparent;
        width: 100%;
        color: white;
        border: none;
        border-radius: 0px;
        padding: 10px 0px;
    }
    & .react-datepicker__month-container {
        background: #f1f1f1;
        border-radius: 6px;
        width: 100%;
    }
    & .react-datepicker__day-name {
        color: var(--blueLeftLinear);
        font-weight: 900;
    }
    & .react-datepicker__header {
        background-color: transparent;
        border-bottom: none;
        border-top-left-radius: 0px;
        padding-top: 20px;
    }
    & .react-datepicker__day-names {
        margin: 10px 0px 0px 0px;
    }
    &
        .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
        border-top-right-radius: 0px;
    }
    & .react-datepicker__current-month,
    .react-datepicker-time__header,
    .react-datepicker-year-header {
        color: var(--blueLeftLinear);
    }
    & .react-datepicker__day,
    .react-datepicker__time-name {
        color: grey;
        font-weight: 800;
    }
    & .react-datepicker__day:hover,
    .react-datepicker__time-name:hover {
        background: var(--blueLeftLinear);
        color: #fff;
        outline: none;
    }
    & .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected {
        background: var(--blueRightLinear);
        color: #fff;
        outline: none;
    }
    & .react-datepicker__day--outside-month {
        color: #4a4c50;
        visibility: hidden;
    }
    & .react-datepicker__day--in-range {
        background: var(--blueRightLinear);
        color: white !important;
    }
    & .react-datepicker-popper {
        transform: none !important;
        top: auto !important;
    }
    & .react-datepicker-popper[data-placement^="top"] {
        bottom: 40px !important;
    }
    & .react-datepicker__day--disabled,
    .react-datepicker__month-text--disabled,
    .react-datepicker__quarter-text--disabled,
    .react-datepicker__year-text--disabled {
        color: #3a3a3a !important;
        pointer-events: none;
    }
    & svg {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
    }
    & .react-datepicker-popper {
        top: 50px !important;
        width: 100%;
    }
`;

export const Label = styled.label`
    font-size: 16px;
    position: absolute;
    top: -24px;
    left: 0px;
    color: #737373;
    font-weight: bold;
`;
