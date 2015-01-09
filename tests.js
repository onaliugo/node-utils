var u = require('./index.js');

u = new u ({
	silent: false
});


u.addFunc({
	name: 'fnTest',
	content: function () {
		console.log( 'this' );
	}
});

u.fnTest();


u.newFolder('test/');
u.newFile('test/hello.txt', 'Hello world!');

console.log( u.readFile('test/hello.txt') );
u.each( 'test/**/*' ).forEach( function (file) {
	u.replaceInFile( file, 'world', 'you' );
});
console.log( u.readFile('test/hello.txt') );

u.clearFolder('test/');
u.del('test/');
