import reflex as rx
from datetime import datetime, timezone

class MomentState(rx.State):
    date_now: datetime = datetime.now(timezone.utc)

    @rx.event
    def update(self):
        self.date_now = datetime.now(timezone.utc)


class Ventanas(rx.Component):
    def navbar() -> rx.Component:
        return rx.box(
            rx.flex(
                rx.link("Inicio", href="/", class_name="text-lg font-bold"),
                rx.link("Acerca de", href="/acercade", class_name="text-lg font-bold"),
                spacing="2",
            ),
            width="100%",
            padding="1em",
        )

    def footer() -> rx.Component:
        return rx.box(
            rx.text("Creado: Nelson Mouat Vergara"),
            rx.box(
                rx.text("© 2020 - ",
                        rx.moment(MomentState.date_now, format="YYYY"), " ",
                        rx.link("Velocidad de lectura",
                                href="https://timetomato-teal-book.reflex.run"),
                        ),
                class_name="text-sm text-gray-500 sm:text-center dark:text-gray-400"
            ),
            class_name="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600",
            width="100%",
            padding="1em",
        )
