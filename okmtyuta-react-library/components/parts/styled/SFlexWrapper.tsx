import styled from "styled-components";
import { StylingInterface } from "./interface";
import colors from "../../../config/colors";
import fonts from "../../../config/fonts";
import { FlexAlignTypes, FlexDirectionTypes, FlexJustifyTypes } from "./config/types";

interface SFlexWrapperProps extends StylingInterface {
  align?: FlexAlignTypes;
  justify?: FlexJustifyTypes;
  direction?: FlexDirectionTypes;
  gap?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
}

export const SFlexWrapper = styled.div<SFlexWrapperProps>`
  box-sizing: border-box;
  font-family: ${fonts.fontFamilies.sansSerif};
  background: ${(props) => props.backgroundColor || "inherit"};
  color: ${(props) => props.color || colors.charColor};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  display: flex;

  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  min-height: ${(props) => props.minHeight || "auto"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0"};
`;
