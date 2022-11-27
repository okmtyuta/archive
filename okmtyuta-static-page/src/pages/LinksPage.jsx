import { colors } from "../okmtyuta-react-lib/config";

import { Link } from "../okmtyuta-react-lib/components/atoms/prototypes/links/Link";
import { List } from "../okmtyuta-react-lib/components/atoms/prototypes/lists/List";
import { ListItem } from "../okmtyuta-react-lib/components/atoms/prototypes/lists/ListItem";
import { Article } from "../okmtyuta-react-lib/components/molecules/articles/Article";
import { Paragraph } from "../okmtyuta-react-lib/components/atoms/prototypes/paragraph/Paragraph";
import { Body } from "../okmtyuta-react-lib/components/parts/body";
import { NostHeader } from "../okmtyuta-react-lib/components/molecules/nost/NostHeader";
import { NostFooter } from "../okmtyuta-react-lib/components/molecules/nost/NostFooter";

export const LinksPage = () => {
  return (
    <Body>
      <NostHeader />

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

      <NostFooter />
    </Body>
  )
}