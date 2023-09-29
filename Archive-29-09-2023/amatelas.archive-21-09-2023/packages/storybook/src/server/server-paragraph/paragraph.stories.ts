import type { Meta, StoryObj } from '@storybook/react'
import { ServerParagraph } from '@okmtyuta/amatelas-server'
import '@okmtyuta/amatelas-server/server/index.css'

const meta: Meta<typeof ServerParagraph> = {
  title: 'components/server/Paragraph',
  component: ServerParagraph
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children:
      'Each example component has a set of stories that show the states it supports. You can browse the stories in the UI and see the code behind them in files that end with .stories.js or .stories.ts. The stories are written in Component Story Format (CSF)--an ES6 modules-based standard--for writing component examples.Let’s start with the Button component. A story is a function that describes how to render the component in question. Here’s how to render Button in the “primary” state and export a story called Primary.'
  }
}
