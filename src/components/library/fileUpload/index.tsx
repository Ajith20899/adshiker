import React from "react";
import AddIcon from "@icons/add.svg";
import { IFileUploadProps } from "./types";
import * as Styles from "./styles";

export function FileUpload(props: IFileUploadProps) {
    const { fileHandler, mediaUrl, mediaType, percentage, isCompleted } = props;

    return (
        <Styles.FileUploadWrapper>
            {percentage > 0 ? (
                <Styles.MediaWrapper>
                    {mediaUrl.match("mp4") || mediaType?.match("video") ? (
                        <>
                            <video width="100%">
                                <source src={mediaUrl} type="video/mp4" />
                            </video>
                            {isCompleted && (
                                <span className={"mediaPlayIcon"} />
                            )}
                        </>
                    ) : (
                        <>
                            <img src={mediaUrl} alt={"media"} />
                            {/* <span></span> */}
                        </>
                    )}
                    {!isCompleted && (
                        <span className={"percentage"}>{`${percentage}%`}</span>
                    )}
                </Styles.MediaWrapper>
            ) : (
                <label htmlFor={"fileUploadInput"}>
                    <img src={AddIcon} alt={"addIcon"} />
                    <input
                        id={"fileUploadInput"}
                        type={"file"}
                        hidden
                        onChange={fileHandler}
                    />
                </label>
            )}
        </Styles.FileUploadWrapper>
    );
}
