const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ],
        exclude: /node_modules/,
        options: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};