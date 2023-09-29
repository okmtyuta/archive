import styles from './common.module.scss'

export type Width = 'full' | '100' | '75' | '50' | '25'

export const getWidthClass = (width?: Width) => {
  if (width) {
    return styles[`width-${width}`]
  }

  return styles['width-full']
}
