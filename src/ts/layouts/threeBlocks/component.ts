import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles';

@customElement('three-blocks-layout')
export class ThreeBlocksLayout extends LitElement {
  static styles = styles;

  render() {
    return html`
      <header><slot name="header"></slot></header>
      <main><slot></slot></main>
      <footer><slot name="footer"></slot></footer>
    `;
  }
}
