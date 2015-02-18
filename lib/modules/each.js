var glob = require('glob');

/* Utils.each()
 * return an array of path */

module.exports = function (path) {
	return glob.sync(path);
};
