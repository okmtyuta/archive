import styled from "styled-components";
import { fontFamilies, colors } from "../../config";

export const Body = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template:
      "header"    160px
      "main"      1fr
      "footer"    auto/
      100%;
  width: 100%;
  color: ${colors.charColor}
  font-family: ${fontFamilies.serif}
`