var Utils = require('../core');

/* Utils.clear()
 * If folder exist, clear files inside
 * Else create it */

function clearFile (path) {
	Utils.create.file(path, '');
	return Utils;
}

function clearFolder (path) {
	var exist = Utils.exist(path);

	if (exist)
		Utils.del(path + '**/*');
	else
		Utils.create.folder(path);

	return Utils;
}


module.exports = {
	file: clearFile,
	folder: clearFolder
};
