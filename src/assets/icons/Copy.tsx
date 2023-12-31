import React from "react";

interface CopyPropsI {
    width?: string;
    height?: string;
    fill?: string;
}

export function Copy(props: CopyPropsI) {
    const { width, height, fill } = props;

    return (
        <svg
            version="1.1"
            width={width || "100%"}
            height={height || "100%"}
            x="0"
            y="0"
            viewBox="0 0 512 512"
        >
            <g>
                <path
                    d="m186.667969 416c-49.984375 0-90.667969-40.683594-90.667969-90.667969v-218.664062h-37.332031c-32.363281 0-58.667969 26.300781-58.667969 58.664062v288c0 32.363281 26.304688 58.667969 58.667969 58.667969h266.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-37.332031zm0 0"
                    fill={fill || "#ffffff"}
                    data-original="#000000"
                />
                <path
                    d="m469.332031 58.667969c0-32.40625-26.261719-58.667969-58.664062-58.667969h-224c-32.40625 0-58.667969 26.261719-58.667969 58.667969v266.664062c0 32.40625 26.261719 58.667969 58.667969 58.667969h224c32.402343 0 58.664062-26.261719 58.664062-58.667969zm0 0"
                    fill={fill || "#ffffff"}
                    data-original="#000000"
                />
            </g>
        </svg>
    );
}
