import '../styles/main.scss';
import './components/header/component';
import './components/footer/component';
import './layouts/threeBlocks/component';
import { Router } from './router/router';
import './pages/home/component';
import './pages/projects/component';
import './pages/contact/component';
import './pages/about/component';

window.addEventListener('DOMContentLoaded', () => {
  const outlet = document.getElementById('app');
  new Router(outlet!);
});

// HMR
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  console.log('♻️ HMR activo');
}
