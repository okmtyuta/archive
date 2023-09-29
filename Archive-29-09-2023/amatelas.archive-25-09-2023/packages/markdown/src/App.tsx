import { Frame } from '@amatelas/server'
import { Preview } from './components/preview/Preview'

export const App = () => {
  return (
    <Frame>
      <Preview />
      {/* <Markdown>{markdown}</Markdown> */}
    </Frame>
  )
}
