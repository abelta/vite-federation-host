# Experiment on Vite Federation
Experiment on Vite federation demonstrating integration with React Router v6, Zustand and CASL.

## Dependencies
As well as the expected NPM dpeendencies, the project relies on the presence of it's two hosts, implemented as separate Vite projects and on separate Git repositories:

[Remote 1](https://github.com/abelta/vite-federation-remote1)

[Remote 2](https://github.com/abelta/vite-federation-remote2)

## To run
It is an orchestrated process in which all three separate projects participate in a certain order every time a change is made in one of them.

Reminder: up to this date, only the host project can run on dev mode (which would give it automatic reloading) but even it must be built and served from a separate port since the remote projects have dependencies on it.

Dev and preview (serve) scripts have already been adapted in their package.json files so that they run on fixed and known ports.

From host folder
```
npm run build
npm run preview
```

From remote 1 folder
```
npm run build
npm run preview
```

From remote 2 folder
```
npm run build
npm run preview
```

Again from host project (in a separate terminal)
```
npm run dev
```
