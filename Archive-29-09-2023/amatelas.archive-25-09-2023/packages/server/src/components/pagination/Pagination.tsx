import { NavigationNextSVG, classNames } from '@amatelas/tools'
import styles from './pagination.module.scss'
import { Link } from '../link/Link'
import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'

interface PaginationProps extends AmatelasBaseProps {
  next?: {
    label: string
    href: string
  }
  previous?: {
    label: string
    href: string
  }
}

interface PaginatingNavigationProps {
  label: string
  variant: 'previous' | 'next'
  href: string
}

const getPaginationClass = (props: PaginationProps) => {
  if (props.next && props.previous) {
    return 'pagination-both'
  } else if (props.next) {
    return 'pagination-only-next'
  } else if (props.previous) {
    return 'pagination-only-previous'
  }

  return 'pagination-none'
}

const PaginatingNavigation = (props: PaginatingNavigationProps) => {
  if (props.variant === 'next') {
    return (
      <Link className={styles['next']} href={props.href}>
        <div>
          <div className={styles['next-caption']}>next</div>
          <div className={styles['next-label']}>
            <div>{props.label}</div>
            <NavigationNextSVG className={styles['navigation-next']} />
          </div>
        </div>
      </Link>
    )
  }

  if (props.variant === 'previous') {
    return (
      <Link className={styles['previous']} href={props.href}>
        <div>
          <div className={styles['previous-caption']}>previous</div>
          <div className={styles['previous-label']}>
            <NavigationNextSVG className={styles['navigation-previous']} />
            <div>{props.label}</div>
          </div>
        </div>
      </Link>
    )
  }
}

export const Pagination = (props: PaginationProps) => {
  const paginationClass = getPaginationClass(props)
  return (
    <div
      className={classNames(
        styles['pagination'],
        styles[paginationClass],
        props.className
      )}
    >
      {props.previous ? (
        <PaginatingNavigation
          variant="previous"
          label={props.previous.label}
          href={props.previous.href}
        />
      ) : (
        <div />
      )}

      {props.next ? (
        <PaginatingNavigation
          variant="next"
          label={props.next.label}
          href={props.next.href}
        />
      ) : (
        <div />
      )}
    </div>
  )
}
