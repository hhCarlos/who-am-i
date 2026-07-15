import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    width: 100%;
  }

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
    justify-content: center;
    gap: var(--space-6);

    width: min(100%, var(--content-max-width));
    min-height: var(--capabilities-nav-height);
    margin-inline: auto;
    padding-inline: var(--space-6);
  }
`;
