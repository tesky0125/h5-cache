const del = require('del');
const fs = require('./lib/fs');

/**
 * Cleans up the output (build) directory.
 */
function clean() {
  return new Promise((resolve, reject) => {
    const debug = global.DEBUG;
    const delArr = debug ? ['demo/libs'] : ['.tmp', 'build/*', 'dist/*', '!dist/.git'];

    del(delArr, { dot: true }).then(() => {
      return resolve();
    }).catch((err) => {
      return reject(err);
    });
  });
}

module.exports = clean;
