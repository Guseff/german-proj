# Project for lerning German language

### Browser support

This application support (and have been tested on) the followng browsers:

* Google Chrome [`last 2 versions`]
* Safari [`last 2 versions`]
* MS Edge (Chromium) [`last 2 versions`]

Currently, no mobile version is supported.

### Scripts

* `npm run start` - runs application in development mode via *webpack-dev-server*
* `npm run build` - builds application in production mode (artifacts will be placed in `/dist` folder)
* `npm run test` - runs tests
* `npm run lint:scripts` - runs linter checks for JS, TS, TSX scripts using *eslint*
* `npm run lint:scripts:fix` - makes attempt to fix linter issues in JS, TS, TSX scripts using *eslint*
* `npm run lint:styles` - runs linter checks for CSS styles using *stylelint*
* `npm run lint` - runs both CSS and TS linter checks

### Tech stack

Current project will be built on top of *[TypeScript](https://www.typescriptlang.org/)* + *[React 16](https://reactjs.org/)*.

*[Node.js LTS (12.16.1)](https://nodejs.org/)* version is used for building the project.

Following tools and utils are used additionally:

* *[React Router 5](https://reacttraining.com/react-router/web)* - as an application router
* *[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)* - utils for testing React components
* *[Jest](https://jestjs.io/)* - as a testing framework
* *[Webpack 4](https://webpack.js.org/)* - as an application builder/bundler
* *[PostCSS](https://postcss.org/)* - as a CSS processor
* *[ESLint](https://eslint.org/)* - as a TS/JS linter
* *[Stylelint](https://stylelint.io/)* - as a CSS linter
* *[Husky](https://github.com/typicode/husky)* - as a git hook manager

But some of this is under construction or needs refactoring

### Git Hooks

* `pre-commit` - runs `lint` script before any commit
* `pre-push` - runs `lint` + `test` scripts for checking linting rules and tests passing

### Linting rules

* *[AirBnB](https://www.npmjs.com/package/eslint-config-airbnb)* config is used as a base for JS and TS (using *typescript* version) linting rules.
* *[@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)* config is used for advanced TS linting rules.
* *[Stylelint Standard](https://github.com/stylelint/stylelint-config-standard)* config is used for CSS linting rules.
* *[Stylelint CSS Modules](https://www.npmjs.com/package/stylelint-config-css-modules)* config is used fo CSS Modules linting rules.
