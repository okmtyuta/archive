import { colors } from "../okmtyuta-react-lib/config";
import { Wrapper } from "../okmtyuta-react-lib/components/atoms/prototypes/wrappers/Wrapper";
import { SingleFrame } from "../okmtyuta-react-lib/components/atoms/prototypes/frames/SingleFrame";
import { Paragraph } from "../okmtyuta-react-lib/components/atoms/prototypes/paragraph/Paragraph";
import { Main } from "../okmtyuta-react-lib/components/parts/main";
import { Body } from "../okmtyuta-react-lib/components/parts/body";
import { RouterLinkWrapper } from "../okmtyuta-react-lib/components/atoms/prototypes/wrappers/RouterLinkWrapper";

import { NostHeader } from "../okmtyuta-react-lib/components/molecules/nost/NostHeader";
import { NostFooter } from "../okmtyuta-react-lib/components/molecules/nost/NostFooter";

import { Link as RouterLink } from "react-router-dom";

export const TopPage = () => {
  return (
    <Body>
      <NostHeader />

      <Main>
        <Wrapper align="center" fontSizeType="title" fontFamily="anton" color={colors.themeColor}>
          Welcome!!
        </Wrapper>

        <SingleFrame>
          <Paragraph textAlign="center">
            I am okmtyuta, an application engineer. Here is my official page. My profile is available on  <RouterLinkWrapper color={colors.thirdThemeColor} animation="underlineFromLeft"><RouterLink to="/profile/">Profile</RouterLink></RouterLinkWrapper>.
          </Paragraph>
          <Paragraph textAlign="center">
            If you want my info more, you can visit <RouterLinkWrapper color={colors.thirdThemeColor} animation="underlineFromLeft"><RouterLink to="/links/">Links</RouterLink></RouterLinkWrapper> page firstly.
          </Paragraph>
        </SingleFrame>
      </Main>

      <NostFooter />
    </Body>
  )
}