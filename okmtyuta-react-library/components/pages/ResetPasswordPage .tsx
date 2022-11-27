import { SAbsoluteWrapper } from "../parts/styled/SAbsoluteWrapper";
import { SWrapper } from "../parts/styled/SWrapper";
import { SButton } from "../parts/styled/SButton";
import colors from "../../config/colors";
import { TitledTextField } from "../templates/TextFields/TitledTextField";
import { SList } from "../parts/styled/SList";
import { SListItem } from "../parts/styled/SListItem";
import { SLink } from "../parts/styled/SLink";

export const ResetPasswordPage = () => {
  return (
    <SWrapper minHeight="100vh">
      <SAbsoluteWrapper
        // height="60%"
        width="45%"
        backgroundColor={colors.backgroundGray}
        positionTop="20%"
        positionLeft="center"
        padding="3% 7% 6% 7%"
      >
        <SWrapper margin="0 0 3% 0" fontSize="24px">
          パスワードを再設定
        </SWrapper>
        <SWrapper margin="0 0 4% 0">
          再設定するパスワードを入力してください。
        </SWrapper>
        <TitledTextField
          margin="0 0 4% 0"
          gap="8px"
          textFieldPadding="20px 10px"
          title="パスワード"
          placeholder="*数字、英小文字、英大文字、記号から、2種以上を含む。"
        />

        <SButton
          backgroundColor={colors.buttonBlue}
          color={colors.whiteCharColor}
          textAlign="center"
          width="100%"
          padding="20px 10px"
          margin="0 0 7% 0"
        >
          送信
        </SButton>
        <SList fontSize="12px" gap="16px" direction="row">
          <SListItem>
            <SLink color={colors.annotationCharColor} href="#">
              パスワードを探す
            </SLink>
          </SListItem>

          <SListItem>
            <SLink color={colors.annotationCharColor} href="#">
              アカウント登録について
            </SLink>
          </SListItem>
        </SList>
      </SAbsoluteWrapper>
    </SWrapper>
  );
};
