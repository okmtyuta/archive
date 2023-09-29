import { ReactNode } from 'react'
import { AmatelasBaseProps } from '../../types'
import { AnimatedAccordion } from './variant/animated-accordion/AnimatedAccordion'
import { StaticAccordion } from './variant/static-accordion/StaticAccordion'

type Variant = 'static' | 'animated'

interface AccordionProps extends AmatelasBaseProps {
  label: ReactNode
  variant?: Variant
}

export const Accordion = (props: AccordionProps) => {
  // const checkBoxId = crypto.randomUUID()
  // return (
  //   <div className={styles['accordion']}>
  //     <input className={styles['input']} id={checkBoxId} type="checkbox" />
  //     <label className={styles['head']} htmlFor={checkBoxId}>
  //       <span className={styles['head-inner']}>
  //         <span>{props.label}</span>
  //         <span className={styles['head-icon']}>
  //           <ExpandMore />
  //         </span>
  //       </span>
  //     </label>
  //     <div className={styles['content']}>{props.children}</div>
  //   </div>
  // )

  if (props.variant === 'animated') {
    return <AnimatedAccordion label={props.label}>{props.children}</AnimatedAccordion>
  }

  return <StaticAccordion label={props.label}>{props.children}</StaticAccordion>
}
