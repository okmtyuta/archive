// Refer to https://mui.com/material-ui/react-progress/

import { AmatelasBaseProps } from '@src/types/AmatelasBaseProps'
import styles from './progress.module.scss'
import { classNames } from '@amatelas/tools'

type ProgressVariant = 'info' | 'danger' | 'warning' | 'success'

interface ProgressProps extends AmatelasBaseProps {
  variant?: ProgressVariant
}

const getProgressVariantClass = (variant?: ProgressVariant) => {
  if (variant) {
    return styles[variant]
  }

  return styles['info']
}

export const Progress = (props: ProgressProps) => {
  const progressVariantClass = getProgressVariantClass(props.variant)

  return (
    <span className={classNames(styles['progress'], progressVariantClass)}>
      <svg className={styles['svg']} viewBox="22 22 44 44">
        <circle
          className={styles['circle']}
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth="3.6"
        ></circle>
      </svg>
    </span>
  )
}
