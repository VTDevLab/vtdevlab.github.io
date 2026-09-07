import { site, navLinks } from '../data/data.js';

export function renderFooter() {
  const links = navLinks
    .map(l => `<a href="${l.href}">${l.label}</a>`)
    .join('');

  return `
    <footer class="footer" id="contacto">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <h3 class="footer__logo">${site.name}</h3>
            <p class="footer__tagline">${site.tagline}</p>
          </div>
          <div class="footer__nav">
            <h4>Navegación</h4>
            ${links}
          </div>
          <div class="footer__contact">
            <h4>Contacto</h4>
            <p><i data-lucide="phone"></i>${site.phone}</p>
            <p><i data-lucide="mail"></i>${site.email}</p>
            <p><i data-lucide="map-pin"></i>${site.address}</p>
          </div>
          <div class="footer__social">
            <h4>Síguenos</h4>
            <div class="footer__social-links">
              <a href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a>
              <a href="#" aria-label="Facebook"><i data-lucide="facebook"></i></a>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <p>&copy; ${new Date().getFullYear()} ${site.name}. Todos los derechos reservados.</p>
          <div class="footer__legal">
            <a href="#">Aviso legal</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
    <div class="demo-notice">
      <p>Web de demostración. Los alojamientos, precios y reservas mostrados son ficticios.</p>
    </div>
  `;
}
