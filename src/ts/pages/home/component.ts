import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { template } from './template';
import { styles } from './styles';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = [styles];

  render() {
    return template();
  }
}
