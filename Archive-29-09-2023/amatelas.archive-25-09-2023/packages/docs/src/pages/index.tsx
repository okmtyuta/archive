import '@theme/reset.css'

import {
  Frame,
  Heading,
  Alert,
  Skeleton,
  Progress,
  Select,
  Accordion
} from '@amatelas/server'
import '@amatelas/server/index.css'

export const Index = () => {
  return (
    <>
      <Frame className="frame">
        <Heading>Recently Added</Heading>

        <Heading type="h3">Accordion</Heading>
        <Accordion summary="Accordion Menu">
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages,
          and apps. [from React.dev]
        </Accordion>

        <Heading type="h3">Progress</Heading>
        <Progress variant="danger" />
        <Progress variant="info" />
        <Progress variant="success" />
        <Progress variant="warning" />

        <Heading type="h3">Progress</Heading>

        <Select>
          <option>option1</option>
          <option>option2</option>
          <option>option3</option>
        </Select>

        <Heading type="h3">Alert</Heading>

        <Alert label="Info">
          You can delete this alert with clicking x at right.
        </Alert>
        <Alert variant="error" label="Danger">
          DO NOT DELETE THIS ALERT!
        </Alert>

        <Heading type="h3">Skeleton (Experimental)</Heading>

        <Skeleton>You can not see me.</Skeleton>
      </Frame>
    </>
  )
}
