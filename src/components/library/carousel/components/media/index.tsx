import React, { useState, useEffect, lazy, Suspense } from "react";
import { IMediaProps } from "./types";
import * as Styles from "./styles";
const Placeholder = lazy(() =>
    import("@components/library/placeHolder").then((module) => ({
        default: module.Placeholder,
    }))
);

export function Media({ url, onClick, className }: IMediaProps) {
    const [localMedia, setLocalMedia] = useState(url);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setLocalMedia(url);
    }, [url]);

    useEffect(() => {
        if (localMedia?.match("mp4")) {
            var video = document.createElement("video");
            video.setAttribute("src", localMedia);
            video.addEventListener("canplay", function () {
                console.log("video true");
                setLocalMedia(url);
                setIsLoaded(true);
            });
            video.addEventListener("error", function () {
                console.log("video false");
                setLocalMedia(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
                );
                setIsLoaded(true);
            });
        } else {
            var image = new Image();

            image.onload = function () {
                setIsLoaded(true);
                setLocalMedia(url);
                console.log("image true");
            };
            image.onerror = function () {
                setIsLoaded(true);
                // image did not load
                console.log("image error ", localMedia);
                setLocalMedia(
                    "https://homepages.cae.wisc.edu/~ece533/images/frymire.png"
                );
            };
            image.src = url;
        }
    }, []);

    return (
        <>
            {isLoaded ? (
                <Styles.MediaList className={className} onClick={onClick}>
                    <label></label>
                    {!localMedia?.match("mp4") ? (
                        <img
                            className={"mediaFileurl"}
                            src={localMedia}
                            alt={"upload image"}
                            width={"100%"}
                            height={"100%"}
                        />
                    ) : (
                        <>
                            <video
                                className={"mediaFileurl"}
                                controls={false}
                                width={"100%"}
                                height={"100%"}
                            >
                                <source
                                    src={`${localMedia}#t=10`}
                                    type="video/mp4"
                                />
                            </video>
                            <span />
                        </>
                    )}
                </Styles.MediaList>
            ) : (
                <Suspense fallback={<></>}>
                    <Placeholder
                        type={"image"}
                        width={"100%"}
                        height={"100%"}
                    />
                </Suspense>
            )}
        </>
    );
}
