/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "fundo-texture": "url('/public/tecido01.png')"
      }
    },
  },
  plugins: [],
  corePlugins: {
    backgroundImage: true
  }
}

