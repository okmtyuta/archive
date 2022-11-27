import styled from "styled-components";
import { colors } from "../../../../config"

export const SingleFrame = styled.section`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1024px;
  color: ${props => props.color || colors.charColor};
`