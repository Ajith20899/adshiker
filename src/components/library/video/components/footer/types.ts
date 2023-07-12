import { Dispatch, SetStateAction } from "react";

export interface VideoFooterT {
    videoFullDuration: number;
    isPlay: boolean;
    setIsplay: Dispatch<SetStateAction<boolean>>;
    playOrPause: () => void;
    fullScreenHandler: () => void;
}
