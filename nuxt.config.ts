// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/css/font.css", "@/assets/css/global.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "nuxt-headlessui",
    "nuxt-swiper",
  ],
  app: {
    head: {
      title: "Ozoz Sokoh",
      meta: [
        {
          name: "description",
          content:
            "Ozoz Sokoh is a food explorer and traveller by plate, educator and researcher exploring Nigeria and West African diaspora and Global Foodways. She believes that Food is More than Eating.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
});