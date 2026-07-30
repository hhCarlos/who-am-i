import { html } from 'lit';

export const template = () => html`
  <nav
    class="capabilities-nav"
    aria-label="Áreas de experiencia"
  >
    <div class="capabilities-nav__container">
      <a class="capabilities-nav__link">
        Frontend
      </a>

      <a class="capabilities-nav__link">
        Backend y APIs
      </a>

      <a class="capabilities-nav__link">
        Datos y persistencia
      </a>

      <a class="capabilities-nav__link">
        Calidad y automatización
      </a>

      <a class="capabilities-nav__link">
        Arquitectura y cloud
      </a>
    </div>
  </nav>
`;
