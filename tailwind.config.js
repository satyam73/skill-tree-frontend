/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            black: {
                dark: "#000",
                light: "#4B5563",
            },
            white: "#fff",
            blue: "#2563EB",
            gray: {
                100: "#F3F4F6",
                400: "#e5e5e5",
                600: "#D9D9D9",
            },
            red: {
                dark: "#DC2626",
                light: "#FEF2F2",
            },
        },
    },
    plugins: [],
};
