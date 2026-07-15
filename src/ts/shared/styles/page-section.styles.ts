import { css } from 'lit';

export const pageSectionStyles = css`
  .page-section {
    width: calc(100% - (var(--page-gutter) * 2));
    margin-inline: auto;
  }

  .page-section--md {
    max-width: var(--page-section-md-max-width);
    min-height: var(--page-section-md-min-height);
  }
`;
