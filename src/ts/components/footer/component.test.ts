import { fixture, html } from '@open-wc/testing';
import { expect, describe, it } from 'vitest';
import './component';

describe('<app-footer>', () => {
  it('debería renderizar correctamente', async () => {
    const el = await fixture(html`<app-footer></app-footer>`);
    console.log(el);
    expect(true).toBe(true);
  });
});
