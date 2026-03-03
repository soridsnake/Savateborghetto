/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: '#050505',
                darker: '#020202',
                accentRed: '#ff2a5f',
                accentBlue: '#00f0ff',
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                'primary-hover': '0 0 20px rgba(255, 42, 95, 0.5)',
                'secondary-hover': '0 0 20px rgba(0, 240, 255, 0.3)',
            }
        },
    },
    plugins: [],
}
