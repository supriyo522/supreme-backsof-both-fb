// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './constants/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'white-to-blue-gradient': 'linear-gradient(to bottom, white, #cce4f7)',
      },
    },
  },
  plugins: [],
};
