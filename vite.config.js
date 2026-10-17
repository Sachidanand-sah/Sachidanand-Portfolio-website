import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vercel and local dev serve from the domain root. The GitHub Pages workflow sets
// GITHUB_PAGES=true because that site lives under /Sachidanand-Portfolio-website/.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/Sachidanand-Portfolio-website/' : '/',
});
