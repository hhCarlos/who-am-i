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

## 2. Lit: Primer componente
Se agrega la libreria de lit para generar componentes y se genera el primer componente: Header.

lit: npm install lit

Date: Noviembre 8 2025
Branch: feat/lit-header-component

## 3. Git Workflows
Se generan los workflows para el CI.

Se agrega lint, format y test.

format: npm install --save-dev prettier
lint: npm install --save-dev @eslint/js typescript-eslint eslint-config-prettier
test: npm install --save-dev vitest jsdom @vitest/coverage-v8
test-lint: npm install --save-dev @open-wc/testing

Se instala run-all para correrlos en paralelo:
run-all: npm install --save-dev npm-run-all

se agrega comando para correr format, lint y test en el package.json:
"verifier": "run-p format:check lint test"

Se agregan los workflows para correr las herramientas integradas.

Date: Noviembre 8 2025
Branch: ci/workflows
