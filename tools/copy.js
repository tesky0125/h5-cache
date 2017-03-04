import path from 'path';
import Promise from 'bluebird';
import fs from './lib/fs';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
async function copy() {
  const ncp = Promise.promisify(require('ncp'));

  await Promise.all([
    ncp(path.resolve(__dirname, '../libs'), path.resolve(__dirname, '../demo/libs')),
  ]);
}

export default copy;
