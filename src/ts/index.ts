import '../styles/main.scss';
import './components/header/component';

console.log('🚀 Who Am I – Build listo y funcionando con HMR');

const app = document.getElementById('app');
if (app) {
  app.innerHTML = `
    <app-header></app-header>
    Texto de prueba...
  `;
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  console.log('♻️  HMR activo: tus cambios se aplican al instante');
}
