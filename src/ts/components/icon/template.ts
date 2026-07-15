import {
  html,
  nothing,
  type TemplateResult,
} from 'lit';

interface IconTemplateProperties {
  icon: TemplateResult;
  label: string;
}

export const template = ({
  icon,
  label,
}: IconTemplateProperties) => html`
  <span
    class="app-icon"
    role=${label ? 'img' : 'presentation'}
    aria-label=${label || nothing}
    aria-hidden=${label ? nothing : 'true'}
  >
    ${icon}
  </span>
`;
