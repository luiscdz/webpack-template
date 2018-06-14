const path = require('path');// modulo que permite el manejo de rutas relativas
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname,'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader',
          'css-loader'
        ],
      }, 
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options:{
              user: [ 
                require('nib'),
                require('rupture')
              ],
              import: [
                '~nib/lib/nib/index.styl',
                '~rupture/rupture/index.styl'
              ]
            }
          }
        ],
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.(jpg|png|gif|woff|ttf|svg|eot)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000
          }
        }
      }, {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            name: 'video/[name].[hash].[ext]',

          }
        }
      }/* ,
      {
        test: /\.json$/,
        use: {
          loader: 'json-loader'
        }
      } */
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].css"
    })
  ],
  watch: true
}