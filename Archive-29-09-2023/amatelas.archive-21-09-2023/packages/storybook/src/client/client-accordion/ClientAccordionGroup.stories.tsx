import type { Meta, StoryObj } from '@storybook/react'

import { ClientAccordion } from '@okmtyuta/amatelas-client'

const meta: Meta<typeof ClientAccordion> = {
  title: 'components/client/Accordion',
  component: ClientAccordion
}

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    label: 'Accordion',
    children:
      '先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元気らの所がはむしゃくしゃ生意気たたて、それじゃ羽からありせのだな。くれよすぎどこも下をおいしいたて今の意気地の野ねずみ弾をし第三狸たちの挨拶へあけながらくださいましない。風は前煮て行った。ホールも十むしっ月のようから出て行きまし。'
  }
}
