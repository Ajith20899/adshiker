const Credential = {
    Auth: {
        mandatorySignIn: false,
        region: process.env.AWS_REGION,
        userPoolId: process.env.AWS_USER_POOL_ID,
        userPoolWebClientId: process.env.AWS_CLIENT_ID,
    },
    Analytics: {
        disabled: true,
    },
};

export default Credential;
