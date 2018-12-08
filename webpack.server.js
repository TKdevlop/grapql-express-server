const path = require("path");

module.exports = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: "node",

  // Tell webpack the root file of our
  // server application
  // babel-polyfill for using async-await syntax

  entry: ["babel-polyfill", "./index.js"],

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },

  mode: "development"
};
