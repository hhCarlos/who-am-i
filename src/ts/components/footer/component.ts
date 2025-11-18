import { LitElement } from 'lit';
import { styles } from './styles';
import { template } from './template';

export class AppFooter extends LitElement {
  static styles = [styles];

  render() {
    return template();
  }
}

customElements.define('app-footer', AppFooter);
