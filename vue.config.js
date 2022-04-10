const { defineConfig } = require('@vue/cli-service')
publicPath: process.env.NODE_ENV === "production" ? "/trevor-beats-test/" : "/",
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/trevor-beats-test/'
    : '/'
}


