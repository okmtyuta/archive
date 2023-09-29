import { Link as Routing} from "react-router-dom";
import { RouterLinkWrapper } from "../wrappers/RouterLinkWrapper";

export const RouterLink = (props) => {
  return (
    <RouterLinkWrapper
      animation={props.animation}
      fontFamily={props.fontFamily}
      color={props.color}
      textDecoration={props.textDecoration}
      transition={props.transition}
      hoveredColor={props.hoveredColor}
    >
      <Routing to={props.to}>
        {props.children}
      </Routing>
    </RouterLinkWrapper>
  )
}