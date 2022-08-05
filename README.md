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

### Generate the host and remote applications

```
nx g @nrwl/angular:host host --remotes=profile
```

### Serve host to view it in your browser

```
nx serve host --open
```

### Serve host to view it in your browser

```
nx serve host --open
```

### To run remote in development mode, use the --devRemotes option

```
nx serve host --open --devRemotes=profile
```
