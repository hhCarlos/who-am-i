import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('about-page')
export class AboutPage extends LitElement {
  render() {
    return html` <h2>About page!</h2> `;
  }
}
