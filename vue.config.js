module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio-2020/' : '/',
  configureWebpack: {
    devtool: 'source-map'
  }
}
