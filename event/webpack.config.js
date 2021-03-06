const path = require('path')
const webpack = require('webpack')

module.exports = {

  entry: [
    './event/src/index.js'
  ],

  output: {
    filename: 'event.js',
    path: path.join(__dirname, '../', 'build')
  },

  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules']
  },

  module: {
    rules: [
      {
        test: /\.(js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src')
      }
    ]
  },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
}
