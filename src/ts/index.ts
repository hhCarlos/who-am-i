import '../styles/main.scss';

console.log('🚀 Who Am I – Build listo y funcionando con HMR');

const app = document.getElementById('app');
if (app) {
  app.innerHTML = `
    <h1>Who Am I</h1>
    <p>Bienvenido a mi espacio digital ⚡</p>
  `;
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  console.log('♻️  HMR activo: tus cambios se aplican al instante');
}
