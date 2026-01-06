/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cta: '#E5E5E5',
          'cta-hover': '#FFFFFF',
          'cta-text': '#0E0E10',
        },
        hover: '#1E1E20',
        border: {
          light: '#2A2A2C',
          strong: '#3A3A3D',
        },
        success: '#10B981',
        background: '#0B0B0C',
        surface: '#141416',
        text: {
          primary: '#FFFFFF',
          secondary: '#DADADA',
          muted: '#0E0E10',
        },
        accent: {
          blue: '#3B82F6',
          yellow: '#E5D62E',
        }
      },
    },
  },
  plugins: [],
}

