'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './Kraiviks/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/Kraiviks/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
