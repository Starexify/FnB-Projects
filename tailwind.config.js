/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,ts}",
        "./dist/**/*.{html,js}",
        "./*.{html,js}"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}