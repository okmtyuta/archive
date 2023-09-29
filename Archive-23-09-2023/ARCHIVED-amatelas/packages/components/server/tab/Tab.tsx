import { ReactNode } from 'react'
import styles from './tab.module.scss'

interface TabProps {
  label: string
  name: string
  children?: ReactNode
  defaultChecked?: boolean
}

export const Tab = (props: TabProps) => {
  const inputId = crypto.randomUUID()
  return (
    <div className={styles['tab']}>
      <label htmlFor={inputId} className={styles['label']}>
        {props.label}
      </label>
      <input
        name={props.name}
        type="radio"
        id={inputId}
        className={styles['input']}
        defaultChecked={props.defaultChecked}
      />
      <div className={styles['content']}>{props.children}</div>
    </div>
  )
}

interface TabItem {
  label: string
  content: ReactNode
  defaultChecked?: boolean
}

interface TabsProps {
  tabs: TabItem[]
}

export const Tabs = (props: TabsProps) => {
  const inputName = crypto.randomUUID()
  return (
    <div className={styles['tabs']}>
      {props.tabs.map((tab) => {
        return (
          <Tab name={inputName} label={tab.label} defaultChecked={tab.defaultChecked}>
            {tab.content}
          </Tab>
        )
      })}
    </div>
  )
}
