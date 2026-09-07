import { site, amenityLabels, amenityIcons } from '../data/data.js';
import { getSearchDates } from './BookingSearch.js';

let triggerElement = null;

function calcNights(checkin, checkout) {
  const d1 = new Date(checkin + 'T00:00:00');
  const d2 = new Date(checkout + 'T00:00:00');
  return Math.max(1, Math.round((d2 - d1) / (1000 * 60 * 60 * 24)));
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
}

function getFocusable(container) {
  return [...container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )].filter(el => !el.disabled && el.offsetParent !== null);
}

function renderDetailContent(apt) {
  const amenities = apt.amenities
    .map(key => {
      const icon = amenityIcons[key] || 'check';
      const label = amenityLabels[key] || key;
      return `<li class="modal__amenity"><i data-lucide="${icon}"></i>${label}</li>`;
    })
    .join('');

  return `
    <div class="modal__content" role="dialog" aria-modal="true" aria-labelledby="modal-heading">
      <button class="modal__close" id="modal-close" aria-label="Cerrar">
        <i data-lucide="x"></i>
      </button>
      <img src="${apt.image}" alt="${apt.name}" class="modal__detail-img" />
      <div class="modal__body">
        <h2 class="modal__title" id="modal-heading">${apt.name}</h2>
        <p class="modal__detail-desc">${apt.description}</p>
        <div class="modal__detail-specs">
          <div class="modal__spec"><i data-lucide="users"></i><span>${apt.capacity} personas</span></div>
          <div class="modal__spec"><i data-lucide="door-open"></i><span>${apt.bedrooms} habitaciones</span></div>
          <div class="modal__spec"><i data-lucide="bed-double"></i><span>${apt.beds} camas</span></div>
          <div class="modal__spec"><i data-lucide="shower-head"></i><span>${apt.bathrooms} baños</span></div>
          <div class="modal__spec"><i data-lucide="maximize"></i><span>${apt.size} m²</span></div>
        </div>
        <h3 class="modal__amenities-title">Servicios incluidos</h3>
        <ul class="modal__amenities-list">${amenities}</ul>
        <div class="modal__detail-footer">
          <div class="modal__detail-price">
            <span class="modal__detail-price-value">${apt.price}€</span>
            <span class="modal__detail-price-unit">/noche</span>
          </div>
          <button class="btn btn--primary" id="modal-to-booking" data-apt-id="${apt.id}">Reservar este apartamento</button>
        </div>
      </div>
    </div>
  `;
}

function renderCapacityError(apt) {
  const { guests } = getSearchDates();
  return `
    <div class="modal__content" role="dialog" aria-modal="true" aria-labelledby="modal-heading">
      <button class="modal__close" id="modal-close" aria-label="Cerrar">
        <i data-lucide="x"></i>
      </button>
      <div class="modal__body" style="padding-top: 36px;">
        <div class="modal__success-icon" style="color: var(--color-text-muted);"><i data-lucide="alert-triangle"></i></div>
        <h2 class="modal__title" id="modal-heading" style="text-align: center; margin-bottom: 12px;">Capacidad superada</h2>
        <p style="text-align: center; color: var(--color-text-muted); margin-bottom: 8px;">
          Has seleccionado <strong>${guests} huéspedes</strong>, pero <strong>${apt.name}</strong> admite un máximo de <strong>${apt.capacity} personas</strong>.
        </p>
        <p style="text-align: center; color: var(--color-text-muted); margin-bottom: 24px;">
          Reduce el número de huéspedes en el buscador o elige otro apartamento.
        </p>
        <button class="btn btn--secondary" id="modal-close-capacity" style="width: 100%;">Entendido</button>
      </div>
    </div>
  `;
}

