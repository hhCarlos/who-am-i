import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { pageSectionStyles } from '../../../../../../shared/styles/page-section.styles';
import { template } from './template';
import { styles } from './styles';


@customElement('capability-section')
export class CapabilitySection extends LitElement {
  static styles = [styles, pageSectionStyles];

  @property({ type: String })
  accessor heading = '';

  @property({ type: String })
  accessor description = '';

  @property({
    attribute: false,
  })
  accessor gallery: string[] = [];

  @property({
    type: Boolean,
    reflect: true
  })
  accessor reverse = false;

  protected render() {
    return template({
      heading: this.heading,
      description: this.description,
      gallery: this.gallery,
    });
  }
}
