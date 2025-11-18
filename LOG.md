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

## 3. CI Git Workflows
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

## 4. CI Git Workflows
Se agrega el job para generar la pagina en github pages.
Se agrega en el webpack la propiedad para hacer visible el path publico.

Date: Noviembre 9 2025
Branch: ci/workflows

## 5. Layouts: Three Block layout
Se genera los layouts y el primer layout es 3 bloques.

Date: Noviembre 9 2025
Branch: feat/layouts-init

## 6. General: Pages y Routes
Se genera la estructura general para pages y para routes.

Date: Noviembre 17 2025
Branch: feat/pages-y-route

## 7. General: Coherencia en la modularidad de componentes
Coherencia en la modularidad de componentes, se genera en todos los componentes actuales el
mismo tipo de modularidad el cual compondra cada componente, pagina o layout que exponga 
un componente @componentLit los siguientes archivos.

- component.ts
- component.test.ts
- styles.ts
- template.ts

Date: Noviembre 17 2025
Branch: feat/coherencia-general
