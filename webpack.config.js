module.exports = {
  context: __dirname + "/src/js/components",
  entry: "./App.jsx",
  output: {
    path: __dirname + "/dist",
    filename: "App.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
}
