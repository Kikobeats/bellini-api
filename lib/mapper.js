'use strict'

const reduce = require('lodash.reduce')
const normalize = require('./normalize')

const REGEX_SECOND_HAND = /mano/i

function getItem (item) {
  const normalizedItem = normalize(item)
  const {name, image, link} = normalizedItem
  const price = normalizedItem.newPrice || normalizedItem.price
  if (!price) return

  const title = `${name} €${price}`
  const {name: rawName} = item
  const condition = REGEX_SECOND_HAND.test(rawName) ? 'used' : 'new'

  return {
    title,
    name,
    image,
    link,
    condition,
    price
  }
}

function getItems (collection) {
  const addItem = (acc, item) => {
    const newItem = getItem(item)
    if (newItem) acc.push(newItem)
    return acc
  }

  return reduce(collection, addItem, [])
}
module.exports = getItems
module.exports.getItems = getItems
module.exports.getItem = getItem
