import { faqs } from '../data/data.js';

export function renderFAQ() {
  const items = faqs
    .map((f, i) => `
      <div class="faq__item">
        <button class="faq__question" aria-expanded="false" aria-controls="faq-answer-${i}">
          <span>${f.question}</span>
          <i data-lucide="chevron-down" class="faq__chevron"></i>
        </button>
        <div class="faq__answer" id="faq-answer-${i}" hidden>
          <p>${f.answer}</p>
        </div>
      </div>
    `)
    .join('');

  return `
    <section class="faq" id="faq">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Preguntas frecuentes</h2>
          <p class="section-subtitle">Resolvemos tus dudas antes de que las tengas</p>
        </div>
        <div class="faq__list">${items}</div>
      </div>
    </section>
  `;
}

export function initFAQ() {
  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = document.getElementById(btn.getAttribute('aria-controls'));
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      document.querySelectorAll('.faq__question').forEach(other => {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          const otherAnswer = document.getElementById(other.getAttribute('aria-controls'));
          if (otherAnswer) otherAnswer.hidden = true;
        }
      });

      btn.setAttribute('aria-expanded', !isOpen);
      answer.hidden = isOpen;
    });
  });
}
