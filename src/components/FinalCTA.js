import { site } from '../data/data.js';

export function renderFinalCTA() {
  return `
    <section class="final-cta">
      <div class="container">
        <div class="final-cta__inner">
          <h2 class="final-cta__title">¿Listo para tu escapada?</h2>
          <p class="final-cta__text">Reserva ahora tu apartamento en ${site.name} y empieza a disfrutar del Mediterráneo.</p>
          <a href="#search" class="btn btn--primary btn--lg">Consultar disponibilidad</a>
        </div>
      </div>
    </section>
  `;
}
