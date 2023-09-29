import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './TextField'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TextField> = {
  title: 'components/server/TextField',
  component: TextField
  // parameters: {
  //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'centered'
  // },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    placeholder: 'outlined'
  }
}
export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'filled'
  }
}
export const Standard: Story = {
  args: {
    variant: 'standard',
    placeholder: 'standard'
  }
}
