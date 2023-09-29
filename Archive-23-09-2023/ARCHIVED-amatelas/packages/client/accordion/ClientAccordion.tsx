'use client'
import { ReactNode, useRef, useState } from 'react'
import { AmatelasBaseProps } from '../types'

import styled, { css } from 'styled-components'
import { color } from '../../frontend-utils/src'

// interface ClientAccordionTheme {

// }

interface ClientAccordionProps extends AmatelasBaseProps {
  label: ReactNode
}

interface AccordionOutsideProps {
  theme: {
    isShow: boolean
  }
}

const AccordionOutside = styled.div<AccordionOutsideProps>`
  position: relative;
  width: 100%;
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: white;
  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  ${(props) => {
    if (props.theme.isShow) {
      return css`
        box-shadow:
          rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
          rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
        // margin-bottom: 12px;
      `
    }
  }}
  ${(props) => {
    if (!props.theme.isShow) {
      return css`
        &:not(:first-child)::before {
          position: absolute;
          left: 0px;
          top: -1px;
          right: 0px;
          height: 1px;
          content: '';
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.12);
        }
      `
    }
  }} // &:not(:first-child)::before {
  //   position: absolute;
  //   left: 0px;
  //   top: -1px;
  //   right: 0px;
  //   height: 1px;
  //   content: '';
  //   opacity: 1;
  //   background-color: rgba(0, 0, 0, 0.12);
  // }
`

interface ContentProps {
  theme: {
    height: number
    isShow: boolean
  }
}

const AccordionContent = styled.div<ContentProps>`
  height: 0;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.5s;
  padding: 0 10px;

  ${(props) => {
    if (props.theme.isShow) {
      return css`
        height: ${props.theme.height}px;
        padding: 10px;
      `
    }
  }}
`

const AccordionInput = styled.input`
  display: none;
`

const AccordionHead = styled.label`
  cursor: pointer;
  display: block;
  color: ${color.suoh};
  padding: 10px;
`

const AccordionHeadInner = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const AccordionHeadIcon = styled.span`
  display: block;
  position: relative;
  transition: transform 0.25s;
  fill: ${color.suoh};
  display: flex;
  ${(props) => {
    if (props.theme.isShow) {
      return css`
        transform: rotate(-180deg);
      `
    }
  }}
`

export const ClientAccordion = (props: ClientAccordionProps) => {
  const checkBoxId = crypto.randomUUID()
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
    <AccordionOutside theme={{ isShow: isShowContent }}>
      <AccordionInput id={checkBoxId} type="checkbox" />

      <AccordionHead onClick={onClickAccordionHead} htmlFor={checkBoxId}>
        <AccordionHeadInner>
          <span>{props.label}</span>
          <AccordionHeadIcon theme={{ isShow: isShowContent }}>
            {/* <ExpandMore /> */}
          </AccordionHeadIcon>
        </AccordionHeadInner>
      </AccordionHead>

      <AccordionContent
        theme={{
          isShow: isShowContent,
          height: contentHeight
        }}
      >
        <div ref={contentRef}>{props.children}</div>
      </AccordionContent>
    </AccordionOutside>
  )
}
