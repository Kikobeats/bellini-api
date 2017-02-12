'use strict'

const reduce = require('lodash.reduce')
const createNormalizePrice = require('./create-normalize-price')

const transform = {
  price: createNormalizePrice('price'),
  newPrice: createNormalizePrice('newPrice'),
  name: (item) => item.name.replace('(2ªMano)', '').trim()
}

function normalize (item) {
  const normalizedItem = reduce(transform, function (acc, value, key) {
    const fn = transform[key]
    if (item[key]) acc[key] = fn(item)
    return acc
  }, {})
  return Object.assign({}, item, normalizedItem)
}

module.exports = normalize
