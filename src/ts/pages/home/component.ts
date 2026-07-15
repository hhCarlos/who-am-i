import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { template } from './template';
import { styles } from './styles';

import './components/capabilities-nav/component';
import './components/home-hero/component';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = styles;

  protected render() {
    return template();
  }
}
