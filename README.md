# Angular Microfrontends

This project shows an example of using Webpack 5 Module Federation with [Nx](https://nx.dev/) 14.5.4 and Angular using shared library.

![angular-microfrontends](https://user-images.githubusercontent.com/17511629/183092789-e388dd56-2969-46e6-93a9-95db11646c41.png)

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

### To run remote in development mode, use the --devRemotes option

```
nx serve host --open --devRemotes=profile
```

### Generate shared library

```
nx g @nrwl/angular:library store
```

With the help of **withModuleFederation** function all libraries (npm and workspace) are shared singletons by default.

## Further Reading

- [Nx: Faster Builds with Module Federation](https://nx.dev/module-federation/faster-builds)
- [Module Federation Examples by creators of Module Federation](https://github.com/module-federation/module-federation-examples)
