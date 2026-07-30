import { LitElement } from 'lit';
import { styles } from './styles';
import { template } from './template';
import { customElement, state } from 'lit/decorators.js';
import type { SectionId } from './types';

const validSections: SectionId[] = [
  'home',
  'contact',
  'projects',
  'about',
];

@customElement('app-header')
export class AppHeader extends LitElement {
  static styles = styles;

  @state()
  private accessor activeSection: SectionId = 'home';

  connectedCallback(): void {
    super.connectedCallback();

    window.addEventListener('hashchange', this.handleHashChange);

    this.updateActiveSection();
  }

  disconnectedCallback(): void {
    window.removeEventListener('hashchange', this.handleHashChange);

    super.disconnectedCallback();
  }

  private handleHashChange = (): void => {
    this.updateActiveSection();
  };

  private isValidSection(value: string): value is SectionId {
    return validSections.includes(value as SectionId);
  }

  private updateActiveSection(): void {
    const currentHash = window.location.hash.slice(1);

    this.activeSection = this.isValidSection(currentHash)
      ? currentHash
      : 'home';
  }

  protected render() {
    return template(this.activeSection);
  }
}
