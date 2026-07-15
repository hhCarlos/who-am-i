import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { pageSectionStyles } from '../../../../shared/styles/page-section.styles';
import { template } from './template';
import { styles } from './styles';

@customElement('home-hero')
export class HomeHero extends LitElement {
  static styles = [
    pageSectionStyles,
    styles,
  ];

  protected render() {
    return template();
  }
}
