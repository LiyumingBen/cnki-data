/*
 * @Author: LYM
 * @Date: 2022-04-12 11:12:09
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-31 19:02:38
 * @Description: vite配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const __DEV__ = mode === 'development'

  return defineConfig({
    base: './', //打包路径
    plugins: [
      vue(),
      // gzip压缩 生产环境生成 .gz 文件
      // viteCompression({
      //   verbose: true,
      //   disable: false,
      //   threshold: 10240,
      //   algorithm: 'gzip',
      //   ext: '.gz',
      // }),
      // 自动引入element plus
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // 配置别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/index.scss";',
          charset: false, // 去掉打包警告 warning: "@charset" must be the first rule in the file
        },
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              },
            },
          },
        ],
      },
    },
    //启动服务配置
    server: {
      host: '0.0.0.0',
      port: 9093,
      open: true,
      https: false,
      proxy: {},
    },
    // 生产环境打包配置
    build: {
      assetsDir: 'static',
      rollupOptions: {
        input: path.resolve(__dirname, 'index.html'),
        output: {
          entryFileNames: `static/app.js`,
          chunkFileNames: `static/[name].js`,
          assetFileNames: `static/[name].[ext]`,
        },
      },
      cssCodeSplit: false,
    },
    //去除 console debugger
    esbuild: __DEV__ ? {} : { drop: ['debugger', 'console'] },
  })
}
