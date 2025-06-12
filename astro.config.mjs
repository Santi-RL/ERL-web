// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://santi-rl.github.io/ERL-web/',
  vite: {
    plugins: [tailwindcss()]
  }
});
