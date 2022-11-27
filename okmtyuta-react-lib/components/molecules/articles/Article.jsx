import { useEffect, useState } from "react";
import { ulid } from "ulid";
import { colors } from "../../../config";
import { omitString } from "../../../js/utils";
import { Wrapper } from "../../atoms/prototypes/wrappers/Wrapper";
import { List } from "../../atoms/prototypes/lists/List";
import { ListItem } from "../../atoms/prototypes/lists/ListItem";
import { NavFrame } from "../../atoms/prototypes/frames/NavFrame";
import { NavFrameMain } from "../../atoms/prototypes/frames/NavFrame";
import { NavFrameNav } from "../../atoms/prototypes/frames/NavFrame";
import { Link } from "../../atoms/prototypes/links/Link";
import { Headline } from "../../atoms/prototypes/headlines/Headline";

// 以下は無効化中です。
// export const ArticleMain = (props) => {
//   return (
//     <Wrapper margin="16px 0">
//       <Wrapper fontSizeType="subBody" justify="flex-start">
//         {props.datePosted}
//       </Wrapper>
//       <Wrapper fontSizeType="firstHeadline" margin="3px 0" color={colors.themeColor} fontWeight="bold">
//         {props.title}
//       </Wrapper>
//       <Wrapper marin="6px 0">
//         by {props.author}
//       </Wrapper>
//       <Wrapper margin="6px 0 24px 0">
//         <List direction="row" gap="8px">
//           {props.tags.map((tag) => {
//             if (tag in urlToTags) {
//               return (
//                 <li key={ulid()}>
//                   <Link  href={urlToTags[tag]}>
//                     #{tag}
//                   </Link>
//                 </li>
//               )
//             } else {
//               return (
//                 <li key={ulid()}>#{tag}</li>
//               )
//             }
//           })}
//         </List>
//       </Wrapper>
      
//       <Wrapper>

//         {props.contents.map((content) => {
//           if (content["headline"]) {
//             return (
//               <div key={ulid()}>
//                 <Headline id={content.id} fontSizeType="thirdHeadline" margin="18px 0 6px 0">
//                   {content.headline}
//                 </Headline>
//                 <Paragraph fontFamily={fontFamilies.sansSerif} justified={true}>
//                   {content.content}
//                 </Paragraph>
//               </div>
//             )
//           } else {
//             return (
//               <Paragraph key={ulid()} fontFamily={fontFamilies.sansSerif} justified={true}>
//                 {content.content}
//               </Paragraph>
//             )
//           }
//         })}

//       </Wrapper>
      
//     </Wrapper>
//   )
// }

// export const ArticleNav = (props) => {
//   return (
//     <Wrapper margin="16px 0">
//       <Wrapper fontSizeType="thirdHeadline" margin="3px 0" color={colors.themeColor} fontWeight="bold">
//         Contents
//       </Wrapper>

//       <List gap="4px">
//         {props.contents.map((content) => {
//           if (content.headline) {
//             return (
//               <ListItem key={ulid()}>
//                 <Link href={`#${content.id}`}>
//                   {omitString(content.headline, 16)}
//                 </Link>
//               </ListItem>
//             )
//           } else {
//             return (
//               <ListItem key={ulid()}>

//               </ListItem>
//             )
//           }
//         })}
//       </List>
      
//     </Wrapper>
//   )
// }

/**
 * Article作成のためのコンポーネント
 * @param { {headline, content} } contents Article内に実際に描画する内容。{headline, contents}の形式。headlineをtrueにすると見出しが挿入され、目次が作成される。contentはReactのコンポーネントを入れる。
 * @param { string } title Articleのタイトル。
 * @param { string } author Articleの作者。
 * @param { [string] } tags Articleのタグ。リスト形式。
 * @param { string } datePosted Articleの作成日時。一般にyyyy.mm.ddの形式とする。
 */
export const Article = (props) => {
  // contentsを初期化する。目次にリンクを貼るためのidと目次をハイライトするかのbooleanを追加している。
  const [contents, setContents] = useState(props.contents.map((content, index) => {
    if (index === 0) {
      return {
        headline: content.headline,
        content: content.content,
        id: ulid(),
        isActive: true
      }
    } else {
      return {
        headline: content.headline,
        content: content.content,
        id: ulid(),
        isActive: false
      }
    }
  }))

  // ハイライトされる目次を制御する。
  const activateIndex = () => {
    let isDone = false
    setContents(
      contents.map((content) => {
        if (content.headline === false) {
          return content
        } 
        let item = document.getElementById(content["id"])
        if (item.getBoundingClientRect().bottom >= 0 && !isDone) {
          // 下のコードを有効にすると"現在最も上にある段落"の目次をハイライトする。無効にすれば"画面に表示されている段落"の目次をハイライトする。
          // isDone = true
          return {
            headline: content.headline,
            content: content.content,
            id: content.id,
            isActive: true
          }
        } else {
          return {
            headline: content.headline,
            content: content.content,
            id: content.id,
            isActive: false
          }
        }
      })
    )
  }

  // スクロールを確認したらactivateIndexを起動するようにする。
  useEffect(() => {
    activateIndex()
    // window.addEventListener('scroll', activateIndex);
  }, [])

  return (
    <NavFrame onlyLeftOn={["sp", "tab"]} gridRatios={["5fr", "2fr"]}>
      <NavFrameMain>
        <Wrapper margin="16px 0">
          <Wrapper fontSizeType="subBody" justify="flex-start">
            {props.datePosted}
          </Wrapper>
          <Wrapper fontSizeType="firstHeadline" margin="3px 0" color={colors.themeColor} fontWeight="bold">
            {props.title}
          </Wrapper>
          <Wrapper marin="6px 0">
            by {props.author}
          </Wrapper>
          <Wrapper margin="6px 0 24px 0">
            <List direction="row" gap="8px">
              {props.tags.map((tag) => {
                return (
                  <li key={ulid()}>#{tag}</li>
                )
              })}
            </List>
          </Wrapper>        
        <Wrapper>

        <List>
          {contents.map((content) => {
            if (content.headline) {
              return (
                <ListItem key={ulid()} id={content.id}>
                  <Headline fontSizeType="thirdHeadline" margin="18px 0 6px 0">
                    {content.headline}
                  </Headline>
                  <Wrapper>
                    {content.content}
                  </Wrapper>
                </ListItem>
              )
            } else {
              return (
                <ListItem id={content.id} key={ulid()}>
                  {content.content}
                </ListItem>
              );
            }
          })}
        </List>

        </Wrapper>
        
        </Wrapper>

      </NavFrameMain>

      <NavFrameNav>
        <Wrapper isFollow={true}>
          <Wrapper margin="16px 0">

            {contents.filter((content) => content.headline).length > 0 ? (
              <Wrapper fontSizeType="thirdHeadline" margin="3px 0" color={colors.themeColor} fontWeight="bold">
                Contents
              </Wrapper>
            ) : (
              <div></div>
            )}

            <List gap="4px">
              {contents.map((content) => {
                if (content.headline) {
                  return (
                    <ListItem key={ulid()}>
                      <Wrapper isActive={content.isActive}>
                        <Link href={`#${content.id}`}>
                          {omitString(content.headline, 16)}
                        </Link>
                      </Wrapper>
                    </ListItem>
                  )
                } else {
                  return (
                    <ListItem key={ulid()}>

                    </ListItem>
                  )
                }
              })}
            </List>

            <div>
              TODO: ここに広告
            </div>
        
          </Wrapper>
        </Wrapper>
      </NavFrameNav>
    </NavFrame>
  )
}