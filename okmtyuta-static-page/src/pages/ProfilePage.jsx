import { colors } from "../okmtyuta-react-lib/config";

import { Article } from "../okmtyuta-react-lib/components/molecules/articles/Article";
import { Paragraph } from "../okmtyuta-react-lib/components/atoms/prototypes/paragraph/Paragraph";
import { Body } from "../okmtyuta-react-lib/components/parts/body";
import { NostHeader } from "../okmtyuta-react-lib/components/molecules/nost/NostHeader";
import { NostFooter } from "../okmtyuta-react-lib/components/molecules/nost/NostFooter";
import { RouterLink } from "../okmtyuta-react-lib/components/atoms/prototypes/links/RouterLink";
import { Headline } from "../okmtyuta-react-lib/components/atoms/prototypes/headlines/Headline";
import { Wrapper } from "../okmtyuta-react-lib/components/atoms/prototypes/wrappers/Wrapper";

export const ProfilePage = () => {
  return (
    <Body>
      <NostHeader />

        <Article
          title="Profile"
          author="okmtyuta"
          tags={[]}
          datePosted="2022.10.23"
          contents={[
            {
              headline: false,
              content: (
                <Paragraph>
                  From Kumamoto, Japan. Undergraduate student of Department of Mathematics, Faculty of Science, The University of Tokyo. Current main developments are a web application with Django and React, and 2D game with Unity. Programming language experiences are Python, Rust, and Javascript. I am currently interested in general design other than programming. TOEFL score 70.
                </Paragraph>
              )
            },
            {
              headline: false,
              content: (
                <Wrapper>
                  <RouterLink animation="underlineFromLeft" hoveredColor={colors.thirdThemeColor} color={colors.thirdThemeColor} to="/resume">
                    Resume
                  </RouterLink>
                </Wrapper>
              )
            }
          ]}
        />

      <NostFooter />
    </Body>
  )
}