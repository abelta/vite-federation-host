import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        host: 'http://localhost:4999/assets/remoteEntry.js',
        remote1: 'http://localhost:5001/assets/remoteEntry.js',
      },
      exposes: {
        './Can': './src/components/Can',
        './useAbilities': './src/hooks/useAbilities',
        './useUser': './src/hooks/useUser',
        './store': './src/store/store',
      },
      shared: [
        'react',
        'react-dom',
        // '@casl/ability',
        // '@casl/react',
        'zustand',
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
})
