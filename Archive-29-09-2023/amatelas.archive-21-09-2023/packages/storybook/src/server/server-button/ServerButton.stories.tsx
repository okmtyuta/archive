import type { Meta, StoryObj } from '@storybook/react'
import { ServerButton } from '@okmtyuta/amatelas-server'
import '@okmtyuta/amatelas-server/server/index.css'

const meta: Meta<typeof ServerButton> = {
  title: 'components/server/Button',
  component: ServerButton
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
export const Standard: Story = {
  args: {
    variant: 'standard',
    children: 'standard'
  }
}
