import run from './run';

/**
 * 发布脚本
 */
async function build() {
  await run(require('./clean'));
  await run(require('./bundle'));
  // await run(require('./compile'));
}

export default build;