import { Highlight } from '../../../..'
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles['footer']}>
      <span className={styles['designed-by']}>Designed by</span>&nbsp; <Highlight>okmtyuta</Highlight>
    </div>
  )
}
