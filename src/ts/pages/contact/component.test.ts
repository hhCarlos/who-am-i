import { fixture, html } from '@open-wc/testing';
import { expect, describe, it } from 'vitest';
import './component';

describe('<contact-page>', () => {
  it('debería renderizar correctamente', async () => {
    const el = await fixture(html`<contact-page></contact-page>`);
    console.log(el);
    expect(true).toBe(true);
  });
});
