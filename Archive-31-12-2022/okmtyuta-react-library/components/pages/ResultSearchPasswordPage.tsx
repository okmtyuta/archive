import { SAbsoluteWrapper } from "../parts/styled/SAbsoluteWrapper";
import { SWrapper } from "../parts/styled/SWrapper";
import { SButton } from "../parts/styled/SButton";
import colors from "../../config/colors";
import { TitledTextField } from "../templates/TextFields/TitledTextField";
import { SList } from "../parts/styled/SList";
import { SListItem } from "../parts/styled/SListItem";
import { SLink } from "../parts/styled/SLink";

export const ResultSearchPasswordPage = () => {
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
          パスワードの再設定リンクを送信いたしました。
        </SWrapper>
        <SWrapper fontSize="16px" margin="0 0 4% 0">
          宛先の受信箱をご確認ください。
        </SWrapper>

        <SList
          margin="0 0 7% 0"
          fontSize="12px"
          color={colors.lightCharColor}
          direction="row"
          justify="space-between"
        >
          <SListItem>
            <SLink href="">Topへ戻る</SLink>
          </SListItem>
          <SListItem>
            <SLink href="">届かない場合はこちら</SLink>
          </SListItem>
        </SList>
      </SAbsoluteWrapper>
    </SWrapper>
  );
};
