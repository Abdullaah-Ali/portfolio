module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'sans': ['Inter', 'Arial', 'sans-serif'],  // Ensure `sans` is defined
        'mono': ['Menlo', 'Monaco', 'Courier New', 'monospace'],  // Ensure `mono` is defined
        'quicksand': ['Quicksand', 'sans-serif'],  // Add Quick Sand here
        'inter': ['Inter', 'sans-serif'],  // Add Open Sans here
        'roboto': ['Roboto', 'sans-serif'],  // Add Open Sans here
      },
    },
  },
  plugins: [],
};
