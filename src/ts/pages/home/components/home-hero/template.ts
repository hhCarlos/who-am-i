import { html } from 'lit';

export const template = () => html`
  <section class="page-section page-section--md home-hero">
    <div class="home-hero__title">
      <h1>¡Bienvenidos!</h1>

      <app-icon
        name="hero"
        size="mega"
        aria-hidden="true"
      ></app-icon>
    </div>

    <p class="home-hero__description">
      Hola, soy Carlos Enrique Hernández Hernández, desarrollador de software.
    </p>

    <p class="home-hero__description">
      Cuento con varios años de experiencia dentro de la industria, siempre en
      busca de construir código limpio, escalable y mantenible. Me interesa
      comprender las necesidades del negocio y convertirlas en soluciones útiles
      e innovadoras que faciliten el trabajo diario, en lugar de convertir las
      herramientas en un problema más.
    </p>

    <p class="home-hero__description">
      Trabajo en diferentes etapas del desarrollo de un producto: diseño de
      interfaces, construcción de APIs, modelado y persistencia de datos,
      aseguramiento de calidad, automatización de pruebas y despliegue de
      soluciones en la nube.
    </p>
  </section>
`;
