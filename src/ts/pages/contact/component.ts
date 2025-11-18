import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles';
import { template } from './template';

@customElement('contact-page')
export class ContactPage extends LitElement {
  static styles = [styles];

  render() {
    return template();
  }
}
