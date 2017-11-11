# bellini-api

[![Greenkeeper badge](https://badges.greenkeeper.io/Kikobeats/bellini-api.svg)](https://greenkeeper.io/)

![Last version](https://img.shields.io/github/tag/Kikobeats/bellini-api.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/bellini-api/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/bellini-api)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/bellini-api.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/bellini-api)
[![Dependency status](http://img.shields.io/david/Kikobeats/bellini-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/bellini-api)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/bellini-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/bellini-api#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/bellini-api.svg?style=flat-square)](https://www.npmjs.org/package/bellini-api)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Programatic API access for bellini.es

## Install

```bash
$ npm install bellini-api --save
```

## Usage

```js
const bellini = require('bellini-api')

const stream = bellini({
  key: process.env.API_KEY, // API Key credentials
  pages: 1, // Numbers or request per each method call [default=1]
  itemsPerPage: 'all' // Number of items per page [default='all']
})
```

## License

MIT © [Kiko Beats](http://kikobeats.com)
