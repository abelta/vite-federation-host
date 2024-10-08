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
        remote2: 'http://localhost:5002/assets/remoteEntry.js',
      },
      exposes: {
        './store': './src/store/store',
        './abilities': './src/abilities',
        './contexts/AbilityContext': './src/contexts/AbilityContext',
        './components/Can': './src/components/Can',
        './hooks/useAbilities': './src/hooks/useAbilities',
        './hooks/useUser': './src/hooks/useUser',
      },
      shared: [
        'react',
        'react-dom',
        '@casl/ability',
        '@casl/react',
        'zustand',
        'react-router-dom',
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
