/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                'skew-card': {
                    '0%': { transform: 'skewY(0)' },
                    '100%': { transform: 'skewY(-4deg)', scale: '90%' }
                }
            },
            animation: {
                'skew-card': 'skew-card 3s ease-in-out 1s'
            }
        }
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                mytheme: {
                    text: '#5F5F5F',
                    primary: '#772CE8',
                    secondary: '#A970FF',
                    accent: '#00DB84',
                    neutral: '#292524',
                    'base-100': '#131316',
                    'base-200': '#161618',
                    'base-300': '#18181B',
                    'dark': '#0c0c0d',
                    info: '#3abff8',
                    success: '#36d399',
                    warning: '#fbbd23',
                    error: '#f87272',
                },
            },
        ],
    },
}
