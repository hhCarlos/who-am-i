import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  /* =====================================================
     MOBILE FIRST
     Galería arriba y contenido abajo
     ===================================================== */

  .capability-section {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      'gallery'
      'content';

    width: 100%;
    padding: var(--space-4) 0;
    border-top: 0.1rem solid var(--ink-500);

    background-color: var(--color-background);
  }

  .capability-section__gallery {
    position: relative;
    grid-area: gallery;

    width: 100%;
    min-height: 24rem;
    margin: 0;
  }

  .capability-section__content {
    grid-area: content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-2);

    min-width: 0;
    padding: var(--space-4);
  }

  .content__title {
    margin: 0;

    font-size: var(--font-size-2xl);
    line-height: var(--line-height-heading);
  }

  .content__description {
    margin: 0;

    font-size: var(--font-size-md);
    line-height: var(--line-height-body);
  }

  .gallery__img {
    position: absolute;

    display: block;
    height: 9rem;

    object-fit: contain;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0.2rem 0.1rem var(--shadow-color);
  }

  .gallery__img:nth-child(1) {
    top: 28%;
    left: 32%;
    z-index: 4;

    width: 14rem;
  }

  .gallery__img:nth-child(2) {
    top: 37%;
    left: 68%;
    z-index: 3;

    width: 13rem;
  }

  .gallery__img:nth-child(3) {
    top: 69%;
    left: 35%;
    z-index: 2;

    width: 14rem;
  }

  .gallery__img:nth-child(4) {
    top: 76%;
    left: 72%;
    z-index: 1;

    width: 13rem;
  }

  /* =====================================================
     DESKTOP — 1024px EN ADELANTE
     Recuperamos el diseño horizontal
     ===================================================== */

  @media (min-width: 64em) {
    .capability-section {
      grid-template-columns: 40rem minmax(0, 1fr);
      grid-template-areas: 'gallery content';

      padding: var(--space-4) 0;
    }

    :host([reverse]) .capability-section {
      grid-template-columns: minmax(0, 1fr) 40rem;
      grid-template-areas: 'content gallery';
    }

    .capability-section__gallery {
      min-height: 30rem;
    }

    .capability-section__content {
      padding: 0 var(--space-4);
    }

    :host([reverse]) .content__title,
    :host([reverse]) .content__description {
      text-align: right;
    }

    .gallery__img {
      height: 12rem;
    }

    .gallery__img:nth-child(1) {
      width: 20rem;
    }

    .gallery__img:nth-child(2) {
      width: 18rem;
    }

    .gallery__img:nth-child(3) {
      width: 20rem;
    }

    .gallery__img:nth-child(4) {
      width: 19rem;
    }
  }
`;
