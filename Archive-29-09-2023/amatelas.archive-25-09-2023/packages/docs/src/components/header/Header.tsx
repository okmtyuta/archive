import { Sticky, Typography } from '@amatelas/server'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <Sticky position="top" className={styles['header']}>
      <div className={styles['header-content']}>
        <Typography color="primary" fontFamily="anton">
          AmatelasUI
        </Typography>
      </div>
    </Sticky>
  )
}
