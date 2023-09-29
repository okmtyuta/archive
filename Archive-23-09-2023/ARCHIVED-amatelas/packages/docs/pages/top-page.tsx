import { Heading, Paragraph, Code, AutoKatex, List, ListItem, TextField, Accordion, Chip } from '../..'
import { Switch } from '../../components/server/switch/Switch'
import { StandardButton } from '../../components/server/button/variant/standard-button/StandardButton'
import { OutlinedButton } from '../../components/server/button/variant/outlined-button/OutlinedButton'
import { FilledButton } from '../../components/server/button/variant/filled-button/FilledButton'
import { ClientAccordion } from '../../components/client/accordion/ClientAccordion'
import { V2TextField } from '../../components/server/text-field/v2/TextField'
import { ClientButton } from '../../components/client/button/ClientButton'
import { Tabs } from '../../components/server/tab/Tab'

const tabs = [
  {
    label: 'item A',
    content:
      'Content A先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元先生は子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーは子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元'
  },
  {
    label: 'item B',
    content:
      'Wrapped labelsLong labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow, and the text will not be visible.'
  },
  {
    label: 'item C',
    content:
      'views to animate the Tab transition, and allowing tabs to be swiped on touch devices.Item OnCentereThe centered prop should be used for larger views'
  }
]

export const TopPage = () => {
  return (
    <>
      <div className="height-150px">
        <Tabs tabs={tabs} />
      </div>
      <Heading>Accordion</Heading>
      <div>
        <ClientAccordion label="client-accordion">
          先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元気らの所がはむしゃくしゃ生意気たたて、それじゃ羽からありせのだな。くれよすぎどこも下をおいしいたて今の意気地の野ねずみ弾をし第三狸たちの挨拶へあけながらくださいましない。風は前煮て行った。ホールも十むしっ月のようから出て行きまし。
        </ClientAccordion>
        <ClientAccordion label="client-accordion">
          先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元気らの所がはむしゃくしゃ生意気たたて、それじゃ羽からありせのだな。くれよすぎどこも下をおいしいたて今の意気地の野ねずみ弾をし第三狸たちの挨拶へあけながらくださいましない。風は前煮て行った。ホールも十むしっ月のようから出て行きまし。
        </ClientAccordion>
        <ClientAccordion label="client-accordion">
          先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元気らの所がはむしゃくしゃ生意気たたて、それじゃ羽からありせのだな。くれよすぎどこも下をおいしいたて今の意気地の野ねずみ弾をし第三狸たちの挨拶へあけながらくださいましない。風は前煮て行った。ホールも十むしっ月のようから出て行きまし。
        </ClientAccordion>
        <ClientAccordion label="client-accordion">
          先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元気らの所がはむしゃくしゃ生意気たたて、それじゃ羽からありせのだな。くれよすぎどこも下をおいしいたて今の意気地の野ねずみ弾をし第三狸たちの挨拶へあけながらくださいましない。風は前煮て行った。ホールも十むしっ月のようから出て行きまし。
        </ClientAccordion>
      </div>

      <div className="multi-example-col"></div>
      <div>
        <Accordion label="static-accordion">
          先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元気らの所がはむしゃくしゃ生意気たたて、それじゃ羽からありせのだな。くれよすぎどこも下をおいしいたて今の意気地の野ねずみ弾をし第三狸たちの挨拶へあけながらくださいましない。風は前煮て行った。ホールも十むしっ月のようから出て行きまし。
        </Accordion>
        <Accordion label="static-accordion">
          先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元気らの所がはむしゃくしゃ生意気たたて、それじゃ羽からありせのだな。くれよすぎどこも下をおいしいたて今の意気地の野ねずみ弾をし第三狸たちの挨拶へあけながらくださいましない。風は前煮て行った。ホールも十むしっ月のようから出て行きまし。
        </Accordion>
        <Accordion label="static-accordion">
          先生は子のまね口顔でゴーシュをし鳥たでし。するとずいぶん生意気ましですという眼ましまし。だめましたのたはたではゴーシュの元気らの所がはむしゃくしゃ生意気たたて、それじゃ羽からありせのだな。くれよすぎどこも下をおいしいたて今の意気地の野ねずみ弾をし第三狸たちの挨拶へあけながらくださいましない。風は前煮て行った。ホールも十むしっ月のようから出て行きまし。
        </Accordion>
      </div>
      <Heading>Text Field</Heading>

      {/* <TextField placeholder="input" variant="filled" /> */}
      <div className="multi-example-col">
        <TextField name="standard" placeholder="standard" variant="standard" />
        <TextField name="filled" placeholder="input" variant="filled" />
        <TextField name="outlined" placeholder="OutlinedTextField!" variant="outlined" />
      </div>
      <div className="multi-example-col">
        <V2TextField name="standard" placeholder="v2-standard" variant="standard" />
        <V2TextField name="filled" placeholder="v2-filled" variant="filled" />
        <V2TextField name="outlined" placeholder="v2-outlined!" variant="outlined" />
      </div>

      <Heading>Button</Heading>

      <div className="multi-example-col">
        <StandardButton>Standard</StandardButton>
        <OutlinedButton>Outlined</OutlinedButton>
        <FilledButton>Filled</FilledButton>
        <ClientButton variant="filled">Filled ClientButton</ClientButton>
        <ClientButton variant="outlined">Outlined ClientButton</ClientButton>
        <ClientButton>Standard ClientButton</ClientButton>
      </div>

      <Heading>Switch</Heading>

      <div className="multi-example-col">
        <Switch />
      </div>

      <Heading>List</Heading>

      <List>
        <ListItem>first</ListItem>
        <ListItem>second</ListItem>
        <ListItem>third</ListItem>
      </List>

      <Heading>Mathematical</Heading>

      <Paragraph justify>
        <AutoKatex>
          {String.raw`
              $D$を領域とし、$f(z)$は$D$上で正則である複素関数とする。$C$が$D$内のある有界領域の境界であって、互いに交わらない有限個の区分的に滑らかなJordan閉曲線からなるとき
              \begin{equation*}
                \oint_C f(z) dz = 0
              \end{equation*}
              が成り立つ。
            `}
        </AutoKatex>
      </Paragraph>

      <Heading>Chip</Heading>
      <div>
        <Chip>Outlined Chip</Chip>
        <Chip variant="filled">Filled Chip</Chip>
      </div>

      <Heading>Code Block</Heading>
      <Code />
    </>
  )
}
