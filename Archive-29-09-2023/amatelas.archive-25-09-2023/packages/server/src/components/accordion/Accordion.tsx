import { ComponentProps, ReactNode } from 'react'

import styles from './accordion.module.scss'
import { ExpandMoreSVG, classNames } from '@amatelas/tools'
import { Paragraph } from '../paragraph/Paragraph'

type DetailsDefaultProps = ComponentProps<'details'>

interface AccordionProps extends DetailsDefaultProps {
  summary: ReactNode
}

export const Accordion = ({ summary, children, ...props }: AccordionProps) => {
  return (
    <details
      {...props}
      className={classNames(styles['accordion'], props.className)}
    >
      <summary className={styles['summary']}>
        {summary} <ExpandMoreSVG className={styles['expand-more-svg']} />
      </summary>
      <Paragraph>{children}</Paragraph>
    </details>
  )
}
