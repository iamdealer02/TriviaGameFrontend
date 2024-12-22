// vite.config.js
/* eslint-disable no-undef */

import path from 'path'; // Add this line at the top
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
