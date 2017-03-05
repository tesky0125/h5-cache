/**
 * h5-build config
 */
var path = require('path');

module.exports = function(defaultConfig, buildArgs) {
  console.log('buildArgs debug:',buildArgs.debug)

  return {
    clean: function() {

    },
    copy: function() {

    },
    compile: function() {

    },
    webpack: function() {
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
