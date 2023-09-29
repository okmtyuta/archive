import { List, ListItem, Paragraph, Typography } from '@amatelas/server'
import styles from './post-list-item.module.scss'
interface PostListItemProps {
  title?: string
  index?: string[]
  posted?: string
  description?: string
}

export const PostListItem = (props: PostListItemProps) => {
  return (
    <div className={styles['post-list-item']}>
      <Typography fontSize="caption" color="text">
        {props.posted}
      </Typography>
      <h1 className={styles['title']}>{props.title}</h1>
      <Paragraph>{props.description}</Paragraph>
      <List>
        {props.index?.map((heading) => {
          return <ListItem>{heading}</ListItem>
        })}
      </List>
    </div>
  )
}
