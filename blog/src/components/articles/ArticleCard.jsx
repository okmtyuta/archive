import { ulid } from 'ulid'
import { fontFamilies, urlToTags } from '../../config'
import { List, Link, Wrapper, Paragraph } from "../prototypes"

export const ArticleCard = (props) => {
  return (
    <Wrapper margin="16px 0">
      <Wrapper fontSizeType="subBody" justify="flex-start">
        {props.datePosted}
      </Wrapper>
      <Wrapper fontSizeType="thirdHeadline" margin="3px 0">
        <Link href={props.linkTo}>
          {props.title}
        </Link>
      </Wrapper>
      <Wrapper deleteOn="sp">
        <Paragraph fontSizeType="subBody" fontFamily={fontFamilies.sansSerif} justified={true}>
          {props.description}
        </Paragraph>
      </Wrapper>
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
  )
}