import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  server: {
    watch: {
      ignored: ['**/dist/**', '**/.git/**', '**/node_modules/**'],
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router', 'lucide-react', 'motion/react', 'react-helmet-async'],
  },
  build: {
    emptyOutDir: false,
    // Client build only: give the main entry script and its stylesheet fixed
    // names (assets/site.js, assets/site.css). Every prerendered page links to
    // them, so with hashed names each build changed all ~100 HTML files and the
    // FTP deploy re-uploaded every page. Fixed names keep unchanged pages
    // byte-identical. .htaccess serves these two files with no-cache so
    // browsers revalidate them; all other chunks stay hashed and immutable.
    ...(isSsrBuild
      ? {}
      : {
          rollupOptions: {
            input: { site: path.resolve(__dirname, 'index.html') },
            output: {
              entryFileNames: 'assets/site.js',
              chunkFileNames: 'assets/[name]-[hash].js',
              assetFileNames: (info: { names?: string[]; name?: string }) => {
                const names = info.names ?? (info.name ? [info.name] : [])
                return names.includes('site.css')
                  ? 'assets/site.css'
                  : 'assets/[name]-[hash][extname]'
              },
            },
          },
        }),
  },
  ssr: {
    // react-helmet-async ships as CJS; bundle it into the SSR output so Node's
    // ESM loader can resolve its named exports during prerendering.
    noExternal: ['react-helmet-async'],
  },
}))
