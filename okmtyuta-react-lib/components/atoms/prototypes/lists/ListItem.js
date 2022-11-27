import styled from "styled-components";
import { colors, fontFamilies } from "../../../../config";

export const ListItem = styled.li`
  font-family: ${props => props.fontFamily || fontFamilies.sansSerif};

  color: ${(props) => {
    if (props.filled) {
      return "white";
    } else {
      return props.color || colors.charColor;
    }
  }};
`