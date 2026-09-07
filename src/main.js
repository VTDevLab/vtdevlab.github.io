import { createIcons } from 'lucide';
import {
  Wifi, Snowflake, Car, Sun, Shirt, Tv, Bath, Waves, CookingPot, Flower2,
  Users, DoorOpen, BedDouble, Ruler, ChevronDown, ChevronLeft, ChevronRight,
  X, Phone, Mail, MapPin, Instagram, Facebook, CheckCircle2, Footprints,
  Store, Plane, Search, Eye, BedSingle, ShowerHead, Maximize, AlertTriangle,
} from 'lucide';

import './styles/base.css';
import './styles/components.css';
import './styles/themes/mediterranean.css';
import './styles/themes/premium.css';
import './styles/themes/natural.css';
import './styles/themes/modern.css';

import { renderThemeSwitcher, initThemeSwitcher } from './components/ThemeSwitcher.js';
import { renderHeader, initHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderBookingSearch, initBookingSearch } from './components/BookingSearch.js';
import { renderApartments, initApartments } from './components/Apartments.js';
import { renderBookingModal, openBookingModal, openDetailModal, initBookingModal } from './components/BookingModal.js';
import { renderGallery, initGallery } from './components/Gallery.js';
import { renderServices } from './components/Services.js';
import { renderAbout } from './components/About.js';
import { renderLocation } from './components/Location.js';
import { renderFAQ, initFAQ } from './components/FAQ.js';
import { renderFinalCTA } from './components/FinalCTA.js';
import { renderFooter } from './components/Footer.js';

const lucideIcons = {
  Wifi, Snowflake, Car, Sun, Shirt, Tv, Bath, Waves, CookingPot, Flower2,
  Users, DoorOpen, BedDouble, Ruler, ChevronDown, ChevronLeft, ChevronRight,
  X, Phone, Mail, MapPin, Instagram, Facebook, CheckCircle2, Footprints,
  Store, Plane, Search, Eye, BedSingle, ShowerHead, Maximize, AlertTriangle,
};

function refreshIcons() {
  createIcons({ icons: lucideIcons, nameAttr: 'data-lucide' });
}

window.lucideRefresh = refreshIcons;

function render() {
  const app = document.getElementById('app');

  app.innerHTML = [
    renderThemeSwitcher(),
    renderHeader(),
    renderHero(),
    renderBookingSearch(),
    renderApartments(),
    renderGallery(),
    renderServices(),
    renderAbout(),
    renderLocation(),
    renderFAQ(),
    renderFinalCTA(),
    renderFooter(),
  ].join('');

  if (!document.getElementById('booking-modal')) {
    app.insertAdjacentHTML('afterend', renderBookingModal());
  }

  refreshIcons();

  initThemeSwitcher();
  initHeader();
  initBookingSearch();
  initApartments(openBookingModal, openDetailModal);
  initBookingModal();
  initGallery();
  initFAQ();
  initSmoothScroll();
  initScrollAnimations();
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') {
        e.preventDefault();
        return;
      }
      let target;
      try { target = document.querySelector(href); } catch (_) { return; }
      if (target) {
        e.preventDefault();
        const offset = 80;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll(
    '.apt-card, .service-card, .gallery__item, .faq__item, .section-header, .about__inner, .location__inner, .final-cta__inner'
  ).forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', render);
} else {
  render();
}
