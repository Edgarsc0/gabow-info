import HeaderText from "./HeaderText";
import { Fade } from "react-awesome-reveal";

export default function () {
    return (
        <>

            <div className="container px-6 mx-auto">
                <HeaderText text="Nuestra solución" />
                <p className="mt-6 text-gray-800 ">
                    <span className="text-blue-500 font-bold">Con la llegada del Mundial de 2026</span>, muchas ciudades alrededor del mundo estarán recibiendo a turistas de todos los rincones del planeta. Aeropuertos, estadios, plazas comerciales y otros lugares concurridos serán el centro de atención para millones de personas que buscan no solo disfrutar del evento, sino también explorar las ciudades que lo albergan. En este contexto, los mapas interactivos se convierten en una herramienta clave para mejorar la experiencia de los turistas y facilitar su navegación en entornos complejos.
                </p>
                <div className="lg:flex lg:items-center">
                    <div className="lg:w-1/2">
                        <p className="mt-6 text-gray-800">
                            A menudo, en lugares tan concurridos como aeropuertos, centros comerciales y estadios, <span className="text-blue-500 font-bold">encontrar un mapa que te ayude a orientarte puede ser una tarea difícil</span>. En muchos casos, los mapas disponibles son imágenes estáticas o gráficos difíciles de leer, que no proporcionan detalles actualizados ni permiten interactuar con ellos. Esto puede generar frustración, sobre todo en lugares como centros comerciales gigantes o aeropuertos internacionales donde es fácil perderse. En situaciones cotidianas, como realizar compras en una plaza comercial o tomar un vuelo en un aeropuerto, la falta de una herramienta intuitiva que te guíe de forma efectiva puede consumir mucho tiempo y energía. <span className="text-blue-500 font-bold">Esto se vuelve aún más relevante cuando personas de diferentes partes del mundo no conocen bien el lugar y dependen de mapas y señales para llegar a su destino.</span>
                        </p>
                        <p className="mt-6 text-gray-800">
                            Imagina que estás en un aeropuerto internacional durante el Mundial de 2026. <span className="text-blue-500 font-bold">Con cientos de miles de personas moviéndose por el lugar, encontrar tu puerta de embarque o tu zona de descanso puede ser un reto</span>. Gracias a Gabow, no solo tendrás acceso a mapas interactivos en tiempo real, sino que podrás ver la ruta más rápida hacia tu destino y, si tienes alguna duda, acceder a información adicional sobre los servicios disponibles. Además, los estadios donde se jueguen los partidos del Mundial serán lugares complejos con miles de asistentes. <span className="text-blue-500 font-bold">Gabow permitirá a los usuarios encontrar fácilmente sus asientos, los baños más cercanos, puestos de comida, las salidas de emergencia y otras instalaciones dentro del estadio, todo en tiempo real. La experiencia del turista será más fluida, evitando el estrés y la pérdida de tiempo buscando información.</span>
                        </p>
                        <p className="mt-6 text-gray-800">
                            Otro aspecto crucial que Gabow implementará en sus mapas interactivos es la información sobre salidas de emergencia. Durante eventos masivos, como el Mundial de 2026, <span className="text-blue-500 font-bold">la seguridad de los asistentes es una prioridad</span>. Gabow mostrará las rutas de evacuación y las salidas de emergencia en tiempo real, asegurando que los turistas siempre tengan la información necesaria para actuar rápidamente en caso de una emergencia. Este tipo de funcionalidad es vital no solo en estadios, sino también en aeropuertos y plazas comerciales, donde la aglomeración de personas puede dificultar la localización de las rutas de salida.
                        </p>
                        <p className="mt-6 text-gray-800">
                            Uno de los grandes desafíos que enfrentan las ciudades durante grandes eventos internacionales como el Mundial de 2026 es la congestión vial. <span className="text-blue-500 font-bold">La llegada de miles de turistas y la necesidad de movilizarse hacia estadios, aeropuertos y plazas comerciales genera un aumento significativo en el tráfico, lo que no solo provoca retrasos, sino que también contribuye al aumento de los gases contaminantes en el aire.</span>
                        </p>
                    </div>
                    <div className="relative lg:mx-6 lg:w-1/2">
                        <Fade>
                            <img
                                className="object-cover w-full rounded-xl h-72 lg:h-96"
                                src="gabow_main_page.png"
                                alt="Gabow application interface"
                            />
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center italic">
                                (a) Pagina principal de gabow (prototipo)
                            </p>
                            <img
                                className="object-cover w-full rounded-xl h-72 lg:h-96"
                                src="gabow_place_image.png"
                                alt="Gabow application interface"
                            />
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center italic">
                                (b) Pagina principal de gabow (prototipo)
                            </p>
                        </Fade>
                    </div>
                </div>
                <p className="mt-6 text-gray-800">
                    Sin embargo, Gabow no solo se dedica a facilitar la navegación de los turistas en estos lugares concurridos, sino que también tiene un compromiso con el medio ambiente. <span className="text-blue-500 font-bold">Gabow priorizará el uso del transporte urbano ecológico, como el metro, autobuses eléctricos, bici-sistemas y otras opciones de transporte sostenible</span>, con el objetivo de reducir la emisión de gases contaminantes y aliviar el caos vial que podría generarse durante el Mundial.
                </p>
            </div>
        </>
    )
}