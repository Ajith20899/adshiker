export interface ModalPropsI {
    showModal: boolean;
    id?: string;
    fullPage?: boolean;
    width?: string;
    maxWidth?: string;
    height?: string;
    preventOutsideClose?: boolean;
    className?: string;
    dark?: boolean;
    iconPosition?: string;
    hideClose?: boolean;
    bottomModal?: boolean;
    styles?: string;
    children?: React.ReactElement | React.ReactElement[];
    onCloseProps: () => void;
}
