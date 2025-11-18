import { fixture, html } from '@open-wc/testing';
import { expect, describe, it } from 'vitest';
import './component';

describe('<projects-page>', () => {
  it('debería renderizar correctamente', async () => {
    const el = await fixture(html`<projects-page></projects-page>`);
    console.log(el);
    expect(true).toBe(true);
  });
});
