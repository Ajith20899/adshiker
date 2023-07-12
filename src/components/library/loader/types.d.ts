export interface SpinLoaderI {
    width?: string;
    height?: string;
    styles?: string;
    className?: string;
}

export interface DotGatheringI extends SpinLoaderI {
    bgColor?: string;
}

export interface DotTypingI extends DotGatheringI {}

export type GoogleLoaderT = {
    width: string;
    height: string;
    strokeWidth?: string;
    color?: string;
    theme?: string;
};
