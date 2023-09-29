import { Link, List, ListItem, Headline, Wrapper, Article, SingleFrame, Paragraph, Body } from "../okmtyuta-react-lib/components";
import { colors } from "../okmtyuta-react-lib/config";

import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";

export const LinksPage = () => {
  return (
    <Body>
      <Header />

        <Article
          title="リンク集"
          author="okmtyuta"
          tags={["links", "adm"]}
          datePosted="2022.10.23"
          contents={[
            {
              headline: false,
              content: (
                <List gap="10px">
                  <ListItem>
                    <Link animation="underlineFromLeft" hoveredColor={colors.thirdThemeColor} color={colors.thirdThemeColor} href="https://github.com/okmtyuta">
                      GitHub
                    </Link>
                    <Paragraph>
                      Discover my products source code on GitHub. Moreover, My detailed profile is available on GitHub Profile Page. Let us check it out!!
                    </Paragraph>
                  </ListItem>

                  <ListItem>
                    <Link animation="underlineFromLeft" hoveredColor={colors.thirdThemeColor} color={colors.thirdThemeColor} href="https://www.linkedin.com/in/okmtyuta/">
                      LinkedIn
                    </Link>
                    <Paragraph>
                      I do not know what is LikedIn, but I resister.
                    </Paragraph>
                  </ListItem>
                  
                  <ListItem>
                    <Link animation="underlineFromLeft" hoveredColor={colors.thirdThemeColor} color={colors.thirdThemeColor} href="https://twitter.com/okmtyuta">
                      Twitter
                    </Link>
                    <Paragraph>
                      I will tweet my latest info.
                    </Paragraph>
                  </ListItem>
                </List>
              )
            }
          ]}
        />

      <Footer />
    </Body>
  )
}