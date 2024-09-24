import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"

function way(name){
  return path.resolve(__dirname, name)
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000
  },
  resolve: {
    alias: {
      '~': way('src'),
      '@pages': way('src/pages'),
      '@partials': way('src/pages/partials/index'),
      '@auth': way('src/pages/auth/index'),
      '@profile': way('src/pages/profile/index'),
      '@components': way('src/components/index')
    },
  },

})
