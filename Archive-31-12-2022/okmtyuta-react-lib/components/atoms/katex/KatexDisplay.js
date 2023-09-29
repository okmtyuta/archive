import styled, { css } from "styled-components";
import { colors } from "../../../config";

export const KatexDisplay = styled.section`
  overflow: scroll;
  color: ${props => props.color || colors.charColor};
  ${(props) => {
    if (props.paper) {
      return css`box-shadow: 0 2px 3px #777;`
    }
  }}
  &::-webkit-scrollbar {
    display: none;
  }
  padding: ${props => props.padding || "0"};
  margin: ${props => props.margin || "0"};

  ${(props) => {
    if (props.forKatex) {
      return css`
      > .katex-display > .katex > .katex-html > .base:last-child {
        padding-right: ${props => props.padding || "0"};
      }
      `
    }
  }}
`