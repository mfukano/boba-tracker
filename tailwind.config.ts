import { Config } from "npm:tailwindcss";

export default {
  theme: {
    fontFamily: {
      geist: ["Geist", "sans-serif"],
      rustyhooks: ["Rusty-Hooks", "sans-serif"],
    },
  },
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
} satisfies Config;
