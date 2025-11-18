const routes: Record<string, string> = {
  '': 'home-page',
  '#home': 'home-page',
  '#projects': 'projects-page',
  '#contact': 'contact-page',
  '#about': 'about-page',
};

export class Router {
  root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
    window.addEventListener('hashchange', () => this.update());
    this.update();
  }

  update() {
    const hash = window.location.hash || '';
    const pageTag = routes[hash] || 'home-page';

    this.root.innerHTML = `<${pageTag}></${pageTag}>`;
  }
}
