import { SAbsoluteWrapper } from "../parts/styled/SAbsoluteWrapper";
import { SWrapper } from "../parts/styled/SWrapper";
import { SButton } from "../parts/styled/SButton";
import colors from "../../config/colors";
import { TitledTextField } from "../templates/TextFields/TitledTextField";
import { SList } from "../parts/styled/SList";
import { SListItem } from "../parts/styled/SListItem";
import { SLink } from "../parts/styled/SLink";

export const AboutRegisterPage = () => {
  return (
    <SWrapper minHeight="100vh">
      <SAbsoluteWrapper
        // height="60%"
        width="47%"
        backgroundColor={colors.backgroundGray}
        positionTop="20%"
        positionLeft="center"
        padding="3% 7% 6% 7%"
      >
        <SWrapper margin="0 0 3% 0" fontSize="24px">
          会員登録について
        </SWrapper>
        <SWrapper fontSize="12px" margin="0 0 4% 0">
          お客様の所属会社の管理者が発送した招待メールを通してのみ会員登録が可能です。
        </SWrapper>

        <SList
          margin="0 0 7% 0"
          gap="12px"
          fontSize="12px"
          color={colors.lightCharColor}
        >
          <SListItem>
            ・メールの受信箱から'SelectBook'を検索してください
          </SListItem>
          <SListItem>
            ・受信箱で見当たらない場合は、迷惑メールをご確認ください。
          </SListItem>
          <SListItem>
            ・招待メールが発送されていない場合は、所属会社の管理者までお問合せください。
          </SListItem>
        </SList>

        <SWrapper fontSize="12px"><SLink color={colors.annotationCharColor} href="#">
          Topに戻る</SLink></SWrapper>
      </SAbsoluteWrapper>
    </SWrapper>
  );
};
