/* Utils.extend();
 * extend Utils as the User wants */

module.exports = function (obj) {
	this[obj.name] = obj.content;
	return this;
};
