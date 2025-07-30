import reflex as rx
from ..components.navUp import VentanasNav
from ..components.footerDown import VentanasFooter


@rx.page(route="/acercade", title="Acerca de")
def AcercaDe() -> rx.Component:
    return VentanasNav.navbar(), rx.box(
        rx.container(
            rx.vstack(
                rx.text("Acerca de TimeTomato 🍅",
                        class_name="text-2xl font-bold mb-4"),
                rx.text(rx.text.strong("TimeTomato"), " es una herramienta inteligente que te ayuda a administrar tu tiempo de forma eficiente utilizando la técnica Pomodoro. Divide tu trabajo en intervalos enfocados con pausas regulares para mejorar tu concentración, reducir la fatiga mental y aumentar tu productividad.",
                        class_name="mb-2"),
                rx.image(src="/images/acerca_de.png",
                         alt="acerca de timetomato", width="200px", height="auto",
                         class_name="bg-linear-to-r from-cyan-500 to-blue-400",
                         border_radius="15px",
                         border_width="medium"),
                rx.text("Ideal para estudiantes, profesionales, freelancers o cualquier persona que quiera aprovechar mejor su tiempo, TimeTomato ofrece una experiencia clara, simple y efectiva.",
                        class_name="mb-2"),
                rx.text("Porque cada minuto cuenta... y nosotros te ayudamos a sacarle el jugo. 🍅⏱️",
                        class_name="mb-2"),
                rx.text("Desarrollado por Nelson Mouat Vergara.",
                        class_name="mb-2"),
            ),
            class_name="p-6 bg-white shadow-md rounded-lg",
        ),
        width="100%",
    ), VentanasFooter.footer()
