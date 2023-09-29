import styled, { css } from "styled-components";
import { colors, fontFamilies } from "../../../../config";

export const List = styled.ul`
  font-family: ${props => props.fontFamily || fontFamilies.sansSerif};

  color: ${(props) => props.color || colors.charColor};

  list-style: ${props => props.listStyle || "none"};
  
  ${props => {
    if (props.direction === "row") {
      return css`
        display: flex;
        flex-direction: row;
      `} else {
      return css`
        display: flex;
        flex-direction: column;
      `}
  }};

  gap: ${props => props.gap || "0"};
`