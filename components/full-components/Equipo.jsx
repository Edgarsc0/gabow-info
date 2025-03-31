import Image from "next/image"

export default function () {
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto mt-20">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">¿Quiénes <span className="text-blue-500">somos?</span></h1>

                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    Nuestro equipo está conformado por cuatro integrantes, algunos de distintas universidades. Pero trabajando en conjunto.
                </p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                    <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <Image src="/images/edgar.jpeg" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" alt="Grafo Conexo" width={800} height={400} />

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Sánchez Catarino Edgar (lider)</h1>

                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">ESCOM</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Estudiante de Ingeniería en Sistemas Computacionales.</p>
                    </div>

                    <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <Image src="/images/araceli.jpeg" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" alt="Grafo Conexo" width={800} height={400} />

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Araceli Pérez Cornejo</h1>

                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">ESFM</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Estudiante de Licenciatura en Matemática Algorítmica.</p>

                    </div>

                    <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <Image src="/images/armando.png" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" alt="Grafo Conexo" width={800} height={400} />

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Armando Medina Plata</h1>

                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">ESCOM</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Estudiante de Ingeniería en Sistemas Computacionales.</p>


                    </div>

                    <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <Image src="/images/miguel.jpeg" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" alt="Grafo Conexo" width={800} height={400} />

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Miguel Angel Rosas Lara</h1>

                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">ESFM</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Estudiante de Licenciatura en Matemática Algorítmica.</p>

                    </div>
                </div>
            </div>
        </section>

    )
}
