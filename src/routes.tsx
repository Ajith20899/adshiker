import React, { lazy, Suspense, useEffect } from "react";
import { Route, Router, Switch, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { DynamicModuleLoader } from "redux-dynamic-modules-react";
// import Auth from "@aws-amplify/auth";
// import Amplify from "@aws-amplify/core";

// import { VideoPlayer } from "@components/library/video";

// import { getUserModule } from "@redux/user/modules";
// import { getRedirectModule } from "@redux/redirect/modules";
// import { selectRedirection } from "@redux/redirect/slices";
// import Credentials from "@services/config/awsCredentials";
// import { handleInfluencerData } from "@utils/services";
import { history } from "@utils/history";

// Amplify.configure(Credentials);

const InfluencerOnboarding = lazy(() => import("@pages/influencerOnboarding"));
const Library = lazy(() => import("@pages/library"));
const LP = lazy(() => import("@pages/lp"));
const ComponentsTesting = lazy(() => import("@pages/componentsTesting"));
const SuccessPage = lazy(
    () => import("@pages/auth/mobile/signup/components/successPage")
);
const LoginPage = lazy(() => import("@pages/auth/login"));
const SignUpPage = lazy(() => import("@pages/auth/signup"));
const FbLogin = lazy(() => import("@pages/auth/fb"));
const ErrorPage = lazy(() => import("@components/errorPage"));

export default function Routes() {
    return (
        <Router history={history}>
            <Suspense
                fallback={<div style={{ textAlign: "center" }}>Loading...</div>}
            >
                {/* <DynamicModuleLoader
                    modules={[getUserModule(), getRedirectModule()]}
                >
                    <PageRoute />
                </DynamicModuleLoader> */}
                <Switch>
                    <Route exact path={"/"} component={LP} />
                </Switch>
            </Suspense>
        </Router>
    );
}

// const PageRoute = () => {
//     const location = useLocation();
//     const dispatch = useDispatch();
//     const { requireRedirectUrl, requiredJourneyStep } = useSelector(
//         selectRedirection
//     );

//     useEffect(() => {
//         Auth.currentAuthenticatedUser()
//             .then((user) => {
//                 if (
//                     !(
//                         location.pathname === "/login" ||
//                         location.pathname === "/signup" ||
//                         location.pathname === "/fb/login"
//                     )
//                 ) {
//                     if (user.attributes["custom:user_type"] === "ADVERTISER")
//                         return;
//                     import("@services/http_requests").then((req) =>
//                         handleInfluencerData(
//                             req.getRequest,
//                             requireRedirectUrl,
//                             requiredJourneyStep,
//                             dispatch
//                         )
//                     );
//                 }
//             })
//             .catch(console.log);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [location.pathname]);
//     return (
//         <Switch>
//             <Route exact path={"/library"} component={Library} />
//             <Route
//                 exact
//                 path={"/video"}
//                 component={() => (
//                     <VideoPlayer
//                         videoSrc={
//                             "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
//                         }
//                         videoType={"video/mp4"}
//                     />
//                 )}
//             />
//             <Route exact path={"/login"} component={LoginPage} />
//             <Route exact path={"/signup"} component={SignUpPage} />
//             <Route exact path={"/fb/login"} component={FbLogin} />
//             <Route exact path={"/"} component={LP} />
//             <Route
//                 exact
//                 path={"/components-testing"}
//                 component={ComponentsTesting}
//             />
//             <Route
//                 path="/influencer/onboarding/:influencerPage"
//                 component={InfluencerOnboarding}
//             />
//             <Route exact path={"/success"} component={SuccessPage} />
//             <Route component={ErrorPage} />
//         </Switch>
//     );
// };
