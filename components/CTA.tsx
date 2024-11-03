const CTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2
          className="text-gray-900 text-4xl font-extrabold leading-tight sm:text-5xl"
          id="oss"
        >
          Haz que tus enlaces hablen con{' '}
          <span className="text-indigo-600">PowerQrGPT</span>
        </h2>
        <p className="text-lg text-gray-700 sm:text-xl">
          Olvídate de los códigos QR aburridos. Con PowerQrGPT, cada enlace
          cobra vida. Perfecto para hostelería, turismo y cualquier negocio que
          quiera dejar huella, QrGPT convierte tus enlaces en una experiencia
          visual, lista para sorprender y compartir.
        </p>
        <p className="text-sm text-gray-500">
          ¿Curiosidad por el código? ¡Échale un vistazo en GitHub!
        </p>

        <a
          href="https://github.com/AndrewUru/power-qr"
          className="inline-flex items-center gap-3 font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 py-3 px-6 rounded-full shadow-lg transition duration-200 ease-in-out"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
          </svg>
          <span>Deja una estrella en GitHub</span>
        </a>
      </div>
    </div>
  </SectionWrapper>
);

const SectionWrapper = ({ children, ...props }: any) => (
  <section {...props} className={`py-16 ${props.className || ''}`}>
    {children}
  </section>
);

export default CTA;
