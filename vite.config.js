import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://sachidanand-sah.github.io/Sachidanand-Portfolio-website/
export default defineConfig({
  plugins: [react()],
  base: '/Sachidanand-Portfolio-website/',
});
