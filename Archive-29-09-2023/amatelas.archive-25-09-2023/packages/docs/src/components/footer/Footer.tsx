import { Space, Typography } from '@amatelas/server'
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      Designed by
      <Space />
      <Typography color="primary" fontFamily="anton">
        okmtyuta
      </Typography>
    </footer>
  )
}
