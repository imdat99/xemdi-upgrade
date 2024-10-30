import { transformSource } from "react-server-dom-webpack/node-loader";
import type { Plugin } from "vite";

/*
 * A Vite plugin that just delegates to `transformSource`.
 */
export const reactServerPlugin = (): Plugin => ({
  name: "react-server",
  // async transform(code, id) {
  //   const context = {
  //     format: "module",
  //     url: id,
  //   };

  //   const { source } = await transformSource(code, context, async (source) => ({
  //     source,
  //   }));

  //   return source as string;
  // },
  async transform(src, id) {
    // Kiểm tra nếu file là một module React
    if (!id.endsWith('.jsx') && !id.endsWith('.js') && !id.endsWith('.tsx')) {
      return null;
    }

    // Kiểm tra cờ 'use client' ở dòng đầu tiên
    const isClientComponent = src.startsWith("'use client';") || src.startsWith('"use client";');
    
    if (isClientComponent) {
      // Chạy transformSource để xử lý Client Components
      const result = await transformSource(src, { mode: 'client' }, async (source) => ({
        source
      }));
      return {
        code: result.source,
        map: result.map,
      };
    }
    
    // Nếu không có 'use client', xử lý như một Server Component bình thường
    return src;
  },
});
