import del from 'del';
import fs from './lib/fs';

/**
 * Cleans up the output (build) directory.
 */
async function clean() {
  const debug = global.DEBUG;
  const delArr = debug ? ['demo/libs'] : ['.tmp', 'build/*', 'dist/*', '!dist/.git'];
  await del(delArr, {
    dot: true,
  });
}

export default clean;
