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
    <div class="capability-section__content">
      <h2
        id="${sectionId}-title"
        class="capability-section__title"
      >
        ${heading}
      </h2>

      <p class="capability-section__description">
        ${description}
      </p>
    </div>

    <div
      class="capability-section__gallery"
      aria-label="Tecnologías relacionadas con ${heading}"
    >
      ${gallery.map(
        (item) => html`
          <span class="capability-section__gallery-item">
            ${item}
          </span>
        `,
      )}
    </div>
  </section>
`;
