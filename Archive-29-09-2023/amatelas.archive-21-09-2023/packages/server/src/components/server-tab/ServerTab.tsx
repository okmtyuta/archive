import { ReactNode } from 'react'
import styles from './server-tab.module.scss'

interface ServerTabProps {
  label: string
  name: string
  children?: ReactNode
  defaultChecked?: boolean
}

export const ServerTab = (props: ServerTabProps) => {
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

interface ServerTabItem {
  label: string
  content: ReactNode
  defaultChecked?: boolean
}

interface ServerTabsProps {
  tabs: ServerTabItem[]
}

export const ServerTabs = (props: ServerTabsProps) => {
  const inputName = crypto.randomUUID()
  return (
    <div className={styles['tabs']}>
      {props.tabs.map((tab) => {
        return (
          <ServerTab name={inputName} label={tab.label} defaultChecked={tab.defaultChecked}>
            {tab.content}
          </ServerTab>
        )
      })}
    </div>
  )
}
