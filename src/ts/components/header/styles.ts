import { css } from 'lit';

export const styles = css`
  :host {
    position: sticky;
    top: 0;
    z-index: 100;

    display: block;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .site-header {
    color: var(--color-header-text);
    background-color: var(--color-header-background);
    border-bottom: 0.3rem solid var(--color-header-border);

    transition:
      color var(--transition-fast),
      background-color var(--transition-fast),
      border-color var(--transition-fast);
  }

  .site-header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-6);

    width: min(100%, var(--content-max-width));
    min-height: var(--header-height);
    margin-inline: auto;
    padding-inline: var(--space-6);
  }

  .site-header__brand {
    flex-shrink: 0;

    color: var(--color-header-text);

    font-size: var(--font-size-lg);
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.05em;
    text-decoration: none;

    transition: color var(--transition-fast);
  }

  .site-header__brand:hover {
    color: var(--color-header-link-active);
  }

  .site-header__nav {
    display: flex;
    align-items: center;
    gap: var(--space-6);
  }

  .site-header__link {
    position: relative;

    padding-block: var(--space-2);

    color: var(--color-header-link);

    font-size: var(--font-size-sm);
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;

    transition: color var(--transition-fast);
  }

  .site-header__link::after {
    content: '';

    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    height: 0.2rem;

    background-color: var(--color-header-link-active);

    transform: scaleX(0);
    transform-origin: right;

    transition: transform var(--transition-base);
  }

  .site-header__link:hover {
    color: var(--color-header-link-hover);
  }

  .site-header__link:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .site-header__link[aria-current='location'] {
    color: var(--color-header-link-active);
  }

  .site-header__link[aria-current='location']::after {
    transform: scaleX(1);
  }

  .site-header__brand:focus-visible,
  .site-header__link:focus-visible {
    border-radius: 0.2rem;
    outline: 0.3rem solid var(--color-focus);
    outline-offset: 0.4rem;
  }

  @media (max-width: 48rem) {
    .site-header__container {
      align-items: flex-start;
      flex-direction: column;
      gap: var(--space-3);

      padding-block: var(--space-4);
    }

    .site-header__nav {
      width: 100%;
      gap: var(--space-4);
      padding-bottom: var(--space-1);

      overflow-x: auto;
      scrollbar-width: thin;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .site-header,
    .site-header__brand,
    .site-header__link,
    .site-header__link::after {
      transition: none;
    }
  }
`;
