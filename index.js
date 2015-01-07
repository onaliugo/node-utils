var fs = require('fs');
var del = require('del');
var glob = require('glob');
var mkdirp = require('mkdirp');

var Utils = {

	// Add functionalities
	addFunc: function (obj) {
		this[obj.name] = obj.content;
	},

	// Tests returned value
	testVal: function (val, expectedType, name) {
		if (typeof val !== expectedType)
			throw new Error( '> ' + name + ' must return ' + expectedType );
	},
	testFn: function (fn, args, expectedType, name) {
		if (typeof fn( args ) !== expectedType)
			throw new Error( '> ' + name + ' must return ' + expectedType );
	},

	// Remove
	del: function (path) {
		del.sync( path );
		return console.log('> Cleared:', path);
	},

	// Create
	newFile: function (path, content) {
		fs.writeFileSync( path, content );
		return console.log('> Created file:', path);
	},
	newFolder: function (path) {
		mkdirp.sync( path );
		return console.log('> Created folder:', path);
	},

	// Clear
	clearFolder: function (path) {
		return fs.existsSync( path ) ? this.del( path + '**/*' ) : this.newFolder( path );
	},

	// Read
	readFile: function (path) {
		return fs.readFileSync( path, 'utf8' );
	},

	// Else
	each: function (path) {
		return glob.sync( path );
	},
	replaceInFile: function (path, toReplace, newContent) {
		var fileContent = this.readFile( path );
		newContent = fileContent.replace( toReplace, newContent );
		return this.newFile( path, newContent );
	}
};

module.exports = Utils;
