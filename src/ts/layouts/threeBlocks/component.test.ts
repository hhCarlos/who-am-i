import { fixture, html } from '@open-wc/testing';
import { expect, describe, it } from 'vitest';
import './component';
import { ThreeBlocksLayout } from './component';

describe('ThreeBlockLayout describe test: ', () => {
  it('renders header, main and footer slots', async () => {
    const el = await fixture<ThreeBlocksLayout>(html`
      <three-blocks-layout>
        <div slot="header">Header</div>
        <p>Main content.</p>
        <div slot="footer">Footer</div>
      </three-blocks-layout>
    `);

    expect(el).to.exist;
    expect(el.shadowRoot?.querySelector('header')).to.exist;
    expect(el.shadowRoot?.querySelector('main')).to.exist;
    expect(el.shadowRoot?.querySelector('footer')).to.exist;
  });
});
