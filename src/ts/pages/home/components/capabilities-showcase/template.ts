import { html } from 'lit';

import { capabilitySections } from './sections';

export const template = () => html`
  <div class="capabilities-showcase">
    ${capabilitySections.map(
      ({ id, heading, description, gallery, reverse }) => html`
        <capability-section
          id=${id}
          .heading=${heading}
          .description=${description}
          .gallery=${gallery}
          .reverse=${reverse ?? false}
        ></capability-section>
      `,
    )}
  </div>
`;
