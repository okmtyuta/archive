import type { Meta, StoryObj } from '@storybook/react'
import { ServerChip } from '@okmtyuta/amatelas-server'
import '@okmtyuta/amatelas-server/server/index.css'

const meta: Meta<typeof ServerChip> = {
  title: 'components/server/chip',
  component: ServerChip
}

export default meta
type Story = StoryObj<typeof meta>

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'outlined'
  }
}
export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'filled'
  }
}
