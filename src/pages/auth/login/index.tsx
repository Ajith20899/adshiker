import React, { useState, useEffect, lazy } from "react";

const MobileLoginPage = lazy(() => import("@pages/auth/mobile/login"));

function LoginPage() {
    const [device, setDevice] = useState("");

    useEffect(() => {
        setDevice("mobile");
    }, []);

    switch (device) {
        case "mobile":
            return <MobileLoginPage />;

        case "desktop":
            return <h1>Under construction</h1>;

        default:
            return <h1>Loading........</h1>;
    }
}

export default LoginPage;
