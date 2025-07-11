import reflex as rx


class NumeroVelocidad(rx.State):
    numeroPalabra: str = ""
    tiempoEmpleado: str = ""

    totalTomato: float = 0.0

    @rx.event
    def calcTomato(self):
        if not self.numeroPalabra or not self.tiempoEmpleado:
            return print("Por favor, ingresa los valores requeridos.")
        else:
            self.totalTomato = (float(self.numeroPalabra) /
                            float(self.tiempoEmpleado)) * 60
        # return print("Calculando velocidad de lectura...", self.totalTomato)


@rx.page(route="/", title="Velocidad de lectura")
def index() -> rx.Component:
    return rx.box(
        rx.container(
            rx.vstack(
                rx.vstack(
                    rx.center(
                        rx.image(src="/images/logo.png",
                                 alt="logo de timetomato", height="auto"),
                        class_name="bg-linear-to-r from-cyan-500 to-blue-400",
                        border_radius="15px",
                        border_width="medium",
                        width="50%",
                    ),
                    rx.center(
                        rx.image(src="/images/tomateTiempo.jpeg",
                                 alt="logo de timetomato", height="auto"),
                        class_name="shadow-xl/20",
                        border_width="medium",
                        width="30%",
                    ),
                    align="center",
                ),
                spacing="4",
            ),
        ),

        rx.container(
            rx.vstack(
                # Número de palabras
                rx.hstack(
                    rx.heading("Número de palabra de texto:"),
                    rx.input(
                        type="number",
                        placeholder="Ingresa los números...",
                        border_radius="10px",
                        required=True,
                        on_blur=NumeroVelocidad.set_numeroPalabra,
                        
                    ),
                ),

                # Tiempo empleado
                rx.hstack(
                    rx.heading("Tiempo empleado en segundos:"),
                    rx.input(
                        type="number",
                        placeholder="Ingresa los tiempo...",
                        border_radius="10px",
                        required=True,
                        on_blur=NumeroVelocidad.set_tiempoEmpleado,
                    ),
                ),
                spacing="4",
            ),
        ),

        rx.container(
            rx.vstack(
                rx.hstack(
                    # Para calcular la velocidad de lectura
                    rx.button(
                        "Calcular de PM",
                        class_name="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                        on_click=NumeroVelocidad.calcTomato,
                    ),
                    rx.button(
                        "Limpiar",
                        class_name="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                    ),
                ),

                rx.hstack(
                    rx.text(
                        "Total de PM es: ", NumeroVelocidad.totalTomato, " palabras por minuto",
                        size="5",
                    ),
                ),

                spacing="2",
                align="center",
            ),
        ),
        class_name="bg-blue-500",
    ),


app = rx.App()
app.add_page(index)
