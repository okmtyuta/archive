import { ReactNode } from "react";
import styled from "styled-components";
import IStyled from "../styled/IStyled";
import fonts from "../../config/fonts";
import colors from "../../config/colors";
import { SFlexContainer } from "../styled/container/SFlexContainer";
import { SingleFrame } from "../styled/frame";

interface BaseStyledProps extends IStyled {}

const BaseStyled = styled.div<BaseStyledProps>`
  color: ${colors.charColor};
  background-color: ${colors.backgroundLightGray};
  font-family: ${fonts.fontFamilies.sansSerifJa};
  min-height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
`;

interface BaseProps {
  children: ReactNode;
}

export const Base = (props: BaseProps) => {
  return (
    <BaseStyled>
      <SFlexContainer
        padding="20px"
        fontSizeType="h1"
        color={colors.themeColor}
        fontFamily={fonts.fontFamilies.frederica}
        justify="center"
      >
        PastVision
      </SFlexContainer>
      <SingleFrame>{props.children}</SingleFrame>
    </BaseStyled>
  );
};

export default Base;
