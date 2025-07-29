import reflex as rx
from ..components.navUp import VentanasNav
from ..components.footerDown import VentanasFooter

# @rx.page(route="/acercade", title="Acerca de")
def AcercaDe() -> rx.Component:
    return VentanasNav.navbar(), rx.box(),