const path = require('path');
const webpack = require('webpack');
const yargs = require('yargs');

const argv = yargs.usage('Usage: npm start [options]')
  .example('npm start -- --port=3000 --verbose', 'html5-cache demo build')
  .alias('p', 'port').default('p', 3000)
  .alias('v', 'verbose').default('v', false)
  .help('h').argv;

const PORT = global.PORT = argv.port;
const VERBOSE = argv.verbose;

console.log('PORT:', PORT, ',VERBOSE:', VERBOSE);

module.exports = {
  entry: {
    'libs/demo': ['webpack-hot-middleware/client', 'webpack/hot/dev-server', path.resolve(__dirname, '../demo') + path.sep + 'index.js'],
  },
  output: {
    path: path.join(__dirname, '../demo/'),
    filename: '[name].js',
    publicPath: '/',
    sourcePrefix: '',
    sourceMapFilename: '[name].js.map',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../demo'),
      ],
      loaders: ['react-hot', 'babel-loader'],
    }],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      __DEV__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  externals: [],
  stats: {
    colors: VERBOSE,
    reasons: VERBOSE,
    hash: VERBOSE,
    version: VERBOSE,
    timings: VERBOSE,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: true,
    cachedAssets: true,
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
  },
  devtool: 'cheap-module-source-map',
  debug: true,
  cache: true,
};
