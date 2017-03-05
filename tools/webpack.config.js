const path = require('path');
const webpack = require('webpack');
const yargs = require('yargs');

const pkg = require(path.join(process.cwd(), 'package.json'));

const argv = yargs.usage('Usage: npm run build [options]')
  .example('npm run build --release --verbose', 'html5-cache build')
  .alias('r', 'release').default('r', false)
  .alias('v', 'verbose').default('v', false)
  .help('h').argv;

const DEBUG = !argv.release;
const VERBOSE = argv.verbose;

console.log('DEBUG:', DEBUG, ',VERBOSE:', VERBOSE);

module.exports = {
  entry: {
    'h5_cache': [path.resolve(__dirname, '../src/index.js')],
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].js',
    publicPath: '/',
    sourcePrefix: '',
    sourceMapFilename: '[name].js.map',
    library: 'h5_cache',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, '../src'),
      ],
      loaders: DEBUG ? ['babel-loader'] : ['babel-loader', 'strip-loader?strip[]=console.log,strip[]=console.info'],
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
      __DEV__: DEBUG,
    }),
    ...(DEBUG ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: VERBOSE,
        },
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
    ]),
    ...(DEBUG ? [
      new webpack.HotModuleReplacementPlugin(),
    ] : []),
    new webpack.NoErrorsPlugin(),
    new webpack.BannerPlugin(
      pkg.name + ' v' + pkg.version
    ),
  ],
  externals: [],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
  },
  stats: {
    colors: VERBOSE,
    reasons: false,
    hash: VERBOSE,
    version: VERBOSE,
    timings: VERBOSE,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: false,
    cachedAssets: false,
  },
  devtool: DEBUG ? 'cheap-module-source-map' : '',
  debug: DEBUG,
  cache: false,
};
