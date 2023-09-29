import styled from "styled-components";
import { colors } from "../../../config/colors";
import fonts from "../../../config/fonts";
import { TextAlignTypes } from "./config/types";
import { StylingInterface } from "./interface";

interface SButtonProps extends StylingInterface {
  textAlign?: TextAlignTypes;
  width?: string;
  height?: string;
}

export const SButton = styled.button<SButtonProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 10px;
  transition: all 0.3s;

  font-family: ${fonts.fontFamilies.sansSerif};
  background: ${(props) => props.backgroundColor || "inherit"};
  color: ${(props) => props.color || colors.charColor};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  text-align: ${(props) => props.textAlign || "left"};

  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;
