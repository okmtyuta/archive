import { ReactNode } from "react";
import styled from "styled-components";

interface BrowserStyledProps {}

const BrowserStyled = styled.div<BrowserStyledProps>`
  background-color: white;
  margin: 10px 0;
  padding 2px;
  overflow-y: scroll;
  height: 500px;
`;

interface BrowserProps {
  children: ReactNode;
}

export const Browser = (props: BrowserProps) => {
  return <BrowserStyled>{props.children}</BrowserStyled>;
};
