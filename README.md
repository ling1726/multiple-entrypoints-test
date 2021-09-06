Tests the feasibility of using a custom `package.json` to create a separate entrypoint for `alpha` nested imports so that jest can still use cjs


* Install verdaccio https://verdaccio.org/docs/installation/
* Run `verdaccio` to start the registry
* Add a user to publish to private registry `npm adduser --registry http://localhost:4873`
* Run `npm publish` in `react-button`, `react-dropdown`, `react-components`
* Run `npm install` in `./app`
* Run `npm test` in `./app`