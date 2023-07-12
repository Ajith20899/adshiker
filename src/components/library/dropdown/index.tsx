import React, { lazy, Suspense } from "react";
import { DropdownPropsI } from "./types";
const DropdownMobile = lazy(() =>
    import("./mobile").then((module) => ({ default: module.DropdownMobile }))
);
const DropdownDesktop = lazy(() =>
    import("./desktop").then((module) => ({ default: module.DropdownDesktop }))
);

export function Dropdown(props: DropdownPropsI) {
    const { isSwiped } = props;

    let swipeProps = { ...props, isSwiped };

    return (
        <>
            {isSwiped ? (
                <Suspense fallback={<></>}>
                    <DropdownMobile {...swipeProps} />
                </Suspense>
            ) : (
                <Suspense fallback={<></>}>
                    <DropdownDesktop {...props} />
                </Suspense>
            )}
        </>
    );
}
