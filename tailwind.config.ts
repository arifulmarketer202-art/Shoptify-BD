import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary-color)",
                background: "var(--bg-color)",
                text: "var(--text-color)",
            },
        },
    },
    plugins: [],
};
export default config;
