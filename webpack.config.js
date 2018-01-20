module.exports = {
  entry: {
    pure: './pure.js',
    class: './class.js'
  },
  output: {
    filename: '[name].build.js'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
