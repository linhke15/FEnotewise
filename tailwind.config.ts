import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    deep: "#080f1f",
                    mid: "#162447",
                },
                gold: {
                    light: "#e8b84b",
                    pale: "#f5e9c8",
                },
            },
            fontFamily: {
                display: ["Playfair Display"],
                body: ["DM Sans"],
            },
        },
    },
    plugins: [],
} satisfies Config;