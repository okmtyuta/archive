// import { AmatelasBaseProps } from '../../types'
import styles from './switch.module.scss'

// interface SwitchProps extends AmatelasBaseProps {}

// export const Switch = (props: SwitchProps) => {
export const Switch = () => {
  const checkBoxId = crypto.randomUUID()
  return (
    <div className={styles['switchArea']}>
      <input type="checkbox" className={styles['switch1']} id={checkBoxId} />
      <label className={styles['background-label']} />

      <label className={styles['label']} htmlFor={checkBoxId} />
      <label className={styles['swImg']} htmlFor={checkBoxId} />
    </div>
  )
}
