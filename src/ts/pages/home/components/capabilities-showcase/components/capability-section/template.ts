import { html } from 'lit';

type CapabilitySectionTemplateProperties = {
  sectionId: string;
  heading: string;
  description: string;
  gallery: string[];
};

export const template = ({
  sectionId,
  heading,
  description,
  gallery,
}: CapabilitySectionTemplateProperties) => html`
  <section
    id=${sectionId}
    class="page-section page-section--md capability-section"
    aria-labelledby="${sectionId}-title"
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
        id="${sectionId}-title"
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
