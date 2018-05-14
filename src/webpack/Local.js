const path = require('path');
const webpack = require('webpack');

const BaseConfig = require('./Base');


class LocalConfig extends BaseConfig {
  constructor() {
    super();
    this.config = {
      entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:5000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        './src/index.js'
      ],
      devtool: 'inline-source-map',
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
      },
      devServer: {
        hot: true,
        host: '0.0.0.0',
        port: 5000,
        contentBase: './dist',
        publicPath: '/',
        historyApiFallback: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
      ]
    };
  }

  get env() {
    return 'local';
  }
}

module.exports = LocalConfig;