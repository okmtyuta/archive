import type { Meta, StoryObj } from '@storybook/react'

import { Highlight } from './Highlight'

const meta: Meta<typeof Highlight> = {
  title: 'components/server/Highlight',
  component: Highlight
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    order: 'primary',
    children: 'primary'
  }
}
export const Secondary: Story = {
  args: {
    order: 'secondary',
    children: 'secondary'
  }
}
