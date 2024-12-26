const Footer = () => (
  <footer className="bg-gray-900 text-gray-200">
    <div className="custom-screen pt-16">
      {/* Sección Superior */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-10 border-b border-gray-700">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold text-white">ElSaltoWeb.es</h3>
          <p className="mt-2 text-gray-400 max-w-xs">
            Impulsamos tu presencia digital con soluciones tecnológicas a
            medida.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 text-gray-400">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-300">
              Enlaces útiles
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://www.elsaltoweb.es"
                  className="hover:text-white transition"
                >
                  elsaltoweb.es
                </a>
              </li>
              <li>
                <a
                  href="https://www.elsaltoweb.es/proyectos"
                  className="hover:text-white transition"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="https://www.elsaltoweb.es/recursos"
                  className="hover:text-white transition"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="mailto:atobio459@gmail.com"
                  className="hover:text-white transition"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-300">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61559127094568"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>

              <a
                href="https://www.instagram.com/elsaltoweb/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/andr%C3%A9s-tob%C3%ADo-037b33241/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Inferior */}
      <div className="py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} ElSaltoWeb.es. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="/terminos" className="hover:text-gray-300 transition">
            Términos de Servicio
          </a>
          <a href="/privacidad" className="hover:text-gray-300 transition">
            Política de Privacidad
          </a>
          <a href="/cookies" className="hover:text-gray-300 transition">
            Política de Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
