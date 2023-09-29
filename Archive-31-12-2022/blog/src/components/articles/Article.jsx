import { useEffect, useState } from "react";
import { ulid } from "ulid";
import { Wrapper, Paragraph, List, ListItem,NavFrame, NavFrameMain, NavFrameNav, Link, Headline } from "../../components"
import { urlToTags, fontFamilies, colors } from "../../config";
import { omitString } from "../../js/utils";

import LinkIcon from '@mui/icons-material/Link';

export const ArticleMain = (props) => {
  return (
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
            if (tag in urlToTags) {
              return (
                <li key={ulid()}>
                  <Link  href={urlToTags[tag]}>
                    #{tag}
                  </Link>
                </li>
              )
            } else {
              return (
                <li key={ulid()}>#{tag}</li>
              )
            }
          })}
        </List>
      </Wrapper>
      
      <Wrapper>

        {props.contents.map((content) => {
          if (content["headline"]) {
            return (
              <div key={ulid()}>
                <Headline id={content.id} fontSizeType="thirdHeadline" margin="18px 0 6px 0">
                  {content.headline}
                </Headline>
                <Paragraph fontFamily={fontFamilies.sansSerif} justified={true}>
                  {content.text}
                </Paragraph>
              </div>
            )
          } else {
            return (
              <Paragraph key={ulid()} fontFamily={fontFamilies.sansSerif} justified={true}>
                {content.text}
              </Paragraph>
            )
          }
        })}

      </Wrapper>
      
    </Wrapper>
  )
}

export const ArticleNav = (props) => {
  return (
    <Wrapper margin="16px 0">
      <Wrapper fontSizeType="thirdHeadline" margin="3px 0" color={colors.themeColor} fontWeight="bold">
        Contents
      </Wrapper>

      <List gap="4px">
        {props.contents.map((content) => {
          if (content.headline) {
            return (
              <ListItem key={ulid()}>
                <Link href={`#${content.id}`}>
                  {omitString(content.headline, 16)}
                </Link>
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
      
    </Wrapper>
  )
}

export const Article = (props) => {
  const [contents, setContents] = useState(props.contents.map((content, index) => {
    if (index === 0) {
      return {
        "headline": content["headline"],
        "text": content["text"],
        "id": ulid(),
        "isActive": true
      }
    } else {
      return {
        "headline": content["headline"],
        "text": content["text"],
        "id": ulid(),
        "isActive": false
      }
    }
  }))

  const isScrolled = () => {
    let isDone = false
    setContents(
      contents.map((content) => {
        if (content.headline === false) {
          return content
        } 
        let item = document.getElementById(content["id"])
        if (item.getBoundingClientRect().bottom >= 0 && !isDone) {
          isDone = true
          return {
            "headline": content["headline"],
            "text": content["text"],
            "id": content["id"],
            "isActive": true
          }
        } else {
          return {
            "headline": content["headline"],
            "text": content["text"],
            "id": content["id"],
            "isActive": false
          }
        }
      })
    )
  }

  useEffect(() => {
    window.addEventListener('scroll', isScrolled);
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
                if (tag in urlToTags) {
                  return (
                    <li key={ulid()}>
                      <Link  href={urlToTags[tag]}>
                        #{tag}
                      </Link>
                    </li>
                  )
                } else {
                  return (
                    <li key={ulid()}>#{tag}</li>
                  )
                }
              })}
            </List>
          </Wrapper>        
        <Wrapper>

          {contents.map((content) => {
            if (content["headline"]) {
              return (
                <div key={ulid()}>
                  <Wrapper id={content.id}>
                    <Headline fontSizeType="thirdHeadline" margin="18px 0 6px 0">
                      {content.headline}
                    </Headline>
                    <Paragraph fontFamily={fontFamilies.sansSerif} justified={true}>
                      {content.text}
                    </Paragraph>
                  </Wrapper>
                </div>
              )
            } else {
              return (
                <Paragraph key={ulid()} fontFamily={fontFamilies.sansSerif} justified={true}>
                  {content.text}
                </Paragraph>
              )
            }
          })}

        </Wrapper>
        
        </Wrapper>

        <LinkIcon />

      </NavFrameMain>

      <NavFrameNav>
        <Wrapper isFollow={true}>
          <Wrapper margin="16px 0">

            <Wrapper fontSizeType="thirdHeadline" margin="3px 0" color={colors.themeColor} fontWeight="bold">
              Contents
            </Wrapper>

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
        
          </Wrapper>
        </Wrapper>
      </NavFrameNav>
    </NavFrame>
  )
}