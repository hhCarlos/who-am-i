import { html } from 'lit';

export const template = () => html`
  <nav
    class="capabilities-nav"
    aria-label="Áreas de experiencia"
  >
    <div class="capabilities-nav__container">
      <a class="capabilities-nav__link" href="#frontend">
        Frontend
      </a>

      <a class="capabilities-nav__link" href="#backend">
        Backend y APIs
      </a>

      <a class="capabilities-nav__link" href="#data">
        Datos y persistencia
      </a>

      <a class="capabilities-nav__link" href="#quality">
        Calidad y automatización
      </a>

      <a class="capabilities-nav__link" href="#cloud">
        Arquitectura y cloud
      </a>
    </div>
  </nav>
`;
