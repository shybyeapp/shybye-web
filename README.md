# ShyBye #
**Our mission** is to be a place for individuals overcome social anxiety and
loneliness by gamifying primarily in-person social interactions, providing a
variety of fun social challenges

ShyBye was initially created over the span of *four days* during the 2022
"[GDI Virtual Hackathon](https://girldevelopit.com/virtual-hackathon/): Hack for
Health!" and won the "On Our Phone Tomorrow!" award

Made with &hearts; by all [our awesome contributors](https://shybye.netlify.app/about)!
<!-- TODO: add a contributor section -->

## Under the Hood ##
This is the frontend source code for the ShyBye app
- [**Frontend**](https://github.com/gabw13/shybye-frontend)
[Next.js](https://nextjs.org) + [MUI](https://mui.com/core/)
- [**Backend**](https://github.com/Valorieb/shybye-backend)
[Spring](https://spring.io/) + [PostgreSQL](https://www.postgresql.org/)

### Dependencies ###
- [`@emotion/*`](https://emotion.sh/) &ndash; a core dependency of MUI and
provides an extensible, well-integrated CSS-in-JS solution
- [`@mui/*`](https://mui.com/core/) &ndash; used as the primary UI library and
framework for rapid prototyping/development
- [`axios`](https://axios-http.com/) &ndash; offers DefinitelyTyped interfaces
for HTTP requests to the backend
- [`next`](https://nextjs.org) &ndash; a performance-driven fullstack framework
with [several great developer features](https://github.com/gabw13/shybye-frontend/issues/9)
to make fast apps for the web in React
- [`react`](https://reactjs.org/), `react-dom` &ndash; state-driven, component-
based library for building the UI; the core dependency for `next` and `@mui/*`

### Running Locally ###
#### New contributors ####
1. Fork this repository or [request an invitation](https://discord.gg/8addqm9r4J)
to contribute directly
1. `git clone` &ndash; clone the repository on your local machine
1. `npm install` &ndash; install dependencies from package.json
1. `npm run dev` &ndash; run a local development server

#### Existing contributors ####
1. Ensure your development server isn't running (previously `npm start`) and
you may want to optionally clear browser data on localhost:3000
1. `git fetch` &ndash; get the latest changes from the remote repository
1. `npm ci` &ndash; run a clean install of the package.json dependencies