import { AmatelasBaseProps } from '../../types'

export interface ClientButtonBaseProps extends AmatelasBaseProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
