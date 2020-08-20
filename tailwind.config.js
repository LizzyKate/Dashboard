module.exports = {
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1040px',
        xl: '1280px',
      },
      colors: {
        default: '#172b4d',
        primary: '#5e72e4',
        secondary: '#f4f5f7',
        info: '#11cdef',
        success: '#2dce89',
        danger: '#f5365c',
        warning: '#fb6340',
        gray: {
          100: '#f6f9fc',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#adb5bd',
          700: '#525f7f',
          800: '#32325d',
          900: '#212529',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
