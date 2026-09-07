import { services } from '../data/data.js';

export function renderServices() {
  const cards = services
    .map(s => `
      <div class="service-card">
        <div class="service-card__icon"><i data-lucide="${s.icon}"></i></div>
        <h3 class="service-card__title">${s.title}</h3>
        <p class="service-card__desc">${s.description}</p>
      </div>
    `)
    .join('');

  return `
    <section class="services" id="servicios">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Servicios incluidos</h2>
          <p class="section-subtitle">Todo lo que necesitas para una estancia perfecta</p>
        </div>
        <div class="services__grid">${cards}</div>
      </div>
    </section>
  `;
}
