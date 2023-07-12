import React, { useState, useEffect, lazy } from "react";

const MobileSignUpPage = lazy(() => import("@pages/auth/mobile/signup"));

function SignUpPage() {
    const [device, setDevice] = useState("");

    useEffect(() => {
        setDevice("mobile");
    }, []);

    switch (device) {
        case "mobile":
            return <MobileSignUpPage />;

        case "desktop":
            return <h1>Under construction</h1>;

        default:
            return <h1>Loading........</h1>;
    }
}

export default SignUpPage;
