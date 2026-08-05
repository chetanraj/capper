import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@capper-ui/react': new URL('../react/src/index.ts', import.meta.url).pathname,
    },
  },
  test: {
    environment: 'jsdom',
    environmentOptions: {
      jsdom: { url: 'http://localhost' },
    },
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
  },
});
