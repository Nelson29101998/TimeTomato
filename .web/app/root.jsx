
import reflexGlobalStyles from '$/styles/__reflex_global_styles.css?url';

import { Fragment, StrictMode, useContext, useEffect } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { EventLoopContext } from "$/utils/context"
import { Event } from "$/utils/state"
import { jsx } from "@emotion/react"
import { Link as ReactRouterLink } from "react-router"
import RadixThemesColorModeProvider from "$/components/reflex/radix_themes_color_mode_provider"
import { Theme as RadixThemesTheme } from "@radix-ui/themes"
import theme from "$/utils/theme"
import { DefaultOverlayComponents, MemoizedBadge, MemoizedToastProvider } from "$/utils/components"


import { EventLoopProvider, StateProvider, defaultColorMode } from "$/utils/context";
import { ThemeProvider } from '$/utils/react-theme';
import { Layout as AppLayout } from './_document';
import { Outlet } from 'react-router';
import * as React from "react";
import * as radix_ui_themes from "@radix-ui/themes";
import * as emotion_react from "@emotion/react";
import * as utils_context from "$/utils/context";
import * as utils_state from "$/utils/state";
import * as utils_components from "$/utils/components";


export const links = () => [
  { rel: 'stylesheet', href: reflexGlobalStyles, type: 'text/css' }
];

function AppWrap({children}) {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    jsx(
StrictMode,
{},
jsx(
ErrorBoundary,
{fallbackRender:((event_args) => (jsx("div", ({css:({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}), (jsx("div", ({css:({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" })}), (jsx("div", ({css:({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" })}), (jsx("h2", ({css:({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" })}), (jsx(Fragment, ({}), "An error occurred while rendering this page.")))), (jsx("p", ({css:({ ["opacity"] : "0.75" })}), (jsx(Fragment, ({}), "This is an error with the application itself.")))), (jsx("details", ({}), (jsx("summary", ({css:({ ["padding"] : "0.5rem" })}), (jsx(Fragment, ({}), "Error message")))), (jsx("div", ({css:({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" })}), (jsx("div", ({css:({ ["padding"] : "0.5rem", ["width"] : "fit-content" })}), (jsx("pre", ({}), (jsx(Fragment, ({}), event_args.error.name + ': ' + event_args.error.message + '\n' + event_args.error.stack)))))))), (jsx("button", ({css:({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }),onClick:((_e) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.name + ': ' + event_args.error.message + '\n' + event_args.error.stack))), ["callback"] : null }), ({  })))], [_e], ({  }))))}), (jsx(Fragment, ({}), "Copy")))))))), (jsx("hr", ({css:({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" })}))), (jsx(ReactRouterLink, ({to:"https://reflex.dev"}), (jsx("div", ({css:({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" })}), (jsx(Fragment, ({}), "Built with ")), (jsx("svg", ({"aria-label":"Reflex",css:({ ["fill"] : "currentColor" }),height:"12",role:"img",width:"56",xmlns:"http://www.w3.org/2000/svg"}), (jsx("path", ({d:"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z"}))), (jsx("path", ({d:"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z"}))), (jsx("path", ({d:"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z"}))), (jsx("path", ({d:"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z"}))), (jsx("path", ({d:"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z"}))), (jsx("path", ({d:"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z"}))), (jsx("title", ({}), (jsx(Fragment, ({}), "Reflex"))))))))))))))),onError:((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["info"] : ((((_error["name"]+": ")+_error["message"])+"\n")+_error["stack"]), ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  }))))},
jsx(
RadixThemesColorModeProvider,
{},
jsx(
RadixThemesTheme,
{accentColor:"blue",css:{...theme.styles.global[':root'], ...theme.styles.global.body}},
jsx(
Fragment,
{},
jsx(DefaultOverlayComponents,{},)
,jsx(
Fragment,
{},
jsx(MemoizedToastProvider,{},)
,jsx(
Fragment,
{},
children
,jsx(MemoizedBadge,{},)
,),),),),),),)
  )
}


export function Layout({children}) {
    useEffect(() => {
    // Make contexts and state objects available globally for dynamic eval'd components
    let windowImports = {
      "react": React,
      "@radix-ui/themes": radix_ui_themes,
      "@emotion/react": emotion_react,
      "$/utils/context": utils_context,
      "$/utils/state": utils_state,
      "$/utils/components": utils_components,
    };
    window["__reflex"] = windowImports;
  }, []);

  return jsx(AppLayout, {},
    jsx(ThemeProvider, {defaultTheme: defaultColorMode, attribute: "class"},
      jsx(StateProvider, {},
        jsx(EventLoopProvider, {},
          jsx(AppWrap, {}, children)
        )
      )
    )
  );
}

export default function App() {
  return jsx(Outlet, {});
}

