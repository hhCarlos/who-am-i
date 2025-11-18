import { LitElement } from 'lit';
import { styles } from './styles';
import { template } from './template';
import { customElement } from 'lit/decorators.js';

@customElement('app-footer')
export class AppFooter extends LitElement {
  static styles = [styles];

  render() {
    return template();
  }
}
