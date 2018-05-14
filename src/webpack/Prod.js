const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const BaseConfig = require('./Base');


class ProdConfig extends BaseConfig {
  constructor() {
    super();
    this.config = {
      plugins: [
        new UglifyJsPlugin({ //todo add production configuration
          test: /\.(js|jsx)($|\?)/i,
          parallel: 4,
          sourceMap: false,
          uglifyOptions: {
            mangle: {
              keep_classnames: false,
              keep_fnames: false,
            }
          }
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"' + this.env + '"',
          NODE_ENV: JSON.stringify(this.env)
        }),
      ]
    };
  }

  get env() {
    return 'production';
  }
}

module.exports = ProdConfig;