import { themes, fontUrls } from '../data/data.js';

export function renderThemeSwitcher() {
  const buttons = themes
    .map(t => `<button class="theme-btn" data-theme-id="${t.id}">${t.label}</button>`)
    .join('');

  return `
    <div class="theme-switcher" role="navigation" aria-label="Selector de diseño">
      <span class="theme-switcher__label">Ver diseño:</span>
      <div class="theme-switcher__options">${buttons}</div>
    </div>
  `;
}

function loadThemeFonts(themeId) {
  const link = document.getElementById('theme-fonts');
  if (link) {
    link.href = fontUrls[themeId] || fontUrls.mediterranean;
  }
}

function updateActiveButton(themeId) {
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.themeId === themeId);
  });
}

export function setTheme(themeId) {
  document.body.setAttribute('data-theme', themeId);
  localStorage.setItem('apartment-demo-theme', themeId);
  loadThemeFonts(themeId);
  updateActiveButton(themeId);
}

export function initThemeSwitcher() {
  const saved = localStorage.getItem('apartment-demo-theme') || 'mediterranean';
  setTheme(saved);

  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => setTheme(btn.dataset.themeId));
  });
}
