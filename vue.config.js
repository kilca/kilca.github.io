const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  //? '/Portfolio/' // note the trailing slash
  ? '/' // note the trailing slash
  : '/',
})
