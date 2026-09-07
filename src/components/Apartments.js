import { apartments, amenityLabels, amenityIcons } from '../data/data.js';

function renderAmenityTag(key) {
  const icon = amenityIcons[key] || 'check';
  const label = amenityLabels[key] || key;
  return `<span class="amenity-tag"><i data-lucide="${icon}"></i>${label}</span>`;
}

function renderCard(apt) {
  const amenities = apt.amenities
    .slice(0, 4)
    .map(renderAmenityTag)
    .join('');

  return `
    <article class="apt-card" data-apt-id="${apt.id}">
      <div class="apt-card__image-wrap">
        <img src="${apt.image}" alt="${apt.name}" class="apt-card__img" loading="lazy" />
        <span class="apt-card__price">${apt.price}€<small>/noche</small></span>
      </div>
      <div class="apt-card__body">
        <h3 class="apt-card__name">${apt.name}</h3>
        <p class="apt-card__desc">${apt.description}</p>
        <div class="apt-card__meta">
          <span><i data-lucide="users"></i>${apt.capacity} personas</span>
          <span><i data-lucide="door-open"></i>${apt.bedrooms} hab.</span>
          <span><i data-lucide="bed-double"></i>${apt.beds} camas</span>
          <span><i data-lucide="ruler"></i>${apt.size} m²</span>
        </div>
        <div class="apt-card__amenities">${amenities}</div>
        <div class="apt-card__actions">
          <button class="btn btn--secondary btn-detail" data-apt-id="${apt.id}">Ver apartamento</button>
          <button class="btn btn--primary btn-reserve" data-apt-id="${apt.id}">Reservar</button>
        </div>
      </div>
    </article>
  `;
}

export function renderApartments() {
  const cards = apartments.map(renderCard).join('');

  return `
    <section class="apartments" id="apartamentos">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nuestros apartamentos</h2>
          <p class="section-subtitle">Espacios cuidadosamente diseñados para que disfrutes de tu estancia</p>
        </div>
        <div class="apartments__grid">${cards}</div>
      </div>
    </section>
  `;
}

export function initApartments(openBooking, openDetail) {
  document.querySelectorAll('.btn-reserve').forEach(btn => {
    btn.addEventListener('click', () => {
      const apt = apartments.find(a => a.id === parseInt(btn.dataset.aptId, 10));
      if (apt) openBooking(apt);
    });
  });

  document.querySelectorAll('.btn-detail').forEach(btn => {
    btn.addEventListener('click', () => {
      const apt = apartments.find(a => a.id === parseInt(btn.dataset.aptId, 10));
      if (apt) openDetail(apt);
    });
  });
}
