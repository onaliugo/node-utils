var fs = require('fs');
var del = require('del');
var glob = require('glob');
var extend = require('extend');
var mkdirp = require('mkdirp');

var Utils = {
  silent: false,

  /* Utils.log();
   * Log a message
   * if silent is set as false */
  log: function (content) {
    return Utils.silent ? Utils : console.log('> ' + content);
  },

  /* Utils._extend();
   * extend Utils as the User wants */
  _extend: function (obj) {
    Utils[obj.name] = obj.content;
    return Utils;
  },

  // Add functionalities
  addFunc: function (obj) {
    Utils[obj.name] = obj.content;
  },

  /* Utils.check.value();
   * Utils.check.fn();
   * Test typeof of a returned value
   * or of a single value */
  check: {
    value: function (val, expectedType, name) {
      if (typeof val !== expectedType) {
        throw new Error(name + ' must return ' + expectedType);
      }
    },
    fn: function (fn, args, expectedType, name) {
      if (typeof fn( args ) !== expectedType) {
        throw new Error(name + ' must return ' + expectedType);
      }
    },
  },

  /* Utils.del()
   * Delete a specify path */
  del: function (path) {
    del.sync(path);
    Utils.log('Cleared: ' + path);
    return Utils;
  },

  /* Utils.clear()
   * If folder exist, clear files inside
   * Else create it */
  clear: function (path) {
    return fs.existsSync(path) ? Utils.del(path + '**/*') : Utils.create.folder(path);
  },


  /* Utils.create.folder(); */
  /* Utils.create.file();
   * Dreate folder if needed
   * Then create file */
  create: {
    folder: function (path) {
      mkdirp.sync(path);
      return Utils.log('Created folder: ' + path);
    },
    file: function (path, content) {
      var folderPath = path.split('/');
      folderPath.pop();
      folderPath = folderPath.join('/');

      if (!fs.existsSync(folderPath))
        Utils.create.folder(folderPath);

      fs.writeFileSync(path, content);
      return Utils.log('Created file: ' + path);
    }
  },

  /* Utils.replaceInFile();
   * Read a file, update it's content */
  replaceInFile: function (path, toReplace, newContent) {
    if (!fs.existsSync(path))
      throw new Error('File does not exist ' + path);

    var newContent = Utils.readFile(path).replace(toReplace, newContent);
    fs.writeFileSync(path, newContent);
    return Utils.log('Updated file: ' + path);
  },

  /* Utils.readFile();
   * Read a file */
  readFile: function (path) {
    return fs.readFileSync(path, 'utf8');
  },

  /* Utils.trim();
   * Remove all whitespace and backlines
   * If arg is a path, update file content
   * Else, return arg trimmed */
  trim: function (content) {
    var isFile = fs.existsSync(content);

    if (isFile) {
      var fileContent = Utils.readFile(content);
      var newContent = Utils.trim(fileContent);

      fs.writeFileSync(content, newContent);
      return this.log('Trimed: ' + content);
    }

    return content.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,'');
  },

  /* Utils.each();
   * Return an array of paths */
  each: function (path) {
    return glob.sync(path);
  }
};

module.exports = Utils;
