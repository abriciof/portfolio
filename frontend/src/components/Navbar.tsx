import { useState } from 'react';

export default function Navbar({titulo}: {titulo: string}) {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo / Nome */}
            <h1 className="text-xl font-bold text-gray-800">{titulo}</h1>

            {/* Links - desktop */}
            <ul className="hidden md:flex space-x-6 text-gray-700">
              <li><a href="#sobre" className="hover:text-blue-500">Sobre</a></li>
              <li><a href="#projetos" className="hover:text-blue-500">Projetos</a></li>
              <li><a href="#contato" className="hover:text-blue-500">Contato</a></li>
            </ul>

            {/* Botão menu mobile */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

        {/* Menu mobile */}
        {menuOpen && (
          <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-700 bg-white">
            <li><a href="#sobre" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500">Sobre</a></li>
            <li><a href="#projetos" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500">Projetos</a></li>
            <li><a href="#contato" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500">Contato</a></li>
          </ul>
        )}
        </nav>
    );
}