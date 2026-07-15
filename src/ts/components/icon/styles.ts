import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    flex-shrink: 0;

    width: var(--icon-size);
    height: var(--icon-size);

    color: currentColor;
  }

  :host([size='sm']) {
    --icon-size: 1.6rem;
  }

  :host([size='md']) {
    --icon-size: 2.4rem;
  }

  :host([size='lg']) {
    --icon-size: 3.2rem;
  }

  :host([size='xl']) {
    --icon-size: 4.8rem;
  }

  :host([size='xxl']) {
    --icon-size: 5.2rem;
  }

  :host([size='mega']) {
    --icon-size: 7.2rem;
  }

  :host([size='display']) {
    --icon-size: clamp(8rem, 16vw, 16rem);
  }

  .app-icon {
    display: inline-flex;

    width: 100%;
    height: 100%;
  }

  svg {
    display: block;

    width: 100%;
    height: 100%;
  }
`;
