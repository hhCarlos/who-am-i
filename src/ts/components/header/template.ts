import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import type { SectionId } from './types';

const navigationItems: Array<{
  id: SectionId;
  label: string;
}> = [
  { id: 'home', label: 'Inicio' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'contact', label: 'Contacto' }
];

export const template = (activeSection: SectionId) => html`
  <header class="site-header">
    <div class="site-header__container">
      <a
        class="site-header__brand"
        href="#home"
        aria-label="Ir al inicio"
      >
        Who Am I
      </a>

      <nav
        class="site-header__nav"
        aria-label="Navegación principal"
      >
        ${navigationItems.map(({id, label}) => {
          const isActive = activeSection === id;

          return html`
            <a
              class=${classMap({
                'site-header__link': true,
                'site-header__link--active': isActive,
              })} 
              href="#${id}"
              aria-current=${isActive ? 'location' : nothing }
            >
              ${label}
            </a>
          `;
        })}
      </nav>
    </div>
  </header>
`;
