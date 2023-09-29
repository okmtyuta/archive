import type { Meta, StoryObj } from '@storybook/react'
import { Markdown } from './Markdown'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Markdown> = {
  title: 'components/server/Markdown',
  component: Markdown
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    children: String.raw`
      #Heading1
      ##Heading2
      **bold**
      _italic_
    `
  }
}
