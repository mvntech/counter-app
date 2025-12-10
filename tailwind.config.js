/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./index.ts",
    "./**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
};
