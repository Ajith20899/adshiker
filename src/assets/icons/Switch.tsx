import React from "react";

interface SwitchPropsI {
    width?: string;
    height?: string;
    fill?: string;
}

export function Switch(props: SwitchPropsI) {
    const { width, height, fill } = props;

    return (
        <svg
            version="1.0"
            width={width || "100%"}
            height={height || "100%"}
            viewBox="0 0 200.000000 200.000000"
            preserveAspectRatio="xMidYMid meet"
        >
            <g
                transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                fill={fill || "#104f9a"}
                stroke="none"
            >
                <path
                    d="M465 1781 c-62 -28 -115 -104 -115 -166 0 -32 25 -90 53 -122 75 -86
                    199 -85 274 0 87 99 53 240 -69 292 -49 20 -94 19 -143 -4z"
                />
                <path
                    d="M1116 1621 c-16 -17 -18 -27 -10 -49 8 -22 20 -29 69 -42 80 -22 119
                    -43 170 -95 43 -42 81 -102 72 -112 -3 -2 -14 0 -25 6 -33 18 -60 13 -78 -14
                    -15 -23 -15 -27 -1 -49 20 -29 157 -106 191 -106 27 0 42 18 94 112 34 61 40
                    96 20 116 -19 19 -66 15 -80 -7 -10 -17 -15 -14 -45 38 -65 110 -199 204 -310
                    218 -41 4 -51 2 -67 -16z"
                />
                <path
                    d="M418 1387 c-134 -38 -208 -148 -208 -310 0 -29 5 -58 12 -65 9 -9 94
                    -12 319 -12 262 0 308 2 319 15 9 11 11 38 7 94 -8 130 -56 209 -153 257 -46
                    23 -72 28 -152 31 -61 2 -115 -2 -144 -10z"
                />
                <path
                    d="M1385 981 c-62 -28 -115 -104 -115 -166 0 -32 25 -90 53 -122 75 -86
                    199 -85 274 0 87 99 53 240 -69 292 -49 20 -94 19 -143 -4z"
                />
                <path
                    d="M458 823 c-28 -33 -88 -154 -88 -176 0 -13 5 -28 12 -35 19 -19 66
                    -15 80 7 10 17 15 14 45 -38 61 -101 137 -163 248 -201 74 -25 107 -25 130 0
                    15 16 17 26 9 48 -8 22 -20 29 -69 42 -80 22 -119 43 -170 95 -42 42 -81 102
                    -72 111 2 3 16 -1 30 -7 54 -25 104 45 60 83 -35 29 -152 88 -176 88 -13 0
                    -31 -8 -39 -17z"
                />
                <path
                    d="M1340 587 c-99 -28 -166 -94 -195 -190 -18 -61 -20 -168 -3 -185 9
                    -9 94 -12 319 -12 262 0 308 2 319 15 9 11 11 38 7 94 -8 130 -56 209 -153
                    257 -46 23 -72 28 -152 31 -59 2 -115 -2 -142 -10z"
                />
            </g>
        </svg>
    );
}
