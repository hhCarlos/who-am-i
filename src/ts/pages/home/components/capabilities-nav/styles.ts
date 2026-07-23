import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    width: 100%;
    min-width: 0;
  }

  /* =====================================================
     MOBILE FIRST
     ===================================================== */

  .capabilities-nav {
    width: 100%;
    min-height: var(--capabilities-nav-height);

    color: var(--color-text);
    background-color: var(--color-surface);
    border-bottom: 0.1rem solid var(--color-border);
  }

  .capabilities-nav__container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--space-4);

    width: 100%;
    min-height: var(--capabilities-nav-height);
    margin-inline: auto;
    padding-inline: var(--space-4);

    overflow-x: auto;
    overflow-y: hidden;

    scrollbar-width: thin;
  }

  .capabilities-nav__link {
    flex-shrink: 0;

    padding-block: var(--space-2);

    color: var(--color-text-muted);

    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;

    transition: color 180ms ease;
  }

  .capabilities-nav__link:hover {
    color: var(--color-accent);
  }

  .capabilities-nav__link:focus-visible {
    outline: 0.2rem solid var(--color-focus);
    outline-offset: 0.3rem;
  }

  /* =====================================================
     DESKTOP — 1024px EN ADELANTE
     ===================================================== */

  @media (min-width: 64em) {
    .capabilities-nav__container {
      justify-content: center;
      gap: var(--space-6);

      width: min(100%, var(--content-max-width));
      padding-inline: var(--space-6);

      overflow-x: visible;
    }

    .capabilities-nav__link {
      font-size: var(--font-size-md);
    }
  }
`;
