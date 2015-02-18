var del = require('del');

/* Utils.del()
 * Delete a specify path (file/folder) */

module.exports = function (path) {
	del.sync(path);
	this.log('Cleared: ' + path);
	return this;
};
