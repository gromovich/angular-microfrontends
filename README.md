# Angular Microfrontends

This project shows an example of using Webpack 5 Module Federation with [Nx](https://nx.dev/) 14.5.4 and Angular using shared module.

## Creating an example workspace

### Create an empty Nx workspace

```
# Replace angular-microfrontends with desired scope
npx create-nx-workspace angular-microfrontends --preset=empty
cd angular-microfrontends
```

### Install the @nrwl/angular plugin

```
npm install --save-dev @nrwl/angular
```
