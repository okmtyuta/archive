import type { Meta, StoryObj } from '@storybook/react'

import { Drawer } from './Drawer'
import { List, ListItem } from '../list/List'

const meta: Meta<typeof Drawer> = {
  title: 'components/server/Drawer',
  component: Drawer
}

export default meta
type Story = StoryObj<typeof meta>

const Child = () => {
  return (
    <List>
      <ListItem>Overview</ListItem>
      <ListItem>Introduction</ListItem>
      <ListItem>Getting Started</ListItem>
    </List>
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
