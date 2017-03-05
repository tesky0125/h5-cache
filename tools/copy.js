const path = require('path');
const Promise = require('bluebird');
const fs = require('./lib/fs');

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
function copy() {
  const ncp = Promise.promisify(require('ncp'));

  return Promise.all([
    ncp(path.resolve(__dirname, '../libs'), path.resolve(__dirname, '../demo/libs')),
  ]);
}

module.exports = copy;
