import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        brand: "var(--color-brand)",
        "brand-orange": "var(--color-brand-orange)",
        "brand-yellow": "var(--color-brand-yellow)",

        background: "var(--color-background)",
        surface: "var(--color-surface)",

        heading: "var(--color-heading)",
        body: "var(--color-body)",

        border: "var(--color-border)",
      },
    },
  },
};
