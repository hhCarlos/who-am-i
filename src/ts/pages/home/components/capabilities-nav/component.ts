import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { template } from './template';
import { styles } from './styles';

@customElement('capabilities-nav')
export class CapabilitiesNav extends LitElement {
  static styles = [styles];

  render() {
    return template();
  }
}
