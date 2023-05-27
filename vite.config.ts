import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

import externalGlobals from 'rollup-plugin-external-globals'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'],
      dts: 'src/components.d.ts',
      resolvers: [AntDesignVueResolver()]
    })
  ],

  build: {
    minify: false,
    rollupOptions: {
      external: ['vue'],
      plugins: [
        externalGlobals({
          vue: 'Vue'
        })
      ]
    }
  }
})
