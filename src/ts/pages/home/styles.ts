import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    width: 100%;
    min-width: 0;
  }

  .home-page {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: 100%;
    min-width: 0;
    min-height: 100vh;
  }

  capabilities-nav {
    position: sticky;
    top: var(--header-height);
    z-index: 90;

    display: block;
    width: 100%;
  }
`;
