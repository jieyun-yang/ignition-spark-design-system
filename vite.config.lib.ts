import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { readdirSync, statSync } from 'fs';

// Get all component directories for separate chunks
function getComponentEntries() {
  const componentsDir = path.resolve(__dirname, 'design-system/components');
  const entries: Record<string, string> = {};

  readdirSync(componentsDir).forEach((name) => {
    const componentPath = path.join(componentsDir, name);
    if (statSync(componentPath).isDirectory()) {
      const indexPath = path.join(componentPath, 'index.ts');
      entries[`components/${name}`] = indexPath;
    }
  });

  return entries;
}

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'design-system/index.ts'),
        tokens: path.resolve(__dirname, 'design-system/tokens/index.ts'),
        ...getComponentEntries(),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        preserveModules: false,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'styles.css';
          return assetInfo.name || 'asset';
        },
      },
    },
    outDir: 'dist',
    emptyDir: true,
    cssCodeSplit: false,
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './design-system'),
    },
  },
});
