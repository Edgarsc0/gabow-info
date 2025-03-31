import { InstagramIcon } from "lucide-react"

export default function () {
    return (
        <footer className="bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <a
                        href="/"
                        className="text-4xl  font-extrabold tracking-widest text-white neon-text relative flex items-center"
                    >
                        Gabow
                    </a>

                    <div className="flex flex-wrap justify-center mt-6 -mx-4">
                        <a href="/" className="mx-4 text-sm text-gray-300 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Inicio </a>

                        <a href="#gabow" className="mx-4 text-sm text-gray-300 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Sobre gabow </a>

                        <a href="#" className="mx-4 text-sm text-gray-300 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Equipo </a>

                        <a href="#" className="mx-4 text-sm text-gray-300 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Contacto </a>
                    </div>

                </div>

                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-400">© Copyright 2021. All Rights Reserved.</p>

                    <div className="flex -mx-2">
                        <a href="https://www.instagram.com/gaboooooooow/" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}