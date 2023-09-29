import type { Meta, StoryObj } from '@storybook/react'

import { Code } from './Code'

const meta: Meta<typeof Code> = {
  title: 'components/server/Code',
  component: Code
}

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}
