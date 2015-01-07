# Node-utils

```js
  var Utils = require('uo-node-utils');

  var utils = new Utils ({
  	silent: false
  });

  utils.newFolder('test/');

  u.newFile('test/hello.txt', 'Hello world!');

  console.log( u.readFile('test/hello.txt') );

  u.each( 'test/**/*' ).forEach( function (file) {
    u.replaceInFile( file, 'world', 'you' );
  });

  console.log( u.readFile('test/hello.txt') );

  u.clearFolder('test/');
  u.del('test/');
```
