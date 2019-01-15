const express = require('express');
const webpack = require('webpack');
const webpackDevMidllerWare = require('webpack-dev-middleware');

const app = new express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMidllerWare(compiler, {
  publicPath: config.output.publicPath
}))

app.listen(8880, () => {
  console.log('app run in http://loclhost:8880')
})
