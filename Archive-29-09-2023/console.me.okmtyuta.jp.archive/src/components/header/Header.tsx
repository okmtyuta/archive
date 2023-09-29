import { Typography, Link, Sticky } from '@okmtyuta/amatelas/server'
import styles from './header.module.css'

export const Header = () => {
  return (
    <Sticky position="top" className={styles['header']}>
      <div className={styles['header-content']}>
        <Link href="/">
          <Typography fontFamily="anton">okmtyuta console</Typography>
        </Link>
      </div>
    </Sticky>
  )
}
