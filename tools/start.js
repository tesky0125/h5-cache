const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.demo');
const run = require('./run');

const DEBUG = global.DEBUG;
const VERBOSE = global.VERBOSE;

const bundler = webpack(webpackConfig);

function start() {
  return run(require('./clean'))
  .then(() => run(require('./copy')))
  .then(() => {
    browserSync({
      port: global.PORT,
      ui: {
        port: global.PORT + 1,
      },
      server: {
        baseDir: './demo/',

        // http://webpack.github.io/docs/webpack-dev-middleware.html
        middleware: [
          webpackDevMiddleware(bundler, {
            publicPath: webpackConfig.output.publicPath,
            stats: {
              colors: VERBOSE,
              chunks: VERBOSE,
              children: VERBOSE,
              warnings: VERBOSE,
            },
          }),

          webpackHotMiddleware(bundler),
        ],
      },

      // no need to watch '*.js' here, webpack will take care of it for us,
      // including full page reloads if HMR won't work
      files: [
        'src/**/*.css',
        'src/**/*.html',
      ],
    });
  });
}

module.exports = start;
