import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, type Plugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Unwrap CSS @layer blocks in production bundle while preserving exact document order
 * so iOS Safari < 15.4 (e.g., iPhone 8 / X / XS Max on iOS 14-15.3) still parses all Tailwind utilities.
 */
function unwrapCssLayers(css: string): string {
  // Remove standalone layer order declarations like `@layer properties, theme, base, components, utilities;`
  let result = css.replace(/@layer\s+[^{};]+;/g, '');
  let output = '';
  let i = 0;

  while (i < result.length) {
    if (result.startsWith('@layer ', i) || result.startsWith('@layer\t', i)) {
      const openBrace = result.indexOf('{', i);
      const semicolon = result.indexOf(';', i);
      if (semicolon !== -1 && (openBrace === -1 || semicolon < openBrace)) {
        i = semicolon + 1;
        continue;
      }
      if (openBrace !== -1) {
        let depth = 1;
        let j = openBrace + 1;
        while (j < result.length && depth > 0) {
          if (result[j] === '{') depth++;
          else if (result[j] === '}') depth--;
          j++;
        }
        output += result.slice(openBrace + 1, j - 1);
        i = j;
        continue;
      }
    }
    output += result[i];
    i++;
  }

  return output;
}

function iosCompatCssPlugin(): Plugin {
  return {
    name: 'ios-compat-css-layers',
    enforce: 'post',
    generateBundle(_options, bundle) {
      for (const fileName of Object.keys(bundle)) {
        const asset = bundle[fileName];
        if (
          fileName.endsWith('.css') &&
          asset.type === 'asset' &&
          typeof asset.source === 'string'
        ) {
          asset.source = unwrapCssLayers(asset.source);
        }
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      iosCompatCssPlugin(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true,
        },
        includeAssets: [
          'icon.svg',
          'apple-touch-icon.png',
          'pwa-192x192.png',
          'pwa-512x512.png',
          'pwa-maskable-512x512.png',
        ],
        manifest: {
          id: '/',
          name: 'Luyện tập Toán 12 - 2026-2027',
          short_name: 'Toán 12',
          description:
            'Ứng dụng kiểm tra và đánh giá năng lực môn Toán lớp 12 chuẩn cấu trúc 4 phần, hoạt động mượt mà kể cả khi không có Wi-Fi.',
          theme_color: '#040817',
          background_color: '#040817',
          display: 'standalone',
          orientation: 'portrait-primary',
          scope: '/',
          start_url: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
            {
              src: '/icon.svg',
              sizes: 'any',
              type: 'image/svg+xml',
              purpose: 'any',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,png,svg,woff,woff2}'],
          maximumFileSizeToCacheInBytes: 15 * 1024 * 1024,
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
          navigateFallback: '/index.html',
          navigateFallbackDenylist: [/^\/api\//],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 15,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      }),
    ],
    css: {
      lightningcss: {
        targets: {
          safari: 13 << 16,
          ios_saf: 13 << 16,
          chrome: 80 << 16,
        },
      },
    },
    build: {
      target: ['es2019', 'safari13'],
      cssTarget: ['safari13', 'chrome80'],
      cssMinify: 'lightningcss' as const,
      chunkSizeWarningLimit: 1500,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
