import styled from "styled-components";
import { fontSizing, colors, fontFamilies } from "../../../../config";

export const Paragraph = styled.section`
  padding: 6px 0;
  font-family: ${props => props.fontFamily || fontFamilies.serif};
  line-height: 1.5;
  text-align: ${props => props.justified ? "justify" : "start"};
  color: ${props => props.color || colors.charColor};
  ${props => {
    if (props.fontSizeType) {
      return fontSizing(props.fontSizeType)
    } else {
      return fontSizing("body")
    }
  }}
`