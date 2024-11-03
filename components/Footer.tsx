import { V0Logo } from './v0logo';

const Footer = () => (
<footer className="bg-gray-900 text-gray-200">
  <div className="custom-screen pt-16">
    {/* Sección Superior */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-10 border-b border-gray-700">
      <div className="mb-6 md:mb-0">
        <h3 className="text-2xl font-bold text-white">
          RD Soluciones Digitales
        </h3>
        <p className="mt-2 text-gray-400 max-w-xs">
          Impulsamos tu presencia digital con soluciones tecnológicas a medida.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 text-gray-400">
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-gray-300">Enlaces útiles</h4>
          <ul className="space-y-1">
            <li>
              <a href="/servicios" className="hover:text-white transition">Servicios</a>
            </li>
            <li>
              <a href="/casos-de-exito" className="hover:text-white transition">Casos de Éxito</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white transition">Blog</a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-white transition">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-gray-300">Síguenos</h4>
          <div className="flex gap-4">
            <a href="https://facebook.com/RDSolucionesDigitales" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com/RDSoluciones" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com/RDSolucionesDigitales" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://linkedin.com/company/RDSolucionesDigitales" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Sección Inferior */}
    <div className="py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} RD Soluciones Digitales. Todos los derechos reservados.</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="/terminos" className="hover:text-gray-300 transition">Términos de Servicio</a>
        <a href="/privacidad" className="hover:text-gray-300 transition">Política de Privacidad</a>
        <a href="/cookies" className="hover:text-gray-300 transition">Política de Cookies</a>
      </div>
    </div>
  </div>
</footer>


);

export default Footer;
