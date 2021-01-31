  
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common');

module.exports = (env, argv) => {
  if (!argv.mode) {
    throw new Error('You must pass an --mode flag into your build for webpack to work!');
  }

  process.env.BABEL_ENV = argv.mode;
  process.env.NODE_ENV = argv.mode;

  const envConfig = require(`./webpack/webpack.${argv.mode}.js`);

  return merge(commonConfig, envConfig);
};

// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require("path");
// const port = process.env.PORT || 3000;

// module.exports = {
//   mode: 'development',
//     output: {
//       path: path.join(__dirname, "/build"),
//       filename: 'static/js/bundle.[hash].js',
//     },
//     devtool: 'inline-source-map',
//     module: {
//       rules: [
//         // 
//         //Image files
//         {
//           test: /\.(png|jpe?g|gif)$/i,
//           use: [
//             {
//               loader: 'file-loader',
//               options: {
//                 name: '[name].[ext]?[contenthash]',
//                 outputPath: 'static/media/images',
//               },
//             },
//           ],
//         },
//         // Vector files
//         {
//           test: /\.svg$/,
//           loader: 'file-loader',
//           options: {
//             outputPath: 'static/media/svg',
//           },
//         },
//         // Js files
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: ['babel-loader'],
//         },
//         //Css files
//         {
//           test: /\.css$/,
//           use: ['style-loader', 'css-loader'],
//         },
//         // // JSON loader
//         // {
//         //   test: /\.json$/,
//         //   loader: 'json-loader',
//         // },
//         //HTML loader
//         {
//           test: /\.html$/,
//           loader: 'html-loader'
//         }
//       ]
//     },
//     plugins: [
//       // https://github.com/jantimon/html-webpack-plugin
//       new HtmlWebpackPlugin({
//         template: 'public/index.html',
//         // If you want diffent main page name
//         //filename: 'index.htm;'
//       }),
//       new webpack.HotModuleReplacementPlugin(),
//     ],
//     devServer: {
//       host: 'localhost',
//       port: port,
//       historyApiFallback: true,
//       open: true
//     }
// };