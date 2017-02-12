'use strict'

const should = require('should')
const {getItem, getItems} = require('../lib/mapper')

function getFixture () {
  return [
    {
      image: 'http://bellini.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/ICON-12-2-254x203.jpg',
      name: 'VELA SIMMER ICON 5.0 2012 (2ªMano)',
      link: 'http://www.bellini.es/producto/vela-simmer-icon-5-0-2012-2amano/',
      price: '195,00€'
    },
    {
      image: 'http://bellini.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/ICON-12-2-254x203.jpg',
      name: 'VELA SIMMER ICON 5.0 2012 (2ªMano)',
      link: 'http://www.bellini.es/producto/vela-simmer-icon-5-0-2012-2amano/',
      price: '195,00€',
      newPrice: '100,00€'
    },
    {
      image: 'http://bellini.wpengine.netdna-cdn.com/wp-content/uploads/2013/12/VMAX-11.jpg-254x203.jpg',
      name: 'VELA SIMMER V-MAX 7.9 2011 (2ªMano)',
      link: 'http://www.bellini.es/producto/vela-simmer-v-max-7-9-2amano-2011/',
      price: null
    },
    {
      image: 'http://bellini.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/ICON-12-2-254x203.jpg',
      name: 'VELA SIMMER ICON 5.0 2012',
      link: 'http://www.bellini.es/producto/vela-simmer-icon-5-0-2012-2amano/',
      price: '195,00€'
    }
  ]
}

describe('bellini-api » mapper', function () {
  describe('.getItem', function () {
    it('price is a number', function () {
      const fixture = getFixture()[0]
      const item = getItem(fixture)
      should(item.price).be.equal(195)
    })

    it('extract last price', function () {
      const fixture = getFixture()[1]
      const item = getItem(fixture)
      should(item.price).be.equal(100)
    })

    it('extract (2ªMano) from name as condition field', function () {
      const fixture = getFixture()[1]
      const item = getItem(fixture)
      should(item.name).be.equal('VELA SIMMER ICON 5.0 2012')
      should(item.condition).be.equal('used')
    })

    it('compose title using name and price', function () {
      const fixture = getFixture()[0]
      const item = getItem(fixture)
      should(item.title).be.equal('VELA SIMMER ICON 5.0 2012 €195')
    })

    it('exclude items withouth price', function () {
      const fixture = getFixture()[2]
      const item = getItem(fixture)
      should(item).be.undefined()
    })
  })

  describe('.getItems', function () {
    it('iterate a collection', function () {
      const fixture = getFixture()
      const items = getItems(fixture)

      should(items).be.eql([ { title: 'VELA SIMMER ICON 5.0 2012 €195',
        name: 'VELA SIMMER ICON 5.0 2012',
        image: 'http://bellini.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/ICON-12-2-254x203.jpg',
        link: 'http://www.bellini.es/producto/vela-simmer-icon-5-0-2012-2amano/',
        condition: 'used',
        price: 195 },
      { title: 'VELA SIMMER ICON 5.0 2012 €100',
        name: 'VELA SIMMER ICON 5.0 2012',
        image: 'http://bellini.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/ICON-12-2-254x203.jpg',
        link: 'http://www.bellini.es/producto/vela-simmer-icon-5-0-2012-2amano/',
        condition: 'used',
        price: 100 },
      { title: 'VELA SIMMER ICON 5.0 2012 €195',
        name: 'VELA SIMMER ICON 5.0 2012',
        image: 'http://bellini.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/ICON-12-2-254x203.jpg',
        link: 'http://www.bellini.es/producto/vela-simmer-icon-5-0-2012-2amano/',
        condition: 'new',
        price: 195 }
      ])
    })
  })
})
