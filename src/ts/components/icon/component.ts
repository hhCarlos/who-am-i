import { LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { iconRegistry } from './icons';
import { styles } from './styles';
import { template } from './template';

import type { IconName, IconSize } from './types';

@customElement('app-icon')
export class AppIcon extends LitElement {
  static styles = styles;

  @property({ type: String })
  accessor name: IconName = 'default';

  @property({
    type: String,
    reflect: true,
  })
  accessor size: IconSize = 'md';

  @property({ type: String })
  accessor label = '';

  protected render() {
    const renderIcon = iconRegistry[this.name];

    if (!renderIcon) {
      console.warn(`Icono no registrado: "${this.name}"`);
      return nothing;
    }

    return template({
      icon: renderIcon(),
      label: this.label,
    });
  }
}
