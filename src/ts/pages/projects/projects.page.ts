import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('projects-page')
export class ProjectPage extends LitElement {
  render() {
    return html` <h2>Projects page!</h2> `;
  }
}
