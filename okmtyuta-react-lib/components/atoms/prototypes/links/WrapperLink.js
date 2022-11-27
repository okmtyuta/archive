import styled from "styled-components";
import { fontFamilies, colors, fontSizing } from "../../../../config";

export const WrapperLink = styled.a`
  border: black 1px solid;
  display: flex;
  justify-content: ${props => {
      return props.justify || "center";
    }};
  align-items: ${props => {
      return props.align || "center";
  }};

  padding: ${props => props.padding || "0"};
  margin: ${props => props.margin || "0"};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "auto"};

  ${props => {
    return fontSizing(props.fontSizeType || "body")
  }}
  color: ${props => props.color || colors.charColor};
  font-family: ${props => props.fontFamily || fontFamilies.sansSerif};
`