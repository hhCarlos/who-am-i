import { html } from 'lit';

type CapabilitySectionTemplateProperties = {
  heading: string;
  description: string;
  gallery: string[];
};

export const template = ({
  heading,
  description,
  gallery,
}: CapabilitySectionTemplateProperties) => html`
  <section
    class="page-section page-section--md capability-section"
    aria-labelledby="capability-title"
  >
    <figure class="capability-section__gallery">
      ${gallery.map(
        (item) => html`
          <img 
            class="gallery__img" 
            src="${item}" 
          />
        `,
      )}
    </figure>
    <div class="capability-section__content">
      <h3 
        id="capability-heading"
        class="content__title"
      >
        ${heading}
      </h3>

      <p class="content__description">
        ${description}
      </p>
    </div>
  </section>
`;
