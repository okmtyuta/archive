import { ReactNode, useId, useRef, useState } from 'react'
import { ExpandMore } from '@amatelas/shared/svg/ExpandMore'
import { AmatelasBaseProps } from '../types'
import {
  ClientAccordionContent,
  ClientAccordionHead,
  ClientAccordionHeadIcon,
  ClientAccordionHeadInner,
  ClientAccordionInput,
  ClientAccordionOutside
} from './parts'

interface ClientAccordionProps extends AmatelasBaseProps {
  label: ReactNode
  disabled?: boolean
}

export const ClientAccordion = (props: ClientAccordionProps) => {
  const checkBoxId = useId()
  const [contentHeight, setContentHeight] = useState<number>(0)
  const [isShowContent, setIsShowContent] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const onClickAccordionHead = () => {
    if (contentRef.current) {
      const height = contentRef.current.clientHeight
      setContentHeight(height)
      setIsShowContent((prev) => {
        return !prev
      })
    }
  }

  return (
    <ClientAccordionOutside theme={{ isShow: isShowContent }}>
      <ClientAccordionInput id={checkBoxId} type="checkbox" />

      <ClientAccordionHead onClick={onClickAccordionHead} htmlFor={checkBoxId}>
        <ClientAccordionHeadInner>
          <span>{props.label}</span>
          <ClientAccordionHeadIcon theme={{ isShow: isShowContent }}>
            <ExpandMore />
          </ClientAccordionHeadIcon>
        </ClientAccordionHeadInner>
      </ClientAccordionHead>

      <ClientAccordionContent
        theme={{
          isShow: isShowContent,
          height: contentHeight
        }}
      >
        <div ref={contentRef}>{props.children}</div>
      </ClientAccordionContent>
    </ClientAccordionOutside>
  )
}
