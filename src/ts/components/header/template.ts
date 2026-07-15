import { html } from 'lit';

export const template = () => html`
  <header class="site-header">
    <div class="site-header__container">
      <a
        class="site-header__brand"
        href="#home"
        aria-label="Ir al inicio"
      >
        Who Am I
      </a>

      <nav
        class="site-header__nav"
        aria-label="Navegación principal"
      >
        <a class="site-header__link" href="#home">
          Inicio
        </a>

        <a class="site-header__link" href="#projects">
          Proyectos
        </a>

        <a class="site-header__link" href="#about">
          Sobre mí
        </a>

        <a class="site-header__link" href="#contact">
          Contacto
        </a>
      </nav>
    </div>
  </header>
`;