function renderBookingContent(apt) {
  const { checkin, checkout, guests } = getSearchDates();
  const nights = calcNights(checkin, checkout);
  const subtotal = apt.price * nights;
  const cleaning = site.cleaningFee;
  const total = subtotal + cleaning;

  return `
    <div class="modal__content" role="dialog" aria-modal="true" aria-labelledby="modal-heading">
      <button class="modal__close" id="modal-close" aria-label="Cerrar">
        <i data-lucide="x"></i>
      </button>
      <div class="modal__header">
        <h2 class="modal__title" id="modal-heading">Resumen de reserva</h2>
      </div>
      <div class="modal__body" id="modal-booking-body">
        <div class="modal__apt">
          <img src="${apt.image}" alt="${apt.name}" class="modal__apt-img" />
          <div class="modal__apt-info">
            <h3>${apt.name}</h3>
            <p>${apt.capacity} personas · ${apt.bedrooms} hab. · ${apt.size} m²</p>
          </div>
        </div>
        <div class="modal__dates">
          <div class="modal__date-item">
            <span class="modal__label">Entrada</span>
            <span class="modal__value">${formatDate(checkin)}</span>
          </div>
          <div class="modal__date-item">
            <span class="modal__label">Salida</span>
            <span class="modal__value">${formatDate(checkout)}</span>
          </div>
          <div class="modal__date-item">
            <span class="modal__label">Huéspedes</span>
            <span class="modal__value">${guests}</span>
          </div>
        </div>
        <div class="modal__breakdown">
          <div class="modal__line">
            <span>${apt.price}€ × ${nights} noche${nights > 1 ? 's' : ''}</span>
            <span>${subtotal}€</span>
          </div>
          <div class="modal__line">
            <span>Limpieza</span>
            <span>${cleaning}€</span>
          </div>
          <div class="modal__line modal__line--total">
            <span>Total</span>
            <span>${total}€</span>
          </div>
        </div>
        <button class="btn btn--primary modal__confirm" id="modal-confirm">Continuar con la reserva</button>
      </div>
      <div class="modal__success" id="modal-success" hidden>
        <div class="modal__success-icon"><i data-lucide="check-circle-2"></i></div>
        <h3>¡Gracias por tu interés!</h3>
        <p>Esta funcionalidad estará disponible en la versión definitiva de la web.</p>
        <button class="btn btn--secondary" id="modal-success-close">Entendido</button>
      </div>
    </div>
  `;
}

export function renderBookingModal() {
  return `<div class="modal" id="booking-modal" hidden></div>`;
}

function setAppInert(inert) {
  const app = document.getElementById('app');
  if (app) app.inert = inert;
}

function openModal(html) {
  const modal = document.getElementById('booking-modal');
  modal.innerHTML = html;
  modal.hidden = false;
  document.body.classList.add('no-scroll');
  setAppInert(true);

  if (window.lucideRefresh) window.lucideRefresh();

  const closeBtn = modal.querySelector('#modal-close');
  if (closeBtn) closeBtn.focus();
}

export function openBookingModal(apt) {
  if (!triggerElement) triggerElement = document.activeElement;

  const { guests } = getSearchDates();
  if (guests > apt.capacity) {
    openModal(renderCapacityError(apt));
    document.getElementById('modal-close-capacity')?.addEventListener('click', closeModal);
    return;
  }

  openModal(renderBookingContent(apt));

  document.getElementById('modal-confirm').addEventListener('click', () => {
    const body = document.getElementById('modal-booking-body');
    const success = document.getElementById('modal-success');
    if (body) body.hidden = true;
    if (success) {
      success.hidden = false;
      if (window.lucideRefresh) window.lucideRefresh();
      const closeBtn = success.querySelector('#modal-success-close');
      if (closeBtn) closeBtn.focus();
    }
  });

  document.getElementById('modal-success-close')?.addEventListener('click', closeModal);
}

export function openDetailModal(apt) {
  triggerElement = document.activeElement;
  openModal(renderDetailContent(apt));

  document.getElementById('modal-to-booking')?.addEventListener('click', () => {
    openBookingModal(apt);
  });
}

function closeModal() {
  const modal = document.getElementById('booking-modal');
  modal.hidden = true;
  modal.innerHTML = '';
  document.body.classList.remove('no-scroll');
  setAppInert(false);
  if (triggerElement && triggerElement.focus) {
    triggerElement.focus();
  }
  triggerElement = null;
}

export function initBookingModal() {
  const modal = document.getElementById('booking-modal');

  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;

    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    if (e.key === 'Tab') {
      const focusable = getFocusable(modal);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}
