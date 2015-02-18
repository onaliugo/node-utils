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

function createFolder (folderPath) {
	if (Utils.exist(folderPath))
		return Utils;

	mkdirp.sync(folderPath);
	Utils.log('Created folder: ' + folderPath);

	return Utils;
};

module.exports = {
	folder: createFolder,
	file: createFile
};
