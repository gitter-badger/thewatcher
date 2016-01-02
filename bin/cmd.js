#!/usr/bin/env node
// #TheWatcher
// By #TheDoxMedia
//

var TheWatcher = require('./app')
var minimist = require('minimist')
var multiline = require('multiline')
var packageJson = require('../package.json')
// var child_process = require('child_process')

process.title = 'TheWatcher'
process.on('exit', function () {
  console.log('TheWatcher exiting..'.cyan)
})

var App = new TheWatcher()
var TW_MODE // Undefined yet - Set only when using
// thewatcher -m <server|client>

// Parse args
// Args options for startup/mode
// IF called via {thewatcher} -{s} -{arg}
var args = minimist(process.argv.slice(2), {
  alias: {
    a: 'add',
    m: 'mode',
    s: 'setup'
  },
  string: [
    'db',
    'add',
    'export',
    'mode',
    'setup'
  ]
})

// Setup a client or server & setup its {type}.json
if (args.setup) {
  App.utils[args.setup].setup()
} else if (args.mode) { // Start TheWatcher in requested mode
  TW_MODE = args.mode
  App[TW_MODE]()
} else if (args.add) {
  var AppManage = new App.Manage()
  AppManage.addClient(args.add)
} else if (args.export) {
  var AppManage = new App.Manage()
  AppManage.exportClientConf(args)
} else if (args.db) {
  extendedUtils(args.db)
} else {
  console.log(args)

  // If no selection is made, return fullText()
  fullText()
}

function extendedUtils (dbArg) {
  var AppManage = new App.Manage()

  switch (dbArg) {
    case 'setup':
      AppManage.dbSetup()
      break

    default:
      console.log('Check available options for --db')
      break
  }
}

function fullText () {
  console.log(multiline(function () {
/*

   TheWatcher - %s

   ===============================================

   Usage: thewatcher [switch] <opt>

   [switch] <opt>:
      -a, --add     <path_to_save>
      -m, --mode    <server|client>
      -s, --setup   <server|client>
      --export      <client> <path_to_save>

   Examples:
      thewatcher -m server  Start in server mode
      thewatcher -s client  Interactive setup
      thewatcher -a         /path/to/client.json

*/
  }), packageJson.version)
}
