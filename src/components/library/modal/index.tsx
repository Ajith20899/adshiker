import React, { useEffect, useRef, useState } from "react";

import { ModalPropsI } from "./types";

import * as Styles from "./styles";

import { Close } from "@icons/Close";

export function Modal({
    id,
    children,
    showModal,
    fullPage,
    width,
    maxWidth,
    height,
    styles,
    dark,
    iconPosition,
    preventOutsideClose,
    className,
    hideClose,
    bottomModal,
    onCloseProps,
}: ModalPropsI) {
    const modalContentRef = useRef(null) as any;
    const modalBodyRef = useRef(null) as any;
    const [show, setShow] = useState(false);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        setShow(showModal);
    }, []);

    useEffect(() => {
        if (showModal) {
            setShow(true);
            setClosing(false);
            document.body.style.overflow = "hidden";
        } else {
            setClosing(true);
            document.body.style.overflow = "auto";
            let timer = setTimeout(() => {
                setShow(false);
                setClosing(false);
            }, 300);
            return () => clearTimeout(timer);
        }
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && showModal && !preventOutsideClose) {
                onCloseProps();
            }
        });
        function closeModal(e) {
            if (
                (e.target.id === id || e.target.id === "modalBody") &&
                !preventOutsideClose
            ) {
                onCloseProps();
            }
        }
        document.addEventListener("click", closeModal);
        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("click", closeModal);
        };
    }, [showModal]);

    useEffect(() => {
        if (fullPage) return;

        const modalBody = modalBodyRef?.current;
        const modalContent = modalContentRef?.current;
        var isMoving = false;
        var position = 0;
        var percentage = 0;
        var fixed = 0;
        var isFixed = false;

        function mousedownHandler() {
            percentage = modalContent?.clientHeight;
            isMoving = true;
            isFixed = false;
            modalContent?.addEventListener("touchmove", mousemoveHandler);
        }

        function mousemoveHandler(e: any) {
            let x = modalBody?.clientHeight - e?.changedTouches[0]?.clientY;

            if (!isFixed) {
                fixed = modalContent?.clientHeight - x;
            }
            if (!(x <= 320 && x >= 0)) return;
            isFixed = true;
            position = x + fixed;

            if (modalContent && isMoving) {
                if (position >= 0 && position <= percentage) {
                    modalContent.style.bottom = `-${percentage - position}px`;
                }
            }
            isMoving = true;
            modalContent?.addEventListener("touchend", mouseupHandler);
        }

        function mouseupHandler() {
            if (isMoving) {
                isMoving = false;

                modalContent.style.bottom = "0px";
                if (position < percentage - 100) {
                    onCloseProps();
                    modalContent?.removeEventListener(
                        "touchmove",
                        mousemoveHandler
                    );
                }
            }
        }

        modalContent?.addEventListener("touchstart", mousedownHandler);
    }, []);

    return (
        <Styles.ModalBody
            showModal={show}
            fullPage={fullPage}
            bottomModal={bottomModal}
            closing={closing}
            styles={styles}
            ref={modalBodyRef}
            className={"modalBody"}
            id={id || "modalBody"}
        >
            <Styles.ModalContent
                ref={modalContentRef}
                width={width}
                maxWidth={maxWidth}
                height={height}
                dark={dark}
                fullPage={fullPage}
                className={className}
                bottomModal={bottomModal}
                closing={closing}
            >
                {!hideClose && (
                    <Styles.IconWrapper
                        fullPage={fullPage}
                        bottomModal={bottomModal}
                        dark={dark}
                        iconPosition={iconPosition}
                        width={width}
                        maxWidth={maxWidth}
                        onClick={onCloseProps}
                    >
                        <Close fill={dark ? "#fff" : "var(--appBlack"} />
                    </Styles.IconWrapper>
                )}
                <>{children}</>
            </Styles.ModalContent>
        </Styles.ModalBody>
    );
}
