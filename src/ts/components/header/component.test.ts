import { fixture, html } from '@open-wc/testing';
import { expect, describe, it } from 'vitest';
import './component';

describe('<app-header>', () => {
  it('debería renderizar el título correctamente', async () => {
    const el = await fixture(html`<app-header></app-header>`);
    const title = el.shadowRoot?.querySelector('h1')?.textContent;
    expect(title).toBe('Who Am I');
  });

  it('debería tener tres enlaces de navegación', async () => {
    const el = await fixture(html`<app-header></app-header>`);
    const links = el.shadowRoot?.querySelectorAll('nav a');
    expect(links?.length).toBe(4);
  });
});
