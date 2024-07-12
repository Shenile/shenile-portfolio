/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue' : '#0f172a',
        'custom-text-1': '#e2e8f0',
        'custom-text-2': '#8290a4',
        'custom-text-3': '#57d8ce'
      }
    },
  },
  plugins: [],
}
