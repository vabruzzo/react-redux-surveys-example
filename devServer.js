/**
 * External dependencies
 */
var path = require('path');
var fs = require('fs');
var express = require('express');
var historyApiFallback = require('connect-history-api-fallback');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var watch = require('node-watch');

/**
 * Internal dependencies
 */
var config = require('./webpack.config.dev');

// FIXME: this is a hack to get css hot loading working when changing all
// css files and not just the top-level file. Webpack should be able to do
// this on its own but something's up with @imports at the moment.
// issue: https://github.com/postcss/postcss-loader/issues/58
watch(['./src/css/components/'], {
  recursive: true,
  followSymLinks: true
}, function(filename) {
  fs.readFile('./src/css/app.css', 'utf-8', function(err, data) {
    if (err) throw err;

    fs.writeFile('./src/css/app.css', data, function(err) {
      if (err) throw err;
    });
  });
});

var app = express();
var port = 3000;

var compiler = webpack(config);

app.use(historyApiFallback({ verbose: false }));
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(__dirname));

app.get('/api', function (req, res) {
  res.send('ok');
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
