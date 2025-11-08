## 1. Bases del proyecto
Se generar el archivo index.html.

Se genera el npm init con el comando:
  - npm init -y

Se instalan las dependecias para webpack, TS y scss con los comando:
  - npm install webpack webpack-cli webpack-dev-server --save-dev
  - npm install typescript ts-loader sass style-loader css-loader sass-loader html-webpack-plugin mini-css-extract-plugin --save-dev

Se inicializa el configirardor para TS con el comando:
  - npx tsc --init

Se generan la estructura para las carpetas de estilos(scss) y logica(ts).
Arbol inicial del proyecto:
who-am-i/
├── src/
│   ├── ts/
│   │   └── index.ts
│   ├── styles/
│   │   └── main.scss
│   └── index.html

Se crea el webpack.config.js.

Se agregan los script para correr el proyecto y hacer build a traves de webpack.

Date: Noviembre 8 2025
Branch: feat/base-proyecto-init
