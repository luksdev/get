/**
 * get.js
 * 
 * @param {string | string[]} path
 * @param {object} data
 * @returns unknown
 */

function get(path, data) {
  try {
    if (typeof path === 'string' && typeof data === 'object') {
      let newPathString = '';
      newPathArray = path.split('.');
      Array.isArray(newPathArray) && newPathArray.forEach(function (item, index) {
        if (!isNaN(item)) {
          newPathString += `[${item}]`;
        }
        else {
          newPathString += `.${item}`;

          console.log("Final: " + newPathString)
        }
      });
      return eval(`data${newPathString}`);
    }
    else if (Array.isArray(path) && typeof data === 'object') {
      let newPath = '';
      path.forEach((item) => newPath += `["${item}"]`);
      return eval(`data${newPath}`);
    }
    return undefined
  }
  catch (e) {
    return undefined
  }
}

module.exports = { get }