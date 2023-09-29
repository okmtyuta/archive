import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'
import styles from './quote.module.scss'

interface QuoteProps extends AmatelasBaseProps {}

export const Quote = (props: QuoteProps) => {
  return <blockquote className={styles['quote']}>{props.children}</blockquote>
}
