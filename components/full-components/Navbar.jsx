import HoverCard from "./HoverCard";

export default function Navbar() {
  return (
    <>
      {/* Barra superior con degradado dorado */}
      <div className="h-2 w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"></div>

      <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Texto Animado "Gabow" con animación y bandera */}
          <a
            href="/"
            className="text-4xl font-extrabold tracking-widest text-white neon-text relative flex items-center"
          >
            Gabow
            {/* Bandera al lado de Gabow */}
            <img
              src={"argentina.png"}
              alt="Bandera"
              className="ml-2 w-14 h-10 rounded-lg"
            />
          </a>

          {/* Botón de Contacto */}
          <div className="flex md:order-2 space-x-3">
            <HoverCard />

            {/* Botón Menú Móvil */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-yellow-500 transition-all"
            >
              <span className="sr-only">Abrir menú</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Menú */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-white hover:text-yellow-400 transition-all"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/#gabow"
                  className="block py-2 px-3 text-white hover:text-yellow-400 transition-all"
                >
                  Sobre Gabow
                </a>
              </li>
              <li>
                <a
                  href="/Equipo"
                  className="block py-2 px-3 text-white hover:text-yellow-400 transition-all"
                >
                  Equipo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
