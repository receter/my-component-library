<img width="500" alt="ViteReactComponentLibrary" src="https://github.com/receter/my-component-library/assets/2504695/dbb53036-d228-477b-8cf8-f61cd6130776">

# A simple (demo) react component library
This repository was published together with an article on [how to create a react component library](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma) using Vite's library mode.

Here is another repo that consumes this libarary: https://github.com/receter/my-component-library-consumer

The demo library on npm: https://www.npmjs.com/package/@receter/my-component-library

## Installation
You can install it with npm (don't expect much fanciness):
```bash
npm i @receter/my-component-library
```

## Usage
```javascript
import { Button, Label, Input } from '@receter/my-component-library';
```
See this file for an example on using this library: https://github.com/receter/my-component-library-consumer/blob/main/src/App.tsx

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
