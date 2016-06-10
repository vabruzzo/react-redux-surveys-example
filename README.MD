## README
React/Redux example surveys app (and sandbox for trying new React things)

### Built with:

* ES6
* react
* react-router
* react-bootstrap
* redux
* redux-thunk
* a tad of lodash
* some polyfills (promise, fetch)
* no jquery!

#### Build tools

* webpack
* babel
* postcss w/ precss (sass) & autoprefixer

### Getting started:

1. `npm install`
2. `npm run start`
3. visit `localhost:3000`
4. for good measure. run `localStorage.clear()` in the console before playing around with the app

#### additional commands

* linting via eslint/airbnb config: `npm run lint`
* testing w/ jsdom/mocha/chai/sinon/enzyme: `npm run test`

#### Development workflow:

The express dev server is set up with react hot loader. The app is also set up to work with the chrome redux dev tools extension (*highly recommended*). The hot loading is still a bit buggy.

### Notes:

* localStorage is used for 'persistence'. However, to simulate redux-thunk async usage, I make a pointless fetch to /api and then do the localStorage work when I'd normally handle the fetch(api) response.
* The actual approach and structure of the stored data is hacky and would never be used in a real project. Will eventually build back-end with postgres and either rails or elixir/phoenix. (elixir is my new favorite language).

### Known issues/TODOs:

* zero authorization implemented
* error handling is sparse but I hint at how it would be implemented in a few places
* not as DRY as it could be
* no size, performance, or a11y audit yet, thought these things should be okay as I have them in mind as I build
* users can take same survey more than once
* there is no production build process
* code coverage is not 100%, I've just set up one or two types of each test (e.g. one reducer test, one action creator test) so you can get an idea of the testing tool choices as I use them
