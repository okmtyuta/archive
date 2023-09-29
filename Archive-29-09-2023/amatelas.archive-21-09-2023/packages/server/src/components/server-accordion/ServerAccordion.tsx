import { ReactNode } from 'react'
import { AmatelasBaseProps } from '../types'
import { ServerActiveAccordion } from './variant/ServerActiveAccordion'
import { ServerDisabledAccordion } from './variant/ServerDisabledAccordion'

interface ServerAccordionProps extends AmatelasBaseProps {
  label: ReactNode
  disabled?: boolean
}

export const ServerAccordion = (props: ServerAccordionProps) => {
  if (props.disabled) {
    return <ServerDisabledAccordion label={props.label}>{props.children}</ServerDisabledAccordion>
  }
  return <ServerActiveAccordion label={props.label}>{props.children}</ServerActiveAccordion>
}
