"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";



  

export default function Home() {
    const router = useRouter();

  const handleRedirect = (path) => {
    // Lógica adicional si la necesitas
    console.log(`Redirigiendo a: ${path}`);
    router.push(path);  // Redirección programática
  };
  return (

    
                  
<section class="bg-white dark:bg-gray-900">
    <div class="relative flex">
        <div class="min-h-screen lg:w-1/3"></div>
        <div class="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

        <div
            class="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                ¿Qué <span class="text-blue-500">funcionalidades</span> <br/> tiene Gabow?
            </h1>

            <div class="mt-10 lg:mt-20 lg:flex lg:items-center">
                <Image src="/images/azteca.jpg" class="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"  alt="Estadio Azteca" width={800} height={400}/>

                <div class="mt-8 lg:px-10 lg:mt-0">
                    <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                        Vista interna
                    </h1>

                    <p class="max-w-lg mt-6 text-gray-600 dark:text-gray-300">
                    La vista interna consiste en un mapeo interno del lugar que tiene
                    como resultado una vista del tipo cámara 360, en donde también se
                    indican los tipos de establecimientos, secciones y, en particular,
                    establecimientos específicos o de interés.
                    Esta vista cuenta con una barra de búsqueda para el usuario.
                    </p>

                    <h3 class="mt-6 text-lg font-medium text-blue-500">Plano general</h3>
                    <p class="max-w-lg mt-6 text-gray-600 dark:text-gray-300">Esta vista está desarrollada
                    para facilitar la interpretación de las secciones de los lugares de interés para los
                    usuarios; esta vista consiste en un plano interactivo seccionado del lugar.
                    Si el lugar tiene varios pisos, se tiene un plano para cada piso. Esta vista de igual
                    forma cuenta con una barra de búsqueda para el usuario.
                    </p>
                </div>
            </div>

            <div class="flex items-center justify-between mt-12 lg:justify-start">
                <button onClick={() => handleRedirect("/")}  title="left arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button onClick={() => handleRedirect("/page3")} title="right arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>

        
  );
}
