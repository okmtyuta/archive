import styles from './header.module.scss'
import githubIcon from '../../assets/icon/github.png'
import youtubeIcon from '../../assets/icon/youtube.png'
import zennLogo from '../../assets/icon/zenn-logo.svg'
import { Link } from '../../../..'

export const Header = () => {
  return (
    <div className={styles['outside']}>
      <div className={styles.header}>
        <Link href="/">
          <div className={`${styles.left}`}>Amatelas UI</div>
        </Link>
        {/* <div className={styles.center}>center</div> */}
        <div className={styles.right}>
          <Link href="https://github.com/okmtyuta">
            <img className={styles['github-icon']} src={githubIcon} alt="GitHub" />
          </Link>
          <Link href="https://youtube.com/@okmtyuta">
            <img className={styles['youtube-icon']} src={youtubeIcon} alt="YouTube" />
          </Link>
          <Link href="https://zenn.dev/okmtyuta">
            <img className={styles['zenn-icon']} src={zennLogo} alt="Zenn" />
          </Link>
        </div>
      </div>
    </div>
  )
}
