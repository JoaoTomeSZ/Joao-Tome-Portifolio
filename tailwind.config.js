module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Adapte esse caminho conforme necessário
    ],
    theme: {
      extend: {
        animation: {
          typing: 'typing 2s steps(9) 1s forwards',
          blink: 'blink 0.75s step-end infinite',
        },
        keyframes: {
          typing: {
            '0%': { width: '0' },
            '100%': { width: '9ch' },
          },
          blink: {
            '0%, 100%': { borderColor: 'transparent' },
            '50%': { borderColor: 'black' },
          },
        },
      },
    },
    plugins: [],
  }