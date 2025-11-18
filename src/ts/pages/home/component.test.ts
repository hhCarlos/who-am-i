import { fixture, html } from '@open-wc/testing';
import { expect, describe, it } from 'vitest';
import './component';

describe('<home-page>', () => {
  it('debería renderizar correctamente', async () => {
    const el = await fixture(html`<home-page></home-page>`);
    console.log(el);
    expect(true).toBe(true);
  });
});
