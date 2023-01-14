<div align="center">
  🙈
  <h1>ShyBye</h1>
</div>

**Our mission** is to help individuals overcome social anxiety and loneliness by
gamifying primarily in-person social interactions through a variety of fun
social challenges

ShyBye was initially created over the span of _four days_ during the 2022
"[GDI Virtual Hackathon](https://girldevelopit.com/virtual-hackathon/): Hack for
Health!" and won the "On Our Phone Tomorrow!" award

Made with &hearts; by all [our awesome contributors](https://shybye.netlify.app/about)!

<!-- TODO: add a contributor section -->

## Under the Hood

### Tech stack

- [Firebase](https://firebase.google.com)
- [Next.js](https://nextjs.org)
- [MUI](https://mui.com/core)

### Dependencies

- [`@emotion/*`](https://emotion.sh) &ndash; a core dependency of MUI and
  provides an extensible, well-integrated CSS-in-JS solution
- [`@mui/*`](https://mui.com/core) &ndash; used as the primary UI library and
  framework for rapid prototyping/development
- [`firebase`](https://firebase.google.com) &ndash; used as a single source of
  truth for the backend architecture and other developer utilities
- [`next`](https://nextjs.org) &ndash; a performance-driven fullstack framework
  with [several great developer features](https://github.com/gabw13/shybye-frontend/issues/9)
  to make fast apps for the web in React
- [`react`](https://reactjs.org), `react-dom` &ndash; state-driven, component-
  based library for building the UI; the core dependency for `next` and `@mui/*`

### Running Locally

1. Fork this repository or [request an invitation](https://discord.gg/8addqm9r4J)
   to contribute directly
1. Clone the repository on your local machine with `git clone`
1. Install dependencies from the "package.json" with npm: `npm install`
1. Make sure you have the [Firebase CLI](https://firebase.google.com/docs/cli)
   installed, or invoke it with `npx firebase $command`
1. Enable the web frameworks preview with the CLI command
   `firebase experiments:enable webframeworks`
1. Run a local emulator for the Firebase app with
   `firebase emulators:start`

**NOTE** the web frameworks preview is currently only compatible with
`{ "node": "^16.0.0" || "^18.0.0" }`, included (".nvmrc") is the latest
compatible and tested version. Ensure it's installed on your system with
[nvm](https://github.com/nvm-sh/nvm)
