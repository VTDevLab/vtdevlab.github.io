import { site, navLinks } from '../data/data.js';

export function renderHeader() {
  const links = navLinks
    .map(l => `<a href="${l.href}" class="nav__link">${l.label}</a>`)
    .join('');

  return `
    <header class="header" id="header">
      <div class="header__inner container">
        <a href="#" class="header__logo">${site.name}</a>
        <nav class="nav" id="main-nav">
          ${links}
        </nav>
        <a href="#apartamentos" class="btn btn--primary header__cta">Reservar</a>
        <button class="header__hamburger" id="hamburger" aria-label="Menú" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `;
}

export function initHeader() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  const header = document.getElementById('header');

  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('nav--open');
    hamburger.classList.toggle('header__hamburger--open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      hamburger.classList.remove('header__hamburger--open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('header--scrolled', y > 60);
    header.classList.toggle('header--hidden', y > lastScroll && y > 300);
    lastScroll = y;
  }, { passive: true });
}
