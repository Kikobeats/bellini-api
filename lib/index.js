'use strict'

const createStream = require('./req-stream')

function createClient (opts) {
  const client = createStream(opts)

  client.sails = {
    all: client.bind(client, {path: 'velas-de-windsurf/'}),
    wave: client.bind(client, {path: 'velas-de-windsurf/velas-de-olas/'}),
    slalom: client.bind(client, {path: 'velas-de-windsurf/velas-de-slalom/'}),
    freestyle: client.bind(client, {path: 'velas-de-windsurf/velas-de-freestyle/'}),
    freeride: client.bind(client, {path: 'velas-de-windsurf/velas-de-freeride/'}),
    freerace: client.bind(client, {path: 'velas-de-windsurf/velas-de-freerace/'})
  }

  client.boards = {
    all: client.bind(client, {path: 'tablas-de-windsurf/'}),
    wave: client.bind(client, {path: 'tablas-de-windsurf/tablas-olas/'}),
    freewave: client.bind(client, {path: 'tablas-de-windsurf/tablas-freewave/'}),
    slalom: client.bind(client, {path: 'tablas-de-windsurf/tablas-slalom/'}),
    freestyle: client.bind(client, {path: 'tablas-de-windsurf/tablas-freestyle/'}),
    freeride: client.bind(client, {path: 'tablas-de-windsurf/tablas-freeride/'}),
    freerace: client.bind(client, {path: 'tablas-de-windsurf/tablas-freerace/'})
  }

  client.booms = {
    all: client.bind(client, {path: 'todo-windsurf/botavaras-windsurf/'})
  }

  client.masts = {
    all: client.bind(client, {path: 'todo-windsurf/mastiles/'})
  }

  client.fins = {
    all: client.bind(client, {path: 'todo-windsurf/aletas-quillas/'})
  }

  return client
}

module.exports = createClient
