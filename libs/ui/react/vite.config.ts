/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import react from '@vitejs/plugin-react'
import { join } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// import { glob } from 'glob'
// import { extname, join, relative } from 'path'
// import { fileURLToPath } from 'url'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libs/ui/react',

  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      pathsToAliases: false,
      tsconfigPath: join(__dirname, 'tsconfig.lib.json'),
    }),
    nxViteTsPaths(),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../../dist/libs/ui/react',
    reportCompressedSize: true,
    emptyOutDir: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'ui-react',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'styled-components',
        // ...Object.keys(pkg.dependencies).map(dep => new RegExp(`^${dep}(/|$)`)),
      ],
      // input: Object.fromEntries(
      //   glob
      //     .sync('src/**/*.{ts,tsx}')
      //     .map(file => [
      //       relative('src', file.slice(0, file.length - extname(file).length)),
      //       fileURLToPath(new URL(file, import.meta.url)),
      //     ]),
      // ),
    },
  },
})
