import type { Meta, StoryObj } from '@storybook/react'

import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'components/server/Link',
  component: Link
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    href: 'https://github.com/okmtyuta/amatelas',
    children: 'primary'
  }
}
