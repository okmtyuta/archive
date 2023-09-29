import type { Meta, StoryObj } from '@storybook/react'
import { ClientAccordion } from '@okmtyuta/amatelas-client'

const ClientAccordionGroup = () => {
  return (
    <div>
      <ClientAccordion label="江戸川乱歩">
        あるにちよう日のごご、丹下たんげサト子ちゃんと、木村きむらミドリちゃんと、野崎のざきサユリちゃんの三人が、友だちのところへあそびに行ったかえりに、世田谷せたがや区のさびしい町を、手をつないで歩いていました。三人とも、小学校三年生のなかよしです。
        「あらっ。」 サト子ちゃんが、なにを見たのか、ぎょっとしたようにたちどまりました。
        ミドリちゃんもサユリちゃんもびっくりして、サト子ちゃんの見つめている方をながめました。
        すると、道のまん中に、みょうなことがおこっていたのです。むこうのマンホールのてつのふたが、じりり、じりりと、もち上がっているのです。だれか、マンホールの中にいるのでしょうか。
      </ClientAccordion>
      <ClientAccordion label="芥川龍之介">
        或ある春の日暮です。 唐とうの都洛陽らくようの西の門の下に、ぼんやり空を仰いでいる、一人の若者がありました。
        若者は名を杜子春といって、元は金持の息子でしたが、今は財産を費つかい尽して、その日の暮しにも困る位、憐あわれな身分になっているのです。何しろその頃洛陽といえば、天下に並ぶもののない、繁昌はんじょうを極きわめた都ですから、往来にはまだしっきりなく、人や車が通っていました。門一ぱいに当っている、油のような夕日の光の中に、老人のかぶった紗しゃの帽子や、土耳古トルコの女の金の耳環みみわや、白馬しろうまに飾った色糸の手綱たづなが、絶えず流れて行く容子ようすは、まるで画のような美しさです。
      </ClientAccordion>
      <ClientAccordion label="坂本龍馬">
        其後ハ御物遠奉存候。作（ママ）日頃より御風気ニ御引籠のよし御大事可レ被成、奉存候。然ニ拙儀御国の無二余儀一方ニ文通し申度、独兄ならでハ不叶事拝顔仕度奉存候。彼海軍士官被二仰付一候者も、大坂表ニて被二仰付一候時ハ拙者、急下坂仕らねバ彼者とよる所を不知と申事ニ相成申候。早御聞合可被下候。
      </ClientAccordion>
    </div>
  )
}

const meta: Meta<typeof ClientAccordion> = {
  title: 'components/client/AccordionGroup',
  component: ClientAccordionGroup
}

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {}
}
