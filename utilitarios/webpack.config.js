const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MinifyPlugin            = require('babel-minify-webpack-plugin');
const webpack = require('webpack'); 
const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin");
//const compiler = require('webpack');

const pages = ["jokes"];

module.exports = {
    mode: 'development',
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.js`;
        return config;
      }, {}),
      output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
      },
    optimization: {
    minimizer: [ new OptimizeCssAssetsPlugin()],
      splitChunks: {
      chunks: "all",
    },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
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
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
            { from: 'src/assets', to: 'assets/' },
        ]}),
        new webpack.ProvidePlugin({
            $: require.resolve('jquery'),
            jQuery: require.resolve('jquery')
        }),
        new MinifyPlugin(),
    ].concat(
        pages.map(
          (page) =>
            new HtmlWebpackPlugin({
              inject: true,
              template: `./${page}.html`,
              filename: `${page}.html`,
              chunks: [page],
            })
        )
      ),

}

