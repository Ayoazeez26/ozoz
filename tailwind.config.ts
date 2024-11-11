import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        grey: "#2B2B2B",
        brown: "#A86563",
        blue: "#194185",
        lime: "#BFF3CF",
        green: "#184F2C",
        red: "#B4181A",
        "green-2": "#1B7339",
        "grey-2": "#F5FAFF",
        "grey-3": "#E5E7EB",
        "grey-4": "#FFFBF5",
        "grey-5": "#E0E0E0",
        "blue-2": "#102A56",
        "blue-3": "#2A2A2A",
        "red-2": "#E00002",
        "brown-2": "#EDD5B9",
        "brown-3": "#F9EDDF",
      },
      backgroundImage: {
        "hero-bg": "url(/img/home-img.webp)",
        "bero-bg-mob": "url(/img/home-mob-img.webp)",
      },
      fontFamily: {
        recoleta: ["'Recoleta'", "sans-serif"],
        sauce: ["'OpenSauceTwo'", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
