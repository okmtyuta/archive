import styled from "styled-components";
import { StylingInterface } from "./interface";
import colors from "../../../config/colors";
import fonts from "../../../config/fonts";
import { FlexAlignTypes, FlexJustifyTypes } from "./config/types";

interface SWrapperProps extends StylingInterface {
  align?: FlexAlignTypes;
  justify?: FlexJustifyTypes;
  width?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  position?: string;
}

export const SWrapper = styled.div<SWrapperProps>`
  box-sizing: border-box;
  font-size: ${props => props.fontSize || "16px"};
  font-family: ${fonts.fontFamilies.sansSerif};
  background: ${(props) => props.backgroundColor || "inherit"};
  color: ${(props) => props.color || colors.charColor};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};

  width: ${(props) => props.width || "auto"};
  height: ${props => props.height || "auto"};
  min-height: ${props => props.minHeight || "auto"};
  max-height: ${props => props.maxHeight || "inherit"};
  position: ${props => props.position || "relative"};

`;
