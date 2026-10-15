/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shd: {
          dark: "#233026",    // deep forest green - primary dark sections
          darker: "#1b1e1b",  // near-black (selected work, dark footer)
          ink: "#1c211d",     // body text / headings
          cream: "#f4f1eb",   // page background
          paper: "#f8f6f2",   // lighter tile / input background
          card: "#eeeae2",    // beige card background
          sand: "#e7e0d4",    // warm sand tile
          gold: "#b8945a",    // accent gold (used sparingly)
          navy: "#0a1b2f",    // logo navy (wordmark only)
          line: "#e2ddd2",    // hairline borders on cream
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        wrap: "1400px",
      },
    },
  },
  plugins: [],
};
