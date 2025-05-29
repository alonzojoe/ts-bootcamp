const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/modules/index.ts",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: "[contenthash].bundle.js", // Use "contenthash" for better caching
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/", // Ensure trailing slash for consistency
  },
};
