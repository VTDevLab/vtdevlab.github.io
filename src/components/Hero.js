import { site, heroImage } from '../data/data.js';

export function renderHero() {
  return `
    <section class="hero" id="hero">
      <div class="hero__bg">
        <img src="${heroImage}" alt="Vista panorámica del alojamiento" class="hero__img" loading="eager" />
        <div class="hero__overlay"></div>
      </div>
      <div class="hero__content container">
        <p class="hero__eyebrow">${site.tagline}</p>
        <h1 class="hero__title">${site.name}</h1>
        <p class="hero__subtitle">${site.heroSubtitle}</p>
        <a href="#search" class="btn btn--hero">${site.heroCta}</a>
      </div>
    </section>
  `;
}
