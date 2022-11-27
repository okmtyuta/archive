import { STextField } from "../../parts/styled/STextField";
import { SFlexWrapper } from "../../parts/styled/SFlexWrapper";
import { SWrapper } from "../../parts/styled/SWrapper";

interface TitledTextFieldProps {
  margin?: string;
  gap?: string;

  titleFontSize?: string;
  titleColor?: string;
  title?: string;

  textFieldPadding?: string;
  textFieldType?: string;

  placeholder?: string;
}

export const TitledTextField = (props: TitledTextFieldProps) => {
  return (
    <SFlexWrapper gap={props.gap} direction="column" margin={props.margin}>
      {props.title ? (
        <SWrapper color={props.titleColor} fontSize={props.titleFontSize}>
          {props.title}
        </SWrapper>
      ) : (
        <></>
      )}
      <STextField type={props.textFieldType || "text"} padding={props.textFieldPadding} placeholder={props.placeholder} />
    </SFlexWrapper>
  );
};
