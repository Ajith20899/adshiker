import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Modal } from "../modal";
import { MediaCarouselPropsI } from "./types";
import * as Styles from "./styles";
const Media = lazy(() =>
    import("./components/media").then((module) => ({ default: module.Media }))
);

export function MediaCarousel(props: MediaCarouselPropsI) {
    const { media, styles, className } = props;

    const [show, setShow] = useState(true);
    const [selectedMedia, setSelectedMedia] = useState<string>(
        media?.length > 0 ? media[0] : ""
    );
    const [localMedia, setLocalMedia] = useState(media);

    useEffect(() => {
        setLocalMedia(media);
    }, [media]);

    const mediaHandler = (data: string, index: number) => {
        const mediaList = document.getElementsByClassName(
            "carouselMediaList"
        ) as any;
        for (let i = 0; i < mediaList?.length; i++) {
            if (!mediaList[i]?.children[0]) return;
            if (i === index) {
                mediaList[i].children[0].style.display = "inline-block";
            } else {
                mediaList[i].children[0].style.display = "none";
            }
        }
        setSelectedMedia(data);
    };

    const mediaList = useMemo(
        () => (
            <div>
                {localMedia?.map((data, index) => (
                    <React.Fragment key={index}>
                        {console.log("entry")}
                        <Suspense fallback={<></>}>
                            <Media
                                className={"carouselMediaList"}
                                url={data}
                                onClick={() => mediaHandler(data, index)}
                            />
                        </Suspense>
                    </React.Fragment>
                ))}
            </div>
        ),
        [media]
    );

    return (
        <Modal
            onCloseProps={() => setShow(false)}
            showModal={show}
            fullPage
            dark={false}
            iconPosition={`margin: -15px 0 0 calc(100% - 65px);`}
        >
            <Styles.MediaCarouselWrapper styles={styles} className={className}>
                <Styles.SelectedMedia>
                    <Suspense fallback={<></>}>
                        <Media url={selectedMedia} />
                    </Suspense>
                </Styles.SelectedMedia>
                {mediaList}
            </Styles.MediaCarouselWrapper>
        </Modal>
    );
}
