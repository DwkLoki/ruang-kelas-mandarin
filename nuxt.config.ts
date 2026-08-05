// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: [
      {
        code: "id",
        name: "Bahasa Indonesia",
        language: "id",
        file: "id.json",
      },
      {
        code: "en",
        name: "English",
        language: "en",
        file: "en.json",
      },
      {
        code: "zh",
        name: "中文",
        language: "zh",
        file: "zh.json",
      },
    ],
    defaultLocale: "id",
    strategy: "no_prefix",
    // langDir: "locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_locale",
    },
  },
  css: ["~/assets/css/main.css"],
  // fonts: {
  //   families: [
  //     {
  //       name: "Inter",
  //       provider: "google",
  //       weights: [400, 500, 600, 700],
  //     },
  //   ],
  // },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
