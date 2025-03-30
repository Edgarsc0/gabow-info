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
                ¿Qué <span class="text-blue-500">es</span> <br/> Gabow?
            </h1>

            <div class="mt-10 lg:mt-20 lg:flex lg:items-center">
                <Image src="/images/mundial.png" class="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"  alt="Copa mundial de la fifa 2026" width={800} height={400}/>

                <div class="mt-8 lg:px-10 lg:mt-0">
                    <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                        Somos una herramienta de geolocalización  
                    </h1>

                    <p class="max-w-lg mt-6 text-gray-600 dark:text-gray-300">
                        Gabow es una herramienta de geolocalización que está diseñada principalmente para ayudar
                        a encontrar tipos de establecimientos y establecimientos específicos mapeando internamente
                        lugares como plazas o centros comerciales.
                    </p>

                    <h3 class="mt-6 text-lg font-medium text-blue-500">¿Es útil para el mundial?</h3>
                    <p class="max-w-lg mt-6 text-gray-600 dark:text-gray-300">Sí, ya que sirve para ayudar a locales y turistas
                        a ubicar externamente lugares e internamente establecimientos de interés.
                    </p>
                </div>
            </div>

            <div class="flex items-center justify-between mt-12 lg:justify-start">
                <button onClick={() => handleRedirect("/page3")}  title="left arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button onClick={() => handleRedirect("/page2")} title="right arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
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
