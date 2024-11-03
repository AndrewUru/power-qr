'use client';

import Image from 'next/image';
import NavLink from './NavLink';

let heroImages = ['/1.png', '/6.png', '/3.png', '/4.png', '/5.png', '/2.png'];

export default function Hero() {
  return (
    <section>
      <div className="custom-screen pt-28 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Dale vida a tus enlaces con IA
          </h1>
          <p className="max-w-xl mx-auto">
            Con PowerQRGPT, crear un código QR nunca fue tan fácil (ni tan
            cool). Deja que la IA haga el trabajo y obtén un QR con estilo en
            segundos. <br></br>Y sí, ¡es completamente gratis!
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
            <NavLink
              href="/start"
              className="text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 py-2 px-4 rounded-md transition"
            >
              Genera tu QR ahora
            </NavLink>
            <NavLink
              target="_blank"
              href="https://github.com/Nutlope/qrGPT"
              className="text-gray-700 border border-gray-300 hover:bg-gray-100 py-2 px-4 rounded-md transition"
              scroll={false}
            >
              Quiero saber más
            </NavLink>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 pt-10">
            {heroImages.map((image, idx) => (
              <Image
                key={idx}
                alt="Ejemplo de código QR"
                src={image}
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
