import type { Meta, StoryObj } from '@storybook/react'

import { AutoKatex } from './AutoKatex'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AutoKatex> = {
  title: 'components/server/KaTeX/AutoKatex',
  component: AutoKatex
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
    children: String.raw`$D$を領域とし、$f(z)$は$D$上で正則である複素関数とする。$C$が$D$内のある有界領域の境界であって、互いに交わらない有限個の区分的に滑らかなJordan閉曲線からなるとき
    \begin{equation*}
      \oint_C f(z) dz = 0
    \end{equation*}
    が成り立つ。`
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
