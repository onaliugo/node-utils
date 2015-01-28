# Node-utils

```js
  var Utils = require( 'uo-node-utils' );

  var utils = new Utils ({
  	silent: false
  });  

  u.addFunc({
    name: 'fnTest',
    content: function () {
      console.log( 'this' );
    }
  });

  u.fnTest();

  u.newFolder('foo');

  u.newFile('foo/bar/baz.txt', 'Hello world!');

  // console.log(u.readFile('foo/bar/baz.txt'));

  u.each( 'foo/bar/*' ).forEach(function (file) {
    u.replaceInFile(file, 'world', 'you' );
  });

  // console.log(u.readFile('foo/bar/baz.txt'));

  u.clearFolder('foo/');

  u.del('foo/');
```
