# Node-utils

```js
var Utils = require('uo-node-utils');

// extend Utils
Utils.extend({
	name: 'logger',
	content: function (str) {
		return console.log(str);
	}
});

// Create a folder
Utils.create.folder('__foo__');

// Create a file deeply in a folder
Utils.create.file('foo/bar/baz/foo.txt', 'Foo');

// Update content
Utils.replaceInFile('foo/bar/baz/foo.txt', 'F', 'B');
Utils.replaceInFile('foo/bar/baz/foo.txt', /(o{2})/, '\n O\n  O' );

// Test result
// console.log(Utils.readFile('foo/bar/baz/foo.txt'));

Utils.trim('foo/bar/baz/foo.txt');

// Remove test files
Utils.del('__foo__');
Utils.clear('foo');
Utils.del('foo');
```
