import '@theme/reset.css'
import '@amatelas/server/index.css'
import '@amatelas/markdown/index.css'
import { Frame, Heading } from '@amatelas/server'
import { TextField } from './components/text-field/TextField'
import { Alerts } from './components/alert/Alerts'
import { useState } from 'react'

type AlertVariant = 'info' | 'danger' | 'warning' | 'success'
type AlertSource = {
  id: string
  variant: AlertVariant
  message: string
}

export const App = () => {
  const [alerts, setAlerts] = useState<AlertSource[]>([
    {
      id: '1',
      variant: 'info',
      message:
        '記事の作成に失敗しました。時間を置いて再投稿してください。記事の作成に失敗し'
    },
    {
      id: '2',
      variant: 'danger',
      message: '記事の作成に成功しました。おめでとう！'
    },
    {
      id: '3',
      variant: 'danger',
      message: 'やるじゃん？'
    }
  ])
  return (
    <>
      <Frame>
        <div>this is metric!!</div>
        <Heading>TextField</Heading>
        <Alerts setAlerts={setAlerts} alerts={alerts} />
        <TextField
          onChange={() => {
            console.log('change')
          }}
          name="name"
          placeholder="client-text-field"
        />
        <button
          onClick={() => {
            setAlerts((prev) => {
              return [
                ...prev,
                {
                  id: crypto.randomUUID(),
                  variant: 'danger',
                  message: 'submission failed'
                }
              ]
            })
          }}
        >
          Submit
        </button>
      </Frame>
    </>
  )
}
