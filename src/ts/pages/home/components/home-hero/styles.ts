import { css } from 'lit';

export const styles = css`
  .home-hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-4);

    padding: var(--space-4);
  }

  .home-hero__title {
    margin: 0;

    color: var(--color-text);

    font-size: 4rem;
    line-height: 1.1;
  }

  .home-hero__description {
    max-width: 68rem;
    margin: 0;

    color: var(--color-text-muted);

    font-size: 1.8rem;
    line-height: 1.6;
  }
`;
