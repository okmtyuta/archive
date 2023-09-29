import type { Meta, StoryObj } from '@storybook/react'
import { ServerTitle } from '@okmtyuta/amatelas-server'
import '@okmtyuta/amatelas-server/server/index.css'

const meta: Meta<typeof ServerTitle> = {
  title: 'components/server/Title',
  component: ServerTitle
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    posted: '21th Aug 2023'
  }
}
