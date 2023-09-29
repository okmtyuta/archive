// ////  ////
// import { AmatelasBaseProps } from '@src/types/AmatelasBaseProps'
// import styles from './button.module.scss'
// import { classNames } from '@amatelas/tools'
// import { ComponentProps } from 'react'

// type Variant = 'standard' | 'outlined' | 'filled'
// type Color = 'text' | 'danger' | 'info' | 'success' | 'warning'

// type DefaultSpanProps = ComponentProps<'span'>

// interface LinkableButtonProps extends AmatelasBaseProps, DefaultSpanProps {
//   variant?: Variant
//   color?: Color
// }

// const getTextAreaVariantClass = (variant?: Variant) => {
//   if (variant) {
//     return styles[`${variant}-button`]
//   }

//   return styles['outlined-button']
// }
// const getColorClass = (color?: Color) => {
//   if (color) {
//     return styles[`${color}`]
//   }

//   return styles['text']
// }

// export const LinkableButton = ({ variant, color, children, ...props }: LinkableButtonProps) => {
//   const variantClass = getTextAreaVariantClass(variant)
//   const colorClass = getColorClass(color)

//   return (
//     <span {...props} className={classNames(styles['button'], variantClass, colorClass)}>
//       {children}
//     </span>
//   )
// }
