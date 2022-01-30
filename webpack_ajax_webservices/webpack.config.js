const HtmlWebPackPlugin       = require('html-webpack-plugin'); 
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin            = require('babel-minify-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin }  = require('webpack-bundle-analyzer'); 

module.exports = {
    mode: 'production',
    entry: {
      randompic: './src/randompic.js',
      index: './index.js',
      jokes: './src/jokes.js'
    },
    output: {
      filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {     sources: false }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            },
            {
              // Exposes jQuery for use outside Webpack build
                 test: require.resolve('jquery'),
                 use: [
                     {
                          loader: 'expose-loader',
                          options: {
                             exposes: ["$", "jQuery"]
                           }
                      }
                     ]
                  }
              ]
    },
    
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html',
            chunks: [
              "index"
            ]
        }),
        new HtmlWebPackPlugin({
          template: './src/randompic.html',
          filename: './randompic.html',
          chunks: [
            "randompic"
          ]
      }),
      new HtmlWebPackPlugin({
        template: './src/jokes.html',
        filename: './jokes.html',
        chunks: [
          "jokes"
        ]
    }),
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css',
            ignoreOrder: false
        }),
        new MinifyPlugin(),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ]

}
