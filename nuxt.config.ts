// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxt/image"],
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
