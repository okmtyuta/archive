import type { Meta, StoryObj } from '@storybook/react'
import { ServerDrawer, ServerList, ServerListItem } from '@okmtyuta/amatelas-server'
import '@okmtyuta/amatelas-server/server/index.css'

const meta: Meta<typeof ServerDrawer> = {
  title: 'components/server/Drawer',
  component: ServerDrawer
}

export default meta
type Story = StoryObj<typeof meta>

const Child = () => {
  return (
    <ServerList>
      <ServerListItem>Overview</ServerListItem>
      <ServerListItem>Introduction</ServerListItem>
      <ServerListItem>Getting Started</ServerListItem>
    </ServerList>
  )
}

export const Left: Story = {
  args: {
    variant: 'left',
    label: 'Click me!',
    children: <Child />
  }
}
export const Right: Story = {
  args: {
    variant: 'right',
    label: 'Click me!',
    children: <Child />
  }
}
export const Top: Story = {
  args: {
    variant: 'top',
    label: 'Click me!',
    children: <Child />
  }
}
export const Bottom: Story = {
  args: {
    variant: 'bottom',
    label: 'Click me!',
    children: <Child />
  }
}
