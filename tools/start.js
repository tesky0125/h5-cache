import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.demo';
import run from './run';

const DEBUG = global.DEBUG;
const VERBOSE = global.VERBOSE;

const bundler = webpack(webpackConfig);

async function start() {
  await run(require('./clean'));
  await run(require('./copy'));

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
}

export default start;
