import { ulid } from 'ulid';
import { fontFamilies } from '../../../config';
import { List } from '../../atoms/prototypes/lists/List';
import { Link } from '../../atoms/prototypes/links/Link';
import { RouterLink } from '../../atoms/prototypes/links/RouterLink'
import { Wrapper } from '../../atoms/prototypes/wrappers/Wrapper';
import { Paragraph } from '../../atoms/prototypes/paragraph/Paragraph';

export const ArticleCard = (props) => {
  return (
    <Wrapper margin="16px 0">
      <Wrapper fontSizeType="subBody" justify="flex-start">
        {props.datePosted}
      </Wrapper>
      <Wrapper fontSizeType="thirdHeadline" margin="3px 0">
        <RouterLink to={props.to}>
          {props.title}
        </RouterLink>
      </Wrapper>
      <Wrapper deleteOn="sp">
        <Paragraph fontSizeType="subBody" fontFamily={fontFamilies.sansSerif} justified={true}>
          {props.description}
        </Paragraph>
      </Wrapper>
      <List direction="row" gap="8px">
        {props.tags.map((tag) => {
          return (
            <li key={ulid()}>#{tag}</li>
          )
        })}
      </List>
    </Wrapper>
  )
}