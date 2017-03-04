var path = require('path');

module.exports = {
  entry: {
    'h5_cache': [path.resolve(__dirname, './src/index.js')],
  },
  output: {
    path: path.join(__dirname, './dist/'),
    filename: '[name].js',
    publicPath: '/',
    sourcePrefix: '',
    sourceMapFilename: '[name].js.map',
    library: 'h5_cache',
    libraryTarget: 'umd',
  },
  externals: [/*{
      react: 'React',
    }, {
      'react-dom': 'ReactDOM',
    }*/],
  devtool: '',
};
