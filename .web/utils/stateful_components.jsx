

import { Fragment, lazy, useContext, useEffect } from "react"
import { ClientSide, StateContexts } from "$/utils/context"
import { jsx } from "@emotion/react"



const Moment = ClientSide(lazy(() => import('react-moment')))

export function Moment_235933936650578221533984834988403289858 () {
  
  const reflex___state____state__time_tomato___components___footer_down____moment_state = useContext(StateContexts.reflex___state____state__time_tomato___components___footer_down____moment_state)





  
  return (
    jsx(
Moment,
{format:"YYYY"},
reflex___state____state__time_tomato___components___footer_down____moment_state.date_now_rx_state_
,)
  )
}
