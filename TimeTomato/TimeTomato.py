import reflex as rx

class NumeroVelocidad(rx.State):
    numeroPalabra: int = 0

@rx.page(route="/", title="Velocidad de lectura")
def index() -> rx.Component:
    return rx.container(
        rx.vstack(
            rx.center(
                rx.image(src="/images/logo.png", alt="logo de timetomato", height="auto"),
                class_name="bg-linear-to-r from-cyan-500 to-blue-400",
                border_radius="15px",
                border_width="medium",
                width="50%",
            ),
            rx.center(
                rx.image(src="/images/tomateTiempo.jpeg", alt="logo de timetomato", height="auto"),
                class_name="shadow-xl/20",
                border_width="medium",
                width="30%",
            ),
            
            #Número de palabras
            rx.hstack(
                rx.heading("Número de palabra de texto:"),
                rx.input(
                    placeholder="Ingresa los números...",
                    border_radius="10px",
                ),
            ),
            
            #Tiempo empleado
            rx.hstack(
                rx.heading("Tiempo empleado en segundos:"),
                rx.input(
                    placeholder="Ingresa los tiempo...",
                    border_radius="10px",
                ),
            ),
            
            # Para calcular la velocidad de lectura
            rx.button(
                "Calcular de PM",
                class_name="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
            ),
           
            
            rx.text(
                "Get started by editing ",
                
                size="5",
            ),
            
            spacing="4",
            align="center",
        ),
        class_name="bg-blue-500",
    ),


app = rx.App()
app.add_page(index)
