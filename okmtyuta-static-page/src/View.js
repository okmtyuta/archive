import App from "./App";

import { Button } from "./okmtyuta-react-lib/components/atoms/prototypes/buttons/Button";
import { NostHeader } from "./okmtyuta-react-lib/components/molecules/nost/NostHeader";
import { NostFooter } from "./okmtyuta-react-lib/components/molecules/nost/NostFooter";
import { Body } from "./okmtyuta-react-lib/components/parts/body"

export const View = (props) => {
  return (

    <Body>
      <NostHeader />
        <Button>
          Button
        </Button>
      <NostFooter />
    </Body>
    
  )
}