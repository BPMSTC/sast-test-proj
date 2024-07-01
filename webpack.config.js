// Import necessary Node.js modules required in the configuration
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// Webpack configuration is exported as a module, making it usable by the Webpack utility
module.exports = {
  // Entry point of the application
  entry: './app.js',
  // Output configuration for the bundled file
  output: {
    filename: 'bundle.min.js',  // the name of the output file
    path: path.resolve(__dirname, 'build'),  // the path to output directory
  },
  // Set the mode to 'production' which enables optimizations like minification and dead code elimination
  mode: 'production',
  // Module property describes how to treat different types of modules
  module: {
    rules: [
      {
        test: /\.js$/,  // A regex that catches all files that end in `.js`
        exclude: /node_modules/,  // Exclude processing files in node_modules directory
        use: {
          loader: 'babel-loader',  // Use babel-loader to transpile JavaScript files
          options: {
            presets: ['@babel/preset-env']  // Preset used for transpiling ES6 and above to ES5
          }
        }
      },
      {
        test: /\.css$/,  // A regex that catches all files that end in `.css`
        use: [MiniCssExtractPlugin.loader, 'css-loader']  // Use these loaders to process CSS files
      }
    ]
  },
  // Plugins that perform wider-scope tasks like bundle optimization and asset management
  plugins: [
    new TerserPlugin(),  // Minimizes JavaScript
    new MiniCssExtractPlugin({  // Extracts CSS into separate files to support caching and parallel loading
      filename: '[name].css'  // Name of the output CSS file
    })
  ]
};
