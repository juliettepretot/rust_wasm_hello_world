const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'static' }]
    }),

    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, 'rust')
    })
  ],
  mode: 'development'
}
