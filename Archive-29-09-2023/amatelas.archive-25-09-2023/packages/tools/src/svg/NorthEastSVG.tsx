import { SVGBaseProps } from './types/SVGBaseProps'

interface NorthEastSVGProps extends SVGBaseProps {}

export const NorthEastSVG = ({ ...props }: NorthEastSVGProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M228.308-200 200-228.308 651.692-680H360v-40h360v360h-40v-291.692L228.308-200Z" />
    </svg>
  )
}
