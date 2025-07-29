import reflex as rx

class VentanasNav(rx.Component):
    def navbar() -> rx.Component:
        return rx.box(
            rx.flex(
                rx.link("Inicio", href="/", class_name="text-lg font-bold"),
                rx.link("Acerca de:", href="/acercade", class_name="text-lg font-bold"),
                spacing="3",
            ),
            width="100%",
            padding="1em",
        )
