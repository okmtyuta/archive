import { useState } from "react";
import { ulid } from "ulid";
import { Browser } from "../components/browser/Browser";
import { SFlexContainer } from "../components/styled/container";
import { SH5, SParagraph } from "../components/styled/document";
import { SButton } from "../components/styled/input";
import colors from "../config/colors";
import {
  FirstVision,
  FourthVision,
  InitialVision,
  SecondVision,
  ThirdVision,
} from "./Visions";

export const PastVision = () => {
  const [visionIndex, setVisionIndex] = useState<number>(0);
  const visions = [
    {
      title: "初めてのHTML",
      component: <InitialVision />,
      createdAt: "2020-04",
      explanations: ["大学に入学して大学に入学して大学に入学して大学に入学して大学に入学して大学に入学して大学に入学して大学に入学して大学に入学して大学に入学して大学に入学して大学に入学して"],
    },
    {
      title: "モダンHTML",
      component: <FirstVision />,
      createdAt: "2020-04",
      explanations: ["初めてHTMLを触りました。"],
    },
    {
      title: "はじめてのCSS",
      component: <SecondVision />,
      createdAt: "2020-04",
      explanations: ["初めてHTMLを触りました。"],
    },
    {
      title: "リッチページ",
      component: <ThirdVision />,
      createdAt: "2020-04",
      explanations: ["初めてHTMLを触りました。"],
    },
    {
      title: "アニメーション",
      component: <FourthVision />,
      createdAt: "2020-04",
      explanations: ["初めてHTMLを触りました。"],
    },
  ];
  const visionNum = visions.length - 1;

  return (
    <div>
      <SFlexContainer justify="space-between">
        <SButton
          width="100px"
          color={visionIndex !== 0 ? colors.themeColor : colors.white}
          backgroundColor={
            visionIndex !== 0 ? colors.white : colors.backgroundLightGray
          }
          isHovering={visionIndex !== 0}
          isActive={visionIndex !== 0}
          hoveredBackgroundColor={colors.themeColor}
          hoveredColor={colors.white}
          border={
            visionIndex !== 0
              ? `${colors.themeColor} 1px solid`
              : `${colors.backgroundLightGray} 1px solid`
          }
          transition=".2s"
          borderRadius="4px"
          padding="4px"
          onClick={() => {
            if (visionIndex !== 0) {
              setVisionIndex(visionIndex - 1);
            }
          }}
        >
          Back
        </SButton>
        <SButton
          width="100px"
          color={visionIndex < visionNum ? colors.themeColor : colors.white}
          backgroundColor={
            visionIndex < visionNum ? colors.white : colors.backgroundLightGray
          }
          isHovering={visionIndex < visionNum}
          isActive={visionIndex < visionNum}
          hoveredBackgroundColor={colors.themeColor}
          hoveredColor={colors.white}
          border={
            visionIndex < visionNum
              ? `${colors.themeColor} 1px solid`
              : `${colors.backgroundLightGray} 1px solid`
          }
          transition=".2s"
          borderRadius="4px"
          padding="4px"
          onClick={() => {
            if (visionIndex < visionNum) {
              setVisionIndex(visionIndex + 1);
            }
          }}
        >
          Next
        </SButton>
      </SFlexContainer>

      <SFlexContainer justify="center">
        <SH5>{visions[visionIndex].title}</SH5>
      </SFlexContainer>

      <Browser>{visions[visionIndex].component}</Browser>

      {visions[visionIndex].explanations.map((explanation => {
        return (
          <SParagraph padding="10px 0" key={ulid()}>
            {explanation}
          </SParagraph>
        )
      }))}
    </div>
  );
};
