// vite.config.js
/* eslint-disable no-undef */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import alias from '@rollup/plugin-alias';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        alias({
          entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
        }),
      ],
    },
  },
});
