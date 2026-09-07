import { aboutText } from '../data/data.js';

export function renderAbout() {
  const paras = aboutText.paragraphs
    .map(p => `<p>${p}</p>`)
    .join('');

  return `
    <section class="about" id="sobre">
      <div class="container">
        <div class="about__inner">
          <div class="about__text">
            <h2 class="section-title">${aboutText.title}</h2>
            <div class="about__paragraphs">${paras}</div>
          </div>
          <div class="about__image-wrap">
            <img src="${aboutText.image}" alt="Interior del alojamiento" class="about__img" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  `;
}
