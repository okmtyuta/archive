import { SAbsoluteWrapper } from "../parts/styled/SAbsoluteWrapper";
import { SWrapper } from "../parts/styled/SWrapper";
import { SButton } from "../parts/styled/SButton";
import colors from "../../config/colors";
import { TitledTextField } from "../templates/TextFields/TitledTextField";
import { SList } from "../parts/styled/SList";
import { SListItem } from "../parts/styled/SListItem";
import { SLink } from "../parts/styled/SLink";

export const SearchPasswordPage = () => {
  const isNotRegisteredPassword: boolean = true;
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
          パスワードを探す
        </SWrapper>
        <SWrapper margin="0 0 4% 0">
          社内用のメールアドレスを入力してください
        </SWrapper>
        <TitledTextField
          gap="8px"
          textFieldPadding="20px 10px"
          title="メールアドレス"
          placeholder="社内用のメールアドレスを入力してください"
        />

        {isNotRegisteredPassword ? (
          <SWrapper margin="2% 0 0 0" color={colors.warningCharColor}>
            *登録されていないメールアドレスです。
          </SWrapper>
        ) : (
          <></>
        )}

        <SButton
          backgroundColor={colors.buttonBlue}
          color={colors.whiteCharColor}
          textAlign="center"
          width="100%"
          padding="20px 10px"
          margin="4% 0 7% 0"
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
