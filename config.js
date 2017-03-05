/**
 * h5-build config
 */
const path = require('path');

module.exports = function(defaultConfig, buildArgs) {
  console.log('buildArgs debug:', buildArgs.debug);

  return {
    clean: function() {
      // debug or build
    },
    copy: function() {
      // debug or build
    },
    compile: function() {
      // debug or build
    },
    webpack: function() {
      // debug or build
      return {
        entry: {
          'h5_cache': [path.resolve(__dirname, './src/index.js')],
        },
        output: {
          path: path.join(__dirname, './dist/'),
          filename: '[name].js',
          publicPath: '/',
          sourcePrefix: '',
          sourceMapFilename: '[name].js.map',
          library: '[name]',
          libraryTarget: 'umd',
        },
      };
    },
  };
};
