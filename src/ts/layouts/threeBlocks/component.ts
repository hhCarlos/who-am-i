import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles';
import { template } from './template';

@customElement('three-blocks-layout')
export class ThreeBlocksLayout extends LitElement {
  static styles = [styles];

  render() {
    return template();
  };
}
