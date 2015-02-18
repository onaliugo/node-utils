var fs = require('fs');

/* Utils.trim();
 * Remove all whitespace and backlines
 * If arg is a path, update file content
 * Else, return arg trimmed */

module.exports = function (content) {
	if (!this.exist(content))
		return content.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,'');

	var fileContent = this.read.file(content);
	var newContent = this.trim(fileContent);

	fs.writeFileSync(content, newContent);
	this.log('Trimed: ' + content);

	return this;
};
