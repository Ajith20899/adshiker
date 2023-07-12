import styled, { keyframes } from "styled-components";

const ZoomOut = keyframes`
  0%{
    transform: scale(0.8);
    opacity: 0;
  }
  100%{
    transform: scale(1);
    opacity: 1;
  }
`;

const FadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const SlideUp = keyframes`
	0%{
		transform: translateY(200px);
    	opacity: 0;
	}
	100%{
		transform: translateY(0);
    	opacity: 1;
	}
`;

export const ModalBody = styled.div<{
    showModal: boolean;
    fullPage?: boolean;
    bottomModal?: boolean;
    closing?: boolean;
    styles?: string;
}>`
    display: ${(props) => (props.showModal ? "grid" : "none")};
    align-items: center;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    background: ${(props) =>
        props.fullPage ? "var(--appBlack)" : "rgb(0 0 0 / 62%)"};
    width: 100%;
    height: 100%;
    overflow: ${(props) => (props.fullPage ? "auto" : "hidden")};
    animation: ${(props) => (props.bottomModal ? FadeIn : ZoomOut)} 0.25s ease;
    opacity: ${(props) => (props.closing ? "0" : 1)};
    transition: all 0.3s ease;
    ${(props) => props.styles};

    & > img:nth-child(1) {
        height: ${(props) => (props.fullPage ? "20px" : "15px")};
        width: ${(props) => (props.fullPage ? "20px" : "15px")};
    }
`;

export const ModalContent = styled.div<{
    width?: string;
    height?: string;
    maxWidth?: string;
    fullPage?: boolean;
    bottomModal?: boolean;
    dark?: boolean;
    closing?: boolean;
}>`
    margin: 0px auto;
    width: ${(props) => (props.fullPage ? "100%" : props.width || "280px")};
    height: ${(props) => (props.fullPage ? "100%" : props.height || "50%")};
    max-width: ${(props) => props.maxWidth || "100%"};
    position: relative;
    animation: ${(props) => (props.bottomModal ? SlideUp : ZoomOut)} 0.25s ease;
    padding: ${(props) => (props.fullPage ? "20px" : "25px 20px 20px 20px")};
    border-radius: 12px;
    overflow: auto;
    background: ${(props) => (props.dark ? "var(--appBlack)" : "#fff")};
    transform: ${(props) =>
        props.closing
            ? props.bottomModal
                ? "translateY(100%)"
                : "scale(0)"
            : null};
    transition: ${(props) => (props.fullPage ? "all 0.25s ease" : "none")};

    & > img:nth-child(1) {
        height: ${(props) => (props.fullPage ? "20px" : "15px")};
        width: ${(props) => (props.fullPage ? "20px" : "15px")};
    }
    &::-webkit-scrollbar {
        width: 6px !important;
    }

    @media (max-width: 700px) {
        width: 100%;
        border-radius: ${(props) =>
            props.fullPage ? "0" : props.bottomModal ? "20px 20px 0 0" : "8px"};
        ${(props) =>
            props.bottomModal ? `position: absolute; bottom: 0;` : ``};
        ${(props) =>
            !props.fullPage &&
            `
            &:before {
                content: "";
                width: 40px;
                height: 5px;
                border-radius: 25px;
                position: fixed;
                left: 50%;
                margin-top: -10px;
                transform: translateX(-50%);
                background: #000;
            }
        `}
        transition: ${(props) => (props.fullPage ? "all 0.25s ease" : "none")};
    }
`;

export const Heading = styled.div`
    font-weight: bold;
    font-size: 20px;
    padding: 0 40px 0 0;
`;

export const ShadowSpan = styled.span`
    position: absolute;
    pointer-events: none;
    z-index: -1;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    left: 1px;
    top: 1px;
    border: 2px solid var(--colorSpanBorder);
    border-radius: 40px;
    opacity: 0;
    box-shadow: inset 10px 10px 20px var(--darkLeftLinear),
        inset -10px -10px 20px var(--darkRightLinear);
    transition: opacity 0.4s;
`;

export const IconWrapper = styled.div<{
    fullPage?: boolean;
    iconPosition?: string;
    bottomModal?: boolean;
    dark?: boolean;
    width?: string;
    maxWidth?: string;
}>`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${(props) =>
        props.dark
            ? `
                top: 16px;
                right: 16px;
                height: 40px;
                width: 40px;
                padding: 6px;
                border-radius: 50px;
                background: linear-gradient(
                    165deg,
                    var(--darkRightLinear),
                    var(--darkLeftLinear)
                );
                box-shadow: 6px 6px 13px var(--darkShadow),
                    -6px -6px 13px var(--lightShadow), inset 2px 2px 6px var(--lightShadow),
                    inset -2px -2px 6px #111213;
                &:active ${ShadowSpan} {
                    opacity: 1;
                }
    `
            : `
            ${
                props.iconPosition ||
                `margin: -15px 0 0 calc(${
                    props.width || props.maxWidth || "100%"
                } - 45px);`
            }
    `}
    & > svg {
        height: 15px;
        width: 15px;
    }
    @media (max-width: 700px) {
        ${(props) =>
            props.fullPage
                ? `
                height: 35px;
                width: 35px;
                `
                : `
                margin: -15px 0 0 calc(100% - 48px);
                `}
    }
`;

export const CloseIcon = styled.img`
    width: 13px;
`;
