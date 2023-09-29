import { Link } from 'react-router-dom'
import { BottomDrawer } from '../../../components/server/drawer/variant/bottom-drawer/BottomDrawer'
import { LeftDrawer } from '../../../components/server/drawer/variant/left-drawer/LeftDrawer'
import { RightDrawer } from '../../../components/server/drawer/variant/right-drawer/RightDrawer'
import { TopDrawer } from '../../../components/server/drawer/variant/top-drawer/TopDrawer'
import { Paragraph, Title, Heading, List, ListItem } from '../../..'
import { UnclickableButton } from '../../../components/server/button/unclickable-button/UnclickableButton'

export const DrawerPage = () => {
  return (
    <>
      <Title>Drawer</Title>
      <Paragraph>
        The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or app functionality
        such as switching accounts.
      </Paragraph>
      <Heading type="h2">Temporary drawer</Heading>
      <Paragraph>
        Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above
        all other content until a section is selected.
      </Paragraph>
      <Paragraph>
        The Drawer can be cancelled by clicking the overlay or pressing the Esc key. It closes when an item is selected,
        handled by controlling the open prop.
      </Paragraph>
      <div className="multi-example-row">
        <LeftDrawer label={<UnclickableButton>Left</UnclickableButton>}>
          <div className="example">aaa</div>
        </LeftDrawer>
        <RightDrawer label={<UnclickableButton>Right</UnclickableButton>}>
          <div className="example">aaa</div>
        </RightDrawer>
        <TopDrawer label={<UnclickableButton>Top</UnclickableButton>}>
          <div className="example">aaa</div>
        </TopDrawer>
        <BottomDrawer label={<UnclickableButton>Bottom</UnclickableButton>}>
          <div className="example">aaa</div>
        </BottomDrawer>
      </div>
      <Heading type="h2">Strategy</Heading>
      レスポンシブに対応する。
      <Heading type="h2">More</Heading>
      <List>
        <ListItem>
          <Link to="dev">実装方法</Link>
        </ListItem>
      </List>
    </>
  )
}
