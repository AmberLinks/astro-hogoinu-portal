/** @type {import('tailwindcss').Config} */
export default {
  // ▼▼▼ この content 設定が最重要です ▼▼▼
  // Tailwindに、srcフォルダ内のastroファイルやtsファイルを監視するよう指示
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  // ▲▲▲ ▲▲▲
  
  theme: {
    extend: {},
  },
  plugins: [],
}