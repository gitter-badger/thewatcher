// #TheWatcher
// By #TheDoxMedia
//
// Main js file for loading the project.
// 
// Running: node index.js -c <path to config file>

var path = require('path');
var extend = require('xtend');
var Utils = require('./utils/utils');
var Manage = require('./utils/toolbox/manage');

var TheWatcher = function () {
	var self = this;
	
	// Set TheWatcher running Dir under __TW
	global.__TW = path.resolve(__dirname + '/..');

	// Check if TheWatcher was called via require('app')
	// Or via $ thewatcher {args}
	self.cmd = (require.main);

	self.mode = undefined;
	self.config = {
		silent: false
	};
	
	// Extend
	self.utils = Utils;
	self.manage = self.Manage = Manage;
}

TheWatcher.prototype.client = function () {
	var self = this;

	if (!self.config.silent) {
		console.log('TheWatcher >> Client >> Starting..'.yellow);
	}

	// Load server config
	self.config = extend(Utils.server.load.config('client'), self.config);

	// Load client config JSON & pass to Client Core
	require('./client/client').start(self.config);
};

TheWatcher.prototype.server = function () {
	var self = this;

	if (!self.config.silent) {
		console.log('TheWatcher >> Server >> Starting..'.yellow);
	}
	
	// Load server config
	self.config = extend(Utils.server.load.config('server'), self.config);

	// Load server config JSON & pass to Server Core
	require('./server/server').start(self.config);
}

module.exports = TheWatcher;