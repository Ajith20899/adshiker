import styled from "styled-components";

export const CardIcon = styled.img`
    height: 100%;
    width: 100%;
    image-orientation: from-image;
    border-radius: 50%;
`;

export const ComponentsWrapper = styled.div`
    padding: 40px;
    display: grid;
    flex-direction: column;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

export const ComponentBlock = styled.div`
    position: relative;
    padding: 0px 0px 2px;
    display: flex;
    flex-direction: column;
`;

export const TextView = styled.div<{
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    opacity?: number;
}>`
    font-size: ${(p) => p.fontSize || "14px"};
    font-weight: ${(p) => p.fontWeight || "500"};
    color: ${(p) => p.color || "#FFF"};
    opacity: ${(p) => p.opacity || 1.0};
`;

export const DivWrapper = styled.div<{
    flexDirection?: string;
    height?: string;
    alignItems?: string;
    marginLeft?: string;
    justify?: string;
}>`
    display: flex;
    flex-direction: ${(p) => p.flexDirection};
    height: ${(p) => p.height};
    align-items: ${(p) => p.alignItems};
    marginleft: ${(p) => p.marginLeft};
    ${(p) => p.justify && `justify-content: ${p.justify};`}
`;
