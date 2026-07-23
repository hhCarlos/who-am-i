import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  .capability-section {
    display: grid;
    grid-template-columns: 40rem 1fr;
    grid-template-areas: 'gallery content';

    padding-top: var(--space-3);
    border-top: solid 1px var(--ink-500);

    background-color: var(--color-background);
  }

  :host([reverse]) .capability-section {
    grid-template-columns: minmax(0, 1fr) 40rem;
    grid-template-areas: 'content gallery';
  }

  .capability-section__gallery {
    position: relative;
    grid-area: gallery;

    min-height: 30rem;
    margin: 0;
  }

  .capability-section__content {
    grid-area: content;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }

  .content__title {
    margin: 0;
  }

  :host([reverse]) .content__title {
    text-align: right;
  }

  .content__description {
    margin: 0;
  }

  :host([reverse]) .content__description {
    text-align: right;
  }

  .gallery__img {
    position: absolute;

    display: block;
    height: 12rem;

    object-fit: contain;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 2px 1px hsl(var(--shadow-color));
  }

  .gallery__img:nth-child(1) {
    width: 20rem;
    top: 28%;
    left: 32%;
    z-index: 4;
  }

  .gallery__img:nth-child(2) {
    width: 18rem;
    top: 37%;
    left: 68%;
    z-index: 3;
  }

  .gallery__img:nth-child(3) {
    width: 20rem;
    top: 69%;
    left: 35%;
    z-index: 2;
  }

  .gallery__img:nth-child(4) {
    width: 19rem;
    top: 76%;
    left: 72%;
    z-index: 1;
  }
`;
