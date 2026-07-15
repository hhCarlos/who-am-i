import { html } from 'lit';

export const template = () => html`
  <section class="page-section page-section--md home-hero">
    <div class="home-hero__title">
      <h2>¡Bienvenidos!</h2>
      <app-icon name="default" size="mega"></app-icon>
    </div>

    <p class="home-hero__description">
      Esta es una breve descripción de la sección de héroe.
    </p>

    <p class="home-hero__description">
      Construyo aplicaciones web, APIs y experiencias digitales que realmente
      funcionan.
    </p>

    <p class="home-hero__description">
      Desarrollo enfocado en soluciones de frontend, backend, automatización de
      pruebas y soluciones en la nube.
    </p>
  </section>
`;