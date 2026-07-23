import { html } from 'lit';

import { capabilitySections } from './sections';

export const template = () => html`
  <div class="capabilities-showcase">
    ${capabilitySections.map(
      ({ id, heading, description, gallery }) => html`
        <capability-section
          .sectionId=${id}
          .heading=${heading}
          .description=${description}
          .gallery=${gallery}
        ></capability-section>
      `,
    )}
  </div>
`;
