import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig(({command, mode}) => {
  if (mode === 'lib') {
    return {
      build: {
        target: 'modules', // 目标环境
        emptyOutDir: true,
        lib: {
          entry: path.resolve(__dirname, 'src/index.tsx'),
          formats: ['es', 'cjs']
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: [
            {
              format: 'es',
              entryFileNames: '[name].js',
              dir: 'es',
              preserveModules: true
            },
            {
              format: 'cjs',
              entryFileNames: '[name].js',
              dir: 'lib',
              preserveModules: true,
              exports: 'named'
            }
          ]
        }
      },
      plugins: [
        dts({
          entryRoot: 'src',
          outDir: 'es',
          tsconfigPath: './tsconfig.json'
        }),
        dts({
          entryRoot: 'src',
          outDir: 'lib',
          tsconfigPath: './tsconfig.json'
        })
      ]
    };
  } else {
    return {
      base: '/qrcode-react/',
      build: {
        outDir: 'dist'
      },
      server: {
        open: true
      }
    };
  }
});
