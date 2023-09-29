import { TextArea } from '@amatelas/server'
import { Markdown } from '../..'
import { useState } from 'react'
import styles from './preview.module.scss'

export const Preview = () => {
  const [markdown, setMarkdown] = useState<string>('')
  return (
    <div className={styles['preview']}>
      <TextArea
        className={styles['textarea']}
        onChange={(event) => {
          const value = event.target.value
          setMarkdown(value)
        }}
      />
      <div className={styles['textarea']}>
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  )
}
