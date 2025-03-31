import { Fade } from "react-awesome-reveal";
import HeaderText from "./HeaderText";

export default function () {
    return (
        <section id="gabow">
            <div className="container px-6  mx-auto">
                <HeaderText text="Sobre Gabow" />

                <div className="lg:flex lg:items-center mt-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                            Gabow: Ve por buen camino
                        </h2>

                        <p className="mt-6 text-gray-800 ">
                            <span className="text-blue-500 font-bold">Imagina tener acceso a mapas detallados de tus lugares favoritos</span> y la posibilidad de ver qué tiendas tiene un centro comercial o el interior de cualquier aeropuerto antes de llegar. Gabow lleva la navegación un paso más allá, ofreciendo una vista de 360 grados de los interiores de plazas comerciales, parques, estadios y otros espacios turísticos, dándote una experiencia inmersiva que hará que tu viaje sea más eficiente y emocionante.

                        </p>

                        <p className="mt-6 text-gray-800">
                            Además, Gabow aborda las dificultades que enfrentan los turistas al llegar a nuevas ciudades, ayudándote a encontrar tu camino rápidamente en aeropuertos y otros puntos clave. También nos preocupamos por el medio ambiente, por lo que priorizamos el uso de transporte urbano y ecológico, contribuyendo a la reducción de las emisiones de gases contaminantes.
                        </p>

                        <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">Características principales:</h2>

                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center py-2">
                                <svg
                                    className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Mapas interactivos y faciles de usar permitiendo al turista navegar y orientarse mejor
                            </li>

                            <li className="flex items-center py-2">
                                <svg
                                    className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                ¡Navegación 360 grados en Interiores de estadios, plazas comerciales, aeropuertos y mas!
                            </li>

                            <li className="flex items-center py-2">
                                <svg
                                    className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Prioriza el Transporte Urbano y Ecológico
                            </li>

                            <li className="flex items-center py-2">
                                <svg
                                    className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Guía para Nuevos Turistas
                            </li>
                        </ul>
                    </div>

                    <div className="relative lg:mx-6 lg:w-1/2">
                        <Fade>
                            <img
                                className="object-cover w-full rounded-xl h-72 lg:h-96"
                                src="gabow_ligth.jpg"
                                alt="Gabow application interface"
                            />
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center italic">
                                Logo de Gabow: por Araceli Perez Cornejo
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}