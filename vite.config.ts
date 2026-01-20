import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    {
      name: 'custom-server-info',
      configureServer(server) {
        server.httpServer?.once('listening', () => {
          const address = server.httpServer?.address();
          const port = typeof address === 'object' && address ? address.port : 5173;
          setTimeout(() => {
            console.log('\n');
            console.log('  ┌──────────────────────────────────────────────────┐');
            console.log('  │                                                  │');
            console.log(`  │   🎨 Prototype:    http://localhost:${port}/        │`);
            console.log(`  │   📦 DS Demo:      http://localhost:${port}/demo    │`);
            console.log('  │                                                  │');
            console.log('  └──────────────────────────────────────────────────┘');
            console.log('\n');
          }, 100);
        });
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './design-system'),
    },
  },
  server: {
    // Handle SPA routing - serve index.html for /demo route
    middlewareMode: false,
  },
  appType: 'spa',
});
