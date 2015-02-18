var Utils = require('./lib/index.js');

// Extend Utils
Utils.extend({
	name: 'logger',
	content: function (str) {
		return console.log('[prefix] ' + str);
	}
});

Utils.logger('test');

// Create a folder
Utils.create.folder('__foo__');
Utils.create.folder('__foo__');
return
// Create a file deeply in a folder
Utils.create.file('foo/bar/baz/foo.txt', 'FooBarBaz!');

// Update content
Utils.replaceInFile('foo/bar/baz/foo.txt', 'F', 'B');
Utils.replaceInFile('foo/bar/baz/foo.txt', /(o{2})/, '\n O\n  O' );

// Test result
// console.log(Utils.readFile('foo/bar/baz/foo.txt'));

Utils.trim('foo/bar/baz/foo.txt');

// Remove tests
Utils.del('__foo__');
Utils.clear.folder('foo');
Utils.del('foo');
