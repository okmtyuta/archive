import styled from "styled-components";
import colors from "../../../config/colors";
import { fontSizing } from "../../../config/fonts";
import IStyled, { extendIStyled } from "../IStyled";

export interface SLinkProps extends IStyled {}

export const SLink = styled.a<SLinkProps>`
  ${extendIStyled()}
  &:hover {
    color: ${colors.themeColor};
  }
`;
