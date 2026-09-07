import { locationData } from '../data/data.js';

export function renderLocation() {
  const highlights = locationData.highlights
    .map(h => `
      <div class="location__highlight">
        <i data-lucide="${h.icon}"></i>
        <span>${h.text}</span>
      </div>
    `)
    .join('');

  return `
    <section class="location" id="ubicacion">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${locationData.title}</h2>
          <p class="section-subtitle">${locationData.description}</p>
        </div>
        <div class="location__inner">
          <div class="location__map">
            <iframe
              src="${locationData.mapEmbedUrl}"
              title="Ubicación del alojamiento"
              loading="lazy"
              referrerpolicy="no-referrer"
            ></iframe>
          </div>
          <div class="location__highlights">${highlights}</div>
        </div>
      </div>
    </section>
  `;
}
