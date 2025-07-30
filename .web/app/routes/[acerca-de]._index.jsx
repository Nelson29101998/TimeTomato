

import { Fragment, lazy, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Container as RadixThemesContainer, Flex as RadixThemesFlex, Link as RadixThemesLink, Strong as RadixThemesStrong, Text as RadixThemesText } from "@radix-ui/themes"
import { Link as ReactRouterLink } from "react-router"
import { ClientSide, StateContexts } from "$/utils/context"
import { jsx } from "@emotion/react"

const Moment = ClientSide(lazy(() => import('react-moment')))


function Moment_235933936650578221533984834988403289858 () {
  
  const reflex___state____state__time_tomato___components___footer_down____moment_state = useContext(StateContexts.reflex___state____state__time_tomato___components___footer_down____moment_state)





  
  return (
    jsx(
Moment,
{format:"YYYY"},
reflex___state____state__time_tomato___components___footer_down____moment_state.date_now_rx_state_
,)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["width"] : "100%", ["padding"] : "1em" })},
jsx(
RadixThemesFlex,
{gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,className:"text-lg font-bold",css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/"},
"Inicio"
,),),jsx(
RadixThemesLink,
{asChild:true,className:"text-lg font-bold",css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/acercade"},
"Acerca de:"
,),),),),jsx(
RadixThemesBox,
{css:({ ["width"] : "100%" })},
jsx(
RadixThemesContainer,
{className:"p-6 bg-white shadow-md rounded-lg",css:({ ["padding"] : "16px" }),size:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",className:"text-2xl font-bold mb-4"},
"Acerca de TimeTomato \ud83c\udf45"
,),jsx(
RadixThemesText,
{as:"p",className:"mb-2"},
jsx(
RadixThemesStrong,
{},
"TimeTomato"
,)," es una herramienta inteligente que te ayuda a administrar tu tiempo de forma eficiente utilizando la t\u00e9cnica Pomodoro. Divide tu trabajo en intervalos enfocados con pausas regulares para mejorar tu concentraci\u00f3n, reducir la fatiga mental y aumentar tu productividad."
,),jsx(
RadixThemesText,
{as:"p",className:"mb-2"},
"Ideal para estudiantes, profesionales, freelancers o cualquier persona que quiera aprovechar mejor su tiempo, TimeTomato ofrece una experiencia clara, simple y efectiva."
,),jsx(
RadixThemesText,
{as:"p",className:"mb-2"},
"Porque cada minuto cuenta... y nosotros te ayudamos a sacarle el jugo. \ud83c\udf45\u23f1\ufe0f"
,),jsx(
RadixThemesText,
{as:"p",className:"mb-2"},
"Desarrollado por Nelson Mouat Vergara."
,),),),),jsx(
RadixThemesBox,
{className:"bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600",css:({ ["width"] : "100%", ["padding"] : "1em" })},
jsx(
RadixThemesText,
{as:"p"},
"Creado: Nelson Mouat Vergara"
,),jsx(
RadixThemesBox,
{className:"text-sm text-gray-500 sm:text-center dark:text-gray-400"},
jsx(
RadixThemesText,
{as:"p"},
"\u00a9 2020 - "
,jsx(Moment_235933936650578221533984834988403289858,{},)
," "
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"https://timetomato-teal-book.reflex.run"},
"Velocidad de lectura"
,),),),),),),jsx(
"title",
{},
"Timetomato | Acerca-De"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
