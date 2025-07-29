import reflex as rx
from .components.navUp import VentanasNav
from .components.footerDown import VentanasFooter

from . import pages

class NumeroVelocidad(rx.State):
    numeroPalabra: str = ""
    tiempoEmpleado: str = ""

    totalTomato: float = 0.0

    numVisible: bool = False

    @rx.event
    async def calcTomato(self):
        if not self.numeroPalabra or not self.tiempoEmpleado:
            self.numVisible = False
            yield rx.toast.warning("Por favor, ingresa los valores requeridos.",
                                   position="top-right",
                                   )
        else:
            self.numVisible = True
            self.totalTomato = (float(self.numeroPalabra) /
                                float(self.tiempoEmpleado)) * 60

    @rx.event
    async def limpiar(self):
        self.numeroPalabra = ""
        self.tiempoEmpleado = ""
        self.totalTomato = 0.0
        self.numVisible = False
        yield rx.toast.info("Valores limpiados correctamente.",
                            position="top-right",
                            )


@rx.page(route="/", title="Velocidad de lectura")
def index() -> rx.Component:
    return VentanasNav.navbar(), rx.box(
        rx.container(
            rx.container(
                rx.vstack(
                    rx.vstack(
                        rx.center(
                            rx.image(src="/images/logo.png",
                                     alt="logo de timetomato", height="auto"),
                            class_name="bg-linear-to-r from-cyan-500 to-blue-400",
                            border_radius="15px",
                            border_width="medium",
                            width="300",
                        ),
                        rx.center(
                            rx.image(src="/images/tomateTiempo.jpeg",
                                     alt="logo de timetomato", height="auto"),
                            class_name="shadow-xl/20",
                            border_width="medium",
                            width="250",
                        ),
                        align="center",
                    ),
                    spacing="4",
                ),
            ),

            rx.container(
                rx.vstack(
                    # Número de palabras
                    rx.vstack(
                        rx.heading("Número de palabra de texto:"),
                        rx.hstack(
                            rx.icon("book-open-text"),
                            rx.input(
                                type="number",
                                placeholder="Ingresa los números...",
                                border_radius="10px",
                                value=NumeroVelocidad.numeroPalabra,
                                on_change=NumeroVelocidad.set_numeroPalabra,
                            ),
                            class_name="fas fa-file-alt",
                        ),
                    ),

                    # Tiempo empleado
                    rx.vstack(
                        rx.heading("Tiempo empleado en segundos:"),
                        rx.hstack(
                            rx.icon("clock-fading"),
                            rx.input(
                                type="number",
                                placeholder="Ingresa los tiempo...",
                                border_radius="10px",
                                value=NumeroVelocidad.tiempoEmpleado,
                                on_change=NumeroVelocidad.set_tiempoEmpleado,
                            ),
                        ),
                        class_name="fas fa-file-alt",
                    ),
                    spacing="4",
                ),
            ),

            rx.container(
                rx.vstack(
                    rx.hstack(
                        rx.center(
                            # Para calcular la velocidad de lectura
                            rx.button(
                                rx.icon("calculator"), "Calcular de PM",
                                class_name="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                                on_click=NumeroVelocidad.calcTomato,
                            ),
                            rx.button(
                                rx.icon("brush-cleaning"), "Limpiar",
                                class_name="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                                on_click=NumeroVelocidad.limpiar,
                            ),
                        ),
                    ),

                    rx.hstack(
                        rx.cond(
                            NumeroVelocidad.numVisible,
                            rx.text(
                                "Total de PM es: ", NumeroVelocidad.totalTomato, " palabras por minuto",
                                class_name="text-2xl font-bold text-gray-900 dark:text-white",
                                size="5",
                            ),
                            rx.divider(),
                        ),
                    ),

                    spacing="2",
                    align="center",
                ),
            ),
            class_name="container mx-auto max-w-sm rounded-lg border-solid border-4 border-indigo-600 bg-sky-300 p-5",
            bg="var(--primary-color)",
            padding="50px",
        ),
        class_name="flex items-center justify-center flex-wrap bg-teal-500 p-6",
        width="100%",
    ), VentanasFooter.footer(),


app = rx.App(
    stylesheets=["/css/styles.scss"],
)
app.add_page(index)
app.add_page(pages.AcercaDe)
