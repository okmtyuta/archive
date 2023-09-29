import type { Meta, StoryObj } from '@storybook/react'

import { Accordion } from './Accordion'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Accordion> = {
  title: 'components/server/Accordion',
  component: Accordion
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
export const Static: Story = {
  args: {
    variant: 'static',
    label: 'Accordion',
    children:
      '先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元気らの所がはむしゃくしゃ生意気たたて、それじゃ羽からありせのだな。くれよすぎどこも下をおいしいたて今の意気地の野ねずみ弾をし第三狸たちの挨拶へあけながらくださいましない。風は前煮て行った。ホールも十むしっ月のようから出て行きまし。'
  }
}
export const Animated: Story = {
  args: {
    variant: 'animated',
    label: 'Accordion',
    children:
      '先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元気らの所がはむしゃくしゃ生意気たたて、それじゃ羽からありせのだな。くれよすぎどこも下をおいしいたて今の意気地の野ねずみ弾をし第三狸たちの挨拶へあけながらくださいましない。風は前煮て行った。ホールも十むしっ月のようから出て行きまし。'
  }
}
