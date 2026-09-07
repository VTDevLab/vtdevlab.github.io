import { apartments } from '../data/data.js';

function localDateStr(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function renderBookingSearch() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  return `
    <section class="search" id="search">
      <div class="container">
        <div class="search__card">
          <h2 class="search__title">Encuentra tu apartamento ideal</h2>
          <form class="search__form" id="search-form">
            <div class="search__field">
              <label for="checkin">Entrada</label>
              <input type="date" id="checkin" name="checkin" value="${localDateStr(tomorrow)}" min="${localDateStr(today)}" />
            </div>
            <div class="search__field">
              <label for="checkout">Salida</label>
              <input type="date" id="checkout" name="checkout" value="${localDateStr(dayAfter)}" min="${localDateStr(tomorrow)}" />
            </div>
            <div class="search__field">
              <label for="guests">Huéspedes</label>
              <select id="guests" name="guests">
                <option value="1">1 huésped</option>
                <option value="2" selected>2 huéspedes</option>
                <option value="3">3 huéspedes</option>
                <option value="4">4 huéspedes</option>
                <option value="5">5 huéspedes</option>
                <option value="6">6 huéspedes</option>
              </select>
            </div>
            <button type="submit" class="btn btn--primary search__btn">Buscar disponibilidad</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function filterApartments(guests) {
  const cards = document.querySelectorAll('.apt-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const id = parseInt(card.dataset.aptId, 10);
    const apt = apartments.find(a => a.id === id);
    const fits = apt && apt.capacity >= guests;
    card.classList.toggle('apt-card--hidden', !fits);
    if (fits) visibleCount++;
  });

  let emptyMsg = document.querySelector('.apartments__empty');
  if (visibleCount === 0) {
    if (!emptyMsg) {
      emptyMsg = document.createElement('div');
      emptyMsg.className = 'apartments__empty';
      emptyMsg.innerHTML = '<p>No hay apartamentos disponibles para el número de huéspedes seleccionado. Prueba con menos huéspedes.</p>';
      document.querySelector('.apartments__grid')?.after(emptyMsg);
    }
    emptyMsg.hidden = false;
  } else if (emptyMsg) {
    emptyMsg.hidden = true;
  }
}

export function initBookingSearch() {
  const form = document.getElementById('search-form');
  const checkin = document.getElementById('checkin');
  const checkout = document.getElementById('checkout');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (new Date(checkout.value + 'T00:00:00') <= new Date(checkin.value + 'T00:00:00')) {
      const next = new Date(checkin.value + 'T00:00:00');
      next.setDate(next.getDate() + 1);
      checkout.value = localDateStr(next);
    }

    const guests = parseInt(document.getElementById('guests').value, 10) || 2;
    filterApartments(guests);

    const apt = document.getElementById('apartamentos');
    if (apt) {
      const y = apt.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });

  checkin.addEventListener('change', () => {
    const next = new Date(checkin.value + 'T00:00:00');
    next.setDate(next.getDate() + 1);
    checkout.min = localDateStr(next);
    if (new Date(checkout.value + 'T00:00:00') <= new Date(checkin.value + 'T00:00:00')) {
      checkout.value = localDateStr(next);
    }
  });
}

export function getSearchDates() {
  const checkin = document.getElementById('checkin')?.value;
  const checkout = document.getElementById('checkout')?.value;
  const guests = document.getElementById('guests')?.value;
  return { checkin, checkout, guests: parseInt(guests, 10) || 2 };
}
