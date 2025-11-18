import '../styles/main.scss';
import './components/header/component';
import './components/footer/component';
import './layouts/threeBlocks/component';
import { Router } from './router/router';
import './pages/home/home.page';
import './pages/projects/projects.page';
import './pages/contact/contact.page';
import './pages/about/about.page';

window.addEventListener('DOMContentLoaded', () => {
  const outlet = document.getElementById('app');
  new Router(outlet!);
});

// HMR
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  console.log('♻️ HMR activo');
}
