import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  title: 'components/server/Heading',
  component: Heading
}

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    type: 'h1',
    children: 'H1 heading'
  }
}

export const H2: Story = {
  args: {
    type: 'h2',
    children: 'H2 heading'
  }
}

export const H3: Story = {
  args: {
    type: 'h3',
    children: 'H3 heading'
  }
}

export const H4: Story = {
  args: {
    type: 'h4',
    children: 'H4 heading'
  }
}

export const H5: Story = {
  args: {
    type: 'h5',
    children: 'H5 heading'
  }
}

export const H6: Story = {
  args: {
    type: 'h6',
    children: 'H6 heading'
  }
}
