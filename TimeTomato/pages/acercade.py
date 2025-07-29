import reflex as rx
from ..ordenarPagina.arribaAbajo import Ventanas

# @rx.page(route="/acercade", title="Acerca de")
def AcercaDe() -> rx.Component:
    return Ventanas.navbar(), rx.box(),