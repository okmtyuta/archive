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
import { ArticleCard } from "../okmtyuta-react-lib/components/molecules/articles/ArticleCard";

export const ArticleListPage = () => {
  return (
    <Body>
      <NostHeader />

      <Main>

        <SingleFrame>
          <ArticleCard
            datePosted="28th October 2022"
            title="東京大学大学院創造情報学専攻の入試問題を解説したかった話"
            to="/ex/2022"
            description="創造情報学専攻2022の入試問題を解説します。"
            tags={["入試問題解説", "創造情報学専攻"]}
          />
          
        </SingleFrame>
      </Main>

      <NostFooter />
    </Body>
  )
}