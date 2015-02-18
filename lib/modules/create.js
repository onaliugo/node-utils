var fs = require('fs');
var Utils = require('../core');
var mkdirp = require('mkdirp');

/* Utils.create.folder();
 * Utils.create.file();
 * Create folder if needed
 * Then create file */

function createFile (filePath, fileContent) {
	var folderPath = filePath.split('/');
	folderPath.pop();
	folderPath = folderPath.join('/');

	if (!Utils.exist(folderPath))
		Utils.create.folder(folderPath);

	fs.writeFileSync(filePath, fileContent);
	Utils.log('Created file: ' + filePath);

	return Utils;
};

function createFolder (path) {
	mkdirp.sync(path);
	Utils.log('Created folder: ' + path);
	return Utils;
};

module.exports = {
	folder: createFolder,
	file: createFile
};
