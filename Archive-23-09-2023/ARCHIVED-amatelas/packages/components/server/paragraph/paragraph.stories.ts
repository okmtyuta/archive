import type { Meta, StoryObj } from '@storybook/react'

import { Paragraph } from './Paragraph'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Paragraph> = {
  title: 'components/server/Paragraph',
  component: Paragraph
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
export const Primary: Story = {
  args: {
    children:
      'Each example component has a set of stories that show the states it supports. You can browse the stories in the UI and see the code behind them in files that end with .stories.js or .stories.ts. The stories are written in Component Story Format (CSF)--an ES6 modules-based standard--for writing component examples.Let’s start with the Button component. A story is a function that describes how to render the component in question. Here’s how to render Button in the “primary” state and export a story called Primary.'
  }
}

// export const Secondary: Story = {
//   args: {
//     label: 'Button'
//   }
// }

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button'
//   }
// }

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button'
//   }
// }
