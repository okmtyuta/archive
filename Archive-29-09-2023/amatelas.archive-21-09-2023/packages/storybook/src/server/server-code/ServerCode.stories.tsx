import type { Meta, StoryObj } from '@storybook/react'
import { ServerCode } from '@okmtyuta/amatelas-server'
import '@okmtyuta/amatelas-server/server/index.css'

const code = String.raw`pnpm @okmtyuta/amatelas-server @okmtyuta/amatelas-client`

const meta: Meta<typeof ServerCode> = {
  title: 'components/server/code',
  component: ServerCode
}

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    children: code
  }
}
