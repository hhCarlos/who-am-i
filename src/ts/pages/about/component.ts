import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles';
import { template } from './template';

@customElement('about-page')
export class AboutPage extends LitElement {
  static styles = [styles];

  render() {
    return template();
  }
}
