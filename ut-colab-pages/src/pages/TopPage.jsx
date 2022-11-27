import { Wrapper, SingleFrame, Paragraph, Main, Body, RouterLinkWrapper } from "../okmtyuta-react-lib/components";
import { colors } from "../okmtyuta-react-lib/config";

import { Header } from "../parts/Header";
import { Footer } from "../parts/Footer";

import { Link as RouterLink } from "react-router-dom";

export const TopPage = () => {
  return (
    <Body>
      <Header />

      <Main>
        <Wrapper align="center" fontSizeType="title" fontFamily="anton" color={colors.themeColor}>
          Welcome!!
        </Wrapper>

        <SingleFrame>
          <Paragraph textAlign="center">
            I am okmtyuta, an application engineer. Here is my official page. 
          </Paragraph>
          <Paragraph textAlign="center">
            If you want my info, you can visit <RouterLinkWrapper color={colors.thirdThemeColor} animation="underlineFromLeft"><RouterLink to="/links/">Links</RouterLink></RouterLinkWrapper> page firstly.
          </Paragraph>
        </SingleFrame>
      </Main>

      <Footer />
    </Body>
  )
}