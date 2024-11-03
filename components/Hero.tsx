'use client';

import Image from 'next/image';
import NavLink from './NavLink';

let heroImages = ['/1.png', '/6.png', '/3.png', '/4.png', '/5.png', '/2.png'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 blur-[100px] opacity-60"
        style={{
          background:
            'linear-gradient(225deg, rgba(91, 33, 182, 0.4), rgba(245, 56, 85, 0.4))',
        }}
      />
      <div className="custom-screen pt-28 text-gray-600 relative z-10">
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
              className="text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 py-2 px-4 rounded-md transition transform hover:scale-105"
            >
              Genera tu QR ahora
            </NavLink>
            <NavLink
              target="_blank"
              href="https://github.com/AndrewUru/power-qr"
              className="text-gray-700 border border-gray-300 hover:bg-gray-100 py-2 px-4 rounded-md transition transform hover:scale-105"
              scroll={false}
            >
              Quiero saber más
            </NavLink>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 pt-10 animate-gallery">
            {heroImages.map((image, idx) => (
              <Image
                key={idx}
                alt="Ejemplo de código QR"
                src={image}
                width={500}
                height={500}
                className="rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:brightness-110"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
