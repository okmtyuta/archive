import type { Meta, StoryObj } from '@storybook/react'
import { ClientButton } from '@okmtyuta/amatelas-client'

const meta: Meta<typeof ClientButton> = {
  title: 'components/client/ClientButton',
  component: ClientButton
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
