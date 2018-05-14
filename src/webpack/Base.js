const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

class WebpackBaseConfig {
  constructor() {
    this._config = {};
  }

  set config(data) {
    this._config = ({ ...this.defaultSettings, ...data });
    return this._config;
  }

  get config() {
    return this._config;
  }

  get defaultSettings() {
    return {
      entry: [
        './src/index.js'
      ],
      devtool: 'inline-source-map',
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './../../dist'),
        publicPath: '/',
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['react', 'es2017']
            }
          },
          {
            test: /\.scss$/,
            use: [{
              loader: "style-loader" // creates style nodes from JS strings
            }, {
              loader: "css-loader" // translates CSS into CommonJS
            }, {
              loader: "sass-loader" // compiles Sass to CSS
            }]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.ejs',
          inject: false
        }),
        new CopyWebpackPlugin([
          {
            from: 'src/resources'
          }
        ])
      ]
    }
  }
}

module.exports = WebpackBaseConfig;