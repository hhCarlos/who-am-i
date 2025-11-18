import { css } from 'lit';

export const styles = css`
  :host {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    background: var(--color-bg, white);
    color: var(--color-font, black);
    font-family: 'Inter', system-ui, sans-serif;
  }

  header,
  footer {
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  main {
    padding: 1rem;
    min-height: 90vh;
  }
`;
