const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')



module.exports = {
    entry:{ main: './src/index.js'},
    output: {
      path: __dirname + "/dist/",
      filename: "bundle.js",
      chunkFilename: '[name].js'
    },
    
    devServer: {
      contentBase: __dirname,
      hot: true,
  },

    module: {
      rules: [ 
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'sass-loader',
          ],
        },

        {
            test: /\.pug$/,
            use: ['pug-loader']
          },
      ],
    },
    
    plugins: [
      new MiniCssExtractPlugin(),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 8080,
        server: { baseDir: __dirname + "/dist/" },
      }),

      new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/pug/pages/index.pug',
        inject: false
      }),

      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
}

