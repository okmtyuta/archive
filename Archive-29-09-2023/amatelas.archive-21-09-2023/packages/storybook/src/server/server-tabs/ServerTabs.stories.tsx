import type { Meta, StoryObj } from '@storybook/react'
import { ServerTabs } from '@okmtyuta/amatelas-server'
import '@okmtyuta/amatelas-server/server/index.css'

const tabs = [
  {
    label: 'item A',
    content:
      'Content A先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元先生は子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元',
    defaultChecked: true
  },
  {
    label: 'item B',
    content:
      'Wrapped labelsLong labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow, and the text will not be visible.'
  },
  {
    label: 'item C',
    content:
      'views to animate the Tab transition, and allowing tabs to be swiped on touch devices.Item OnCentereThe centered prop should be used for larger views'
  }
]

const meta: Meta<typeof ServerTabs> = {
  title: 'components/server/tabs',
  component: ServerTabs
}

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: { tabs: tabs }
}
