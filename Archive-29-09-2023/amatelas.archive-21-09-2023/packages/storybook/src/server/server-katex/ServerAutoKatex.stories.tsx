import type { Meta, StoryObj } from '@storybook/react'
import { ServerAutoKatex } from '@okmtyuta/amatelas-server'
import '@okmtyuta/amatelas-server/server/index.css'

const meta: Meta<typeof ServerAutoKatex> = {
  title: 'components/server/KaTeX/AutoKatex',
  component: ServerAutoKatex
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: String.raw`$D$を領域とし、$f(z)$は$D$上で正則である複素関数とする。$C$が$D$内のある有界領域の境界であって、互いに交わらない有限個の区分的に滑らかなJordan閉曲線からなるとき
    \begin{equation*}
      \oint_C f(z) dz = 0
    \end{equation*}
    が成り立つ。`
  }
}
