// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/css/font.css", "@/assets/css/global.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/icon", "nuxt-headlessui"],
  googleFonts: {
    families: {
      "Open+Sans": "400..800",
    },
  },
});