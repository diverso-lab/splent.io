/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./*.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          900: "#0a0f1a",
          800: "#0f1623",
          700: "#151d2c",
          600: "#1c2538",
          500: "#2a3448",
        },
        brand: {
          50:  "#eaf3fb",
          100: "#cfe3f3",
          200: "#9cc6e6",
          300: "#62a3d4",
          400: "#3387c1",
          500: "#1a73b2",
          600: "#105b99",
          700: "#0b4378",
          800: "#082f57",
          900: "#051f3b",
        },
        amber: {
          350: "#ffd961",
          450: "#fece3e",
          550: "#e9b71f",
        },
      },
      keyframes: {
        blink:   { "0%,50%": { opacity: "1" }, "51%,100%": { opacity: "0" } },
        float:   { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-8px)" } },
        shimmer: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
        fadeUp:  { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        blink:   "blink 1s steps(2) infinite",
        float:   "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        fadeUp:  "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
