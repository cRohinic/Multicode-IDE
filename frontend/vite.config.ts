import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 👇 This line tells Vite to forward requests starting with `/piston`
      // to the external API at https://emkc.org/api/v2/piston
      '/piston': {
        target: 'https://emkc.org',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/piston/, '/api/v2/piston'),
      },
    },
  },
})
