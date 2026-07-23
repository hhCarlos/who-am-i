import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  /* =====================================================
     MOBILE FIRST
     ===================================================== */

  .home-hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-4);

    margin-bottom: var(--space-8);
    padding-inline: var(--space-4);
  }

  .home-hero__title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);

    color: var(--color-text);
  }

  .home-hero__title h1 {
    margin: 0;

    font-size: var(--font-size-3xl);
    line-height: var(--line-height-tight);
    letter-spacing: var(--letter-spacing-tight);
  }

  .home-hero__title app-icon {
    align-self: flex-end;
  }

  .home-hero__description {
    width: 100%;
    max-width: 68rem;
    margin: 0;

    color: var(--color-text-muted);

    font-size: var(--font-size-md);
    line-height: var(--line-height-body);
  }

  /* =====================================================
     DESKTOP — 1024px EN ADELANTE
     ===================================================== */

  @media (min-width: 64em) {
    .home-hero {
      gap: var(--space-4);

      margin: var(--space-14) auto;
      padding-inline: 0;
    }

    .home-hero__title {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .home-hero__title h1 {
      font-size: var(--font-size-page-title);
    }

    .home-hero__title app-icon {
      align-self: auto;
    }

    .home-hero__description {
      font-size: var(--font-size-lg);
    }
  }
`;
