import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('contact-page')
export class ContactPage extends LitElement {
  render() {
    return html` <h2>Contact page!</h2> `;
  }
}
