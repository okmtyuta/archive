import styled from "styled-components";
import { colors } from "../../config";

export const Link = styled.a`
  font-family: ${props => props.fontFamily || "inherit"};
  color: ${(props) => props.color || "inherit"};
  text-decoration: none;
  transition: all .3s;

  &:hover {
    color: ${colors.themeColor}
  }
`