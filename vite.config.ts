import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { extname, relative, resolve } from 'path'
import dts from "vite-plugin-dts"
import { libInjectCss }from "vite-plugin-lib-inject-css"
import { glob } from "glob"
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({include: ["lib"]})],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ["es"]
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(glob.sync("lib/**/*.{ts,tsx}", {ignore: ["lib/**/*.d.ts"]}).map((file) => [
        // Entry point goes from lib/component/button.tsx to component/button
        relative('lib', file.slice(0, file.length - extname(file).length)),
        // Absolute path to entry file
        // lib/component/button.tsx becomes /project/lib/component/button.tsx
        fileURLToPath(new URL(file, import.meta.url))
      ])),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      }
    }
  },
})
