Tests the feasibility of using a custom `package.json` to create a separate entrypoint for `alpha` nested imports so that jest can still use cjs

* Run `npm link` in `./react-components`
* Run `npm install` in `./app`
* Run `npm link @ling/react-components` in `./app`
* Run `npm test` in `./app`