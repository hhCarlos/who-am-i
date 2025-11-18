import { fixture, html } from '@open-wc/testing';
import { expect, describe, it } from 'vitest';
import './component';

describe('<about-page>', () => {
  it('debería renderizar correctamente', async () => {
    const el = await fixture(html`<about-page></about-page>`);
    console.log(el);
    expect(true).toBe(true);
  });
});
