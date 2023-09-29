import styles from './title.module.scss'
import { Avatar } from '../avatar/Avatar'
import { Link } from '../link/Link'
import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'

interface Author {
  name: string
  href: string
  account: string
}

interface TitleProps extends AmatelasBaseProps {
  posted?: string
  modified?: string
  authors?: Author[]
}

interface AuthorsProps {
  authors?: Author[]
}

const Authors = (props: AuthorsProps) => {
  if (!props.authors || props.authors.length === 0) {
    return null
  }

  return (
    <>
      <div className={styles['posted-by-label']}>Posted by</div>
      <div className={styles['authors']}>
        {props.authors.map((author) => {
          return (
            <Link key={crypto.randomUUID()} href={author.href}>
              <Avatar name={author.name} account={author.account} />
            </Link>
          )
        })}
      </div>
    </>
  )
}

export const Title = (props: TitleProps) => {
  return (
    <div className={styles['title']}>
      {props.posted != null && (
        <div className={styles.posted}>{props.posted}</div>
      )}
      <h1 className={styles['title-label']}>{props.children}</h1>

      <Authors authors={props.authors} />
    </div>
  )
}
