import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles';
import { template } from './tamplate';

@customElement('projects-page')
export class ProjectPage extends LitElement {
  static styles = [styles];

  render() {
    return template();
  }
}
