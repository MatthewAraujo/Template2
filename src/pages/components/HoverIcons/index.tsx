import { ChatCircleText, Envelope, WhatsappLogo } from 'phosphor-react'
import Icons from '../FloatIcons'

export default function HoverIcons() {
  return (
    <div>
      <Icons icons={<ChatCircleText size={35} />} texto="Corretor Online" />
      <Icons icons={<Envelope size={35} />} texto="Corretor Online" />
      <Icons icons={<WhatsappLogo size={35} />} texto="Corretor Online" />
    </div>
  )
}
