

import { Fragment, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { Link as ReactRouterLink } from "react-router"
import { BookOpenText as LucideBookOpenText, BrushCleaning as LucideBrushCleaning, Calculator as LucideCalculator, ClockFading as LucideClockFading } from "lucide-react"
import DebounceInput from "react-debounce-input"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event, isNotNullOrUndefined, isTrue } from "$/utils/state"
import { Moment_235933936650578221533984834988403289858 } from "$/utils/stateful_components"
import { jsx } from "@emotion/react"



function Text_126231349361336532617190520851657233133 () {
  
  const reflex___state____state__time_tomato____time_tomato____numero_velocidad = useContext(StateContexts.reflex___state____state__time_tomato____time_tomato____numero_velocidad)





  
  return (
    jsx(
RadixThemesText,
{as:"p",className:"text-2xl font-bold text-gray-900 dark:text-white",size:"5"},
"Total de PM es: "
,reflex___state____state__time_tomato____time_tomato____numero_velocidad.totalTomato_rx_state_
," palabras por minuto"
,)
  )
}

function Debounceinput_3690120168595268452071926947729633368 () {
  
  const reflex___state____state__time_tomato____time_tomato____numero_velocidad = useContext(StateContexts.reflex___state____state__time_tomato____time_tomato____numero_velocidad)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_fbe0f943aafa40fcb06f643a448fb628 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.time_tomato____time_tomato____numero_velocidad.set_tiempoEmpleado", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(DebounceInput,{css:({ ["borderRadius"] : "10px" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_fbe0f943aafa40fcb06f643a448fb628,placeholder:"Ingresa los tiempo...",type:"number",value:(isNotNullOrUndefined(reflex___state____state__time_tomato____time_tomato____numero_velocidad.tiempoEmpleado_rx_state_) ? reflex___state____state__time_tomato____time_tomato____numero_velocidad.tiempoEmpleado_rx_state_ : "")},)

  )
}

function Button_148675033439856330813843604268037391211 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_95307ee4ebaabb0c4173c9e3b08a1d5f = useCallback(((_e) => (addEvents([(Event("reflex___state____state.time_tomato____time_tomato____numero_velocidad.calcTomato", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",onClick:on_click_95307ee4ebaabb0c4173c9e3b08a1d5f},
jsx(LucideCalculator,{},)
,"Calcular de PM"
,)
  )
}

function Button_168819098048397515650389194883742876686 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_782db8e8c5d5b8dab9a72b179b40e4bb = useCallback(((_e) => (addEvents([(Event("reflex___state____state.time_tomato____time_tomato____numero_velocidad.limpiar", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",onClick:on_click_782db8e8c5d5b8dab9a72b179b40e4bb},
jsx(LucideBrushCleaning,{},)
,"Limpiar"
,)
  )
}

function Debounceinput_320282388889533641019839164278055734316 () {
  
  const reflex___state____state__time_tomato____time_tomato____numero_velocidad = useContext(StateContexts.reflex___state____state__time_tomato____time_tomato____numero_velocidad)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_83c429918e6fd1767340a1fabcb6e4a8 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.time_tomato____time_tomato____numero_velocidad.set_numeroPalabra", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(DebounceInput,{css:({ ["borderRadius"] : "10px" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_83c429918e6fd1767340a1fabcb6e4a8,placeholder:"Ingresa los n\u00fameros...",type:"number",value:(isNotNullOrUndefined(reflex___state____state__time_tomato____time_tomato____numero_velocidad.numeroPalabra_rx_state_) ? reflex___state____state__time_tomato____time_tomato____numero_velocidad.numeroPalabra_rx_state_ : "")},)

  )
}

function Fragment_167616900843178496352053926726151677768 () {
  
  const reflex___state____state__time_tomato____time_tomato____numero_velocidad = useContext(StateContexts.reflex___state____state__time_tomato____time_tomato____numero_velocidad)





  
  return (
    jsx(
Fragment,
{},
(reflex___state____state__time_tomato____time_tomato____numero_velocidad.numVisible_rx_state_ ? (jsx(
Fragment,
{},
jsx(Text_126231349361336532617190520851657233133,{},)
,)) : (jsx(
Fragment,
{},
jsx(RadixThemesSeparator,{size:"4"},)
,))),)
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
{className:"flex items-center justify-center flex-wrap bg-teal-500 p-6",css:({ ["width"] : "100%" })},
jsx(
RadixThemesContainer,
{className:"container mx-auto max-w-sm rounded-lg border-solid border-4 border-indigo-600 bg-sky-300 p-5",css:({ ["padding"] : "50px", ["background"] : "var(--primary-color)" }),size:"3"},
jsx(
RadixThemesContainer,
{css:({ ["padding"] : "16px" }),size:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"4"},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},
jsx("img",{alt:"titulo de timetomato",className:"bg-linear-to-r from-cyan-500 to-blue-400",css:({ ["width"] : "250px", ["height"] : "auto", ["borderRadius"] : "15px", ["borderWidth"] : "medium" }),src:"/images/logo.png"},)
,),jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},
jsx("img",{alt:"logo de timetomato",className:"bg-linear-to-r from-cyan-500 to-blue-400",css:({ ["width"] : "300px", ["height"] : "auto", ["borderRadius"] : "15px", ["borderWidth"] : "medium" }),src:"/images/tomateTiempo.jpeg"},)
,),),),),jsx(
RadixThemesContainer,
{css:({ ["padding"] : "16px" }),size:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"4"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{},
"N\u00famero de palabra de texto:"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack fas fa-file-alt",direction:"row",gap:"3"},
jsx(LucideBookOpenText,{},)
,jsx(Debounceinput_320282388889533641019839164278055734316,{},)
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack fas fa-file-alt",direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{},
"Tiempo empleado en segundos:"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(LucideClockFading,{},)
,jsx(Debounceinput_3690120168595268452071926947729633368,{},)
,),),),),jsx(
RadixThemesContainer,
{css:({ ["padding"] : "16px" }),size:"3"},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"column",gap:"2"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},
jsx(Button_148675033439856330813843604268037391211,{},)
,jsx(Button_168819098048397515650389194883742876686,{},)
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(Fragment_167616900843178496352053926726151677768,{},)
,),),),),),jsx(
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
"Velocidad de lectura"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
