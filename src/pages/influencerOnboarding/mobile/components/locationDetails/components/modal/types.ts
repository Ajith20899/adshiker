export interface ModalLocationFieldPropsI {
    showModal: boolean;
    locationHandler: (obj: {
        district: string;
        state: string;
        country: string;
    }) => void;
    closeHandler: () => void;
}
