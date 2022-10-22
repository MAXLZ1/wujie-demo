const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 9001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  transpileDependencies: true
})
