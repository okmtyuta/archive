import styled from "styled-components";
import { colors, fontSizing} from "../../../../config";

export const Headline = styled.div`
  font-size: ${props => fontSizing(props.fontSizeType || "body")};
  padding: 0.4em 0.5em;
  color: ${colors.themeColor};
  border-left: solid 5px ${colors.themeColor};
  margin: ${props => props.margin || "0"};
`
