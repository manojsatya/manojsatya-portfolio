---
title: "First test blog"
date: 2020-16-01 05:00:00
tags:
  - javascript
  - css
---

# [Phrase](https://phrase.com/) challenge

## Task: Code simple project editor using Phrase REST API!

### The app interacts with [Phrase Api](https://developers.phrase.com/api/). The app requires Phrase authorisation. Please login using phrase credentials. To create a phrase account please visit [Phrase App](https://app.phrase.com/account/login).

## Tech stack

- Backend -
  [Phrase API](https://developers.phrase.com/api/)
- Frontend framework -
  [Vue.js 2](https://vuejs.org/)
- Form
  validation -[Vee validate](https://www.npmjs.com/package/vee-validate)
- Routing -[Vue Router](https://router.vuejs.org/)
- State management -
  [Vuex](https://vuex.vuejs.org/)
- Date time
  formatting -[Momentjs](https://momentjs.com/)
- Promise based fetching -
  [Axios](https://github.com/axios/axios)
- Testing -
  [Vue testing library](https://testing-library.com/docs/vue-testing-library/intro/)

## App features

- Phrase authorisation (requires phrase account to
  login in)
- Pagination of projects (Currently set to 3
  projects per page)
- List of projects with project title, last
  updated
- Editable project titles

## Project setup

From the root directory, please follow below
commands to run the project in development mode.

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

```javascript
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById("root")
);
```

```javascript
const array = () => {
  console.log("Hello");
};
```

### To run tests

```
npm run test
```
