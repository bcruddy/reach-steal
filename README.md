# reach-steal draft tracker

A fantasy football draft tracker powered by [innerself](https://github.com/stasm/innerself/) and express.


### Run it locally

* Requirements: node v6+ and `yarn` (`yarn` is required, if you want to use `npm` you'll need to change the `package.json` scripts)
* Install dependencies (`$ yarn`)
* `$ yarn start` - builds the client application and starts an express server listening on port 3009
* `$ yarn watch` - watch and automatically build when `src/` files change


### Notes

I built this for myself, so everything defaults to a 12 team, non-ppr leage (although ppr scoring is included in `data/rankings.json`). If you have other needs please adjust the code accordingly (all of it can be found in `src/reducer.js`).
