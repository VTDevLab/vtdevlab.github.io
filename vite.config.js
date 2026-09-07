import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: '/reservas-demo/',
  build: {
    outDir: 'dist',
  },
});
