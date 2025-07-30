/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}",    // If using pages/ directory
    "./components/**/*.{js,ts,jsx,tsx}" // For your components like Navbar
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: 'var(--font-geist-sans)',
        mono: 'var(--font-geist-mono)',
      },
    },
  },
  plugins: [],
}


