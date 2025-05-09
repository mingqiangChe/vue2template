const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/variables" as *;`,
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://backend.example.com', // 后端 API 的基础地址
        changeOrigin: true, // 是否更改请求头中的 origin
        pathRewrite: {
          '^/api': '', // 将请求中的 `/api` 替换为空
        },
      },
    },
  },
});
