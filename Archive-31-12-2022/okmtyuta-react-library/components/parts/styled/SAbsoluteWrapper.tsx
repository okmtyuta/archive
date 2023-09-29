import styled, { css } from "styled-components";
import { StylingInterface } from "./interface";
import colors from "../../../config/colors";
import fonts from "../../../config/fonts";

interface AbsoluteWrapperProps extends StylingInterface {
  width?: string;
  height?: string;
  positionLeft?: string;
  positionTop?: string;
}

export const SAbsoluteWrapper = styled.div<AbsoluteWrapperProps>`
  box-sizing: border-box;
  position: absolute;

  font-family: ${fonts.fontFamilies.sansSerif};
  background: ${(props) => props.backgroundColor || "inherit"};
  color: ${(props) => props.color || colors.charColor};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};

  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};

  ${(props) => {
    if (props.positionLeft === "center") {
      return css`
        left: 50%;
        transform: translateX(-50%);
      `;
    } else {
      return css`
        left: ${props.positionLeft};
      `;
    }
  }}
  ${(props) => {
    if (props.positionTop === "center") {
      return css`
        top: 50%;
        transform: translateY(-50%);
      `;
    } else {
      return css`
        top: ${props.positionTop};
      `;
    }
  }}
`;
