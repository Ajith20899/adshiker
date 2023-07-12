import Auth from "@aws-amplify/auth";
import Amplify from "@aws-amplify/core";
import Credentials from "@services/config/awsCredentials";

Amplify.configure(Credentials);

export const signIn = (phoneNumber: string, callback: Function) => {
    Auth.signIn(phoneNumber)
        .then((result) => {
            callback(null, result);
        })
        .catch((e) => {
            callback(e, null);
        });
};

export const signUp = (
    phoneNumber: string,
    type: string,
    callback: Function
) => {
    Auth.signUp({
        username: phoneNumber,
        password: randPassword(2, 3, 3, 2),
        attributes: {
            "custom:user_type": type,
        },
    })
        .then((res: any) => {
            callback(null, res);
        })
        .catch((e) => {
            callback(e, null);
        });
};

export const otpVerification = (
    session: any,
    otp: string,
    callback: Function
) => {
    Auth.sendCustomChallengeAnswer(session, otp)
        .then((res) => {
            callback(null, res);
        })
        .catch((e) => {
            callback(e, null);
        });
};

function randPassword(
    upperCase: number,
    lowerCase: number,
    numbers: number,
    special: number
) {
    var chars = [
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // upperCase
        "abcdefghijklmnopqrstuvwxyz", // lowerCase
        "0123456789", // numbers
        "!\"#$%&'()*<=>?@_`{|}~", // special
    ];

    return [upperCase, lowerCase, numbers, special]
        .map((len, i) =>
            Array(len)
                .fill(chars[i])
                .map((x) => x[Math.floor(Math.random() * x.length)])
                .join("")
        )
        .concat()
        .join("")
        .split("")
        .sort(() => 0.5 - Math.random())
        .join("");
}
