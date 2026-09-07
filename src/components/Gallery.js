import { galleryImages } from '../data/data.js';

export function renderGallery() {
  const items = galleryImages
    .map((img, i) => `
      <div class="gallery__item" style="--i:${i}">
        <img src="${img.src}" alt="${img.alt}" class="gallery__img" loading="lazy" />
      </div>
    `)
    .join('');

  return `
    <section class="gallery" id="galeria">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Galería</h2>
          <p class="section-subtitle">Descubre cada rincón de nuestros apartamentos y su entorno</p>
        </div>
        <div class="gallery__grid">${items}</div>
      </div>
    </section>
  `;
}

export function initGallery() {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.hidden = true;
  lightbox.innerHTML = `
    <button class="lightbox__close" aria-label="Cerrar"><i data-lucide="x"></i></button>
    <button class="lightbox__prev" aria-label="Anterior"><i data-lucide="chevron-left"></i></button>
    <img class="lightbox__img" src="" alt="" />
    <button class="lightbox__next" aria-label="Siguiente"><i data-lucide="chevron-right"></i></button>
  `;
  document.body.appendChild(lightbox);

  if (window.lucideRefresh) window.lucideRefresh();

  let current = 0;

  function show(index) {
    current = (index + galleryImages.length) % galleryImages.length;
    const img = galleryImages[current];
    lightbox.querySelector('.lightbox__img').src = img.src.replace('w=600', 'w=1200').replace('h=400', 'h=800');
    lightbox.querySelector('.lightbox__img').alt = img.alt;
    lightbox.hidden = false;
    document.body.classList.add('no-scroll');
  }

  function hide() {
    lightbox.hidden = true;
    document.body.classList.remove('no-scroll');
  }

  document.querySelectorAll('.gallery__item').forEach((item, i) => {
    item.addEventListener('click', () => show(i));
  });

  lightbox.querySelector('.lightbox__close').addEventListener('click', hide);
  lightbox.querySelector('.lightbox__prev').addEventListener('click', () => show(current - 1));
  lightbox.querySelector('.lightbox__next').addEventListener('click', () => show(current + 1));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) hide();
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') hide();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
}
