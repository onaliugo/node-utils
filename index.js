var fs = require('fs');
var del = require('del');
var glob = require('glob');
var mkdirp = require('mkdirp');

var Utils = function (opts) {
	return {
		opts: opts,
		log: this.log,

		// Add functionalities
		addFunc: function (obj) {
			this[obj.name] = obj.content;
		},

		// Tests
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
			return this.log('> Cleared: ' + path);
		},

		// Create
		newFile: function (path, content) {
			fs.writeFileSync( path, content );
			return this.log('> Created file: ' + path);
		},
		newFolder: function (path) {
			mkdirp.sync( path );
			return this.log('> Created folder: ' + path);
		},

		// Clear
		clearFolder: function (path) {
			var alreadyExist = fs.existsSync( path );
			return alreadyExist ? this.del( path + '**/*' ) : this.newFolder( path );
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
			fs.writeFileSync( path, newContent );
			return this.log( 'Updated file: ' + path );
		}
	};
};

Utils.prototype.log = function (content) {
	if (!this.opts.silent)
		return console.log(content);
};

module.exports = Utils;
