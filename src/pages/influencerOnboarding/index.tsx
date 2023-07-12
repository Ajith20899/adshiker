import React, { useEffect, useState } from "react";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import Mobile from "./mobile";
import { influencerOnboardingModule } from "@redux/influencer/modules";

function InfluencerOnboarding() {
    const [device, setDevice] = useState("mobile");
    let content: any;

    useEffect(() => {
        setDevice("mobile");
    }, []);

    switch (device) {
        case "mobile":
            content = <Mobile />;
            break;
        default:
            content = <h2>Desktop Loading</h2>;
            break;
    }

    return (
        <DynamicModuleLoader modules={[influencerOnboardingModule()]}>
            {content}
        </DynamicModuleLoader>
    );
}

export default InfluencerOnboarding;
