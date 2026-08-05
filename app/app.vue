<script setup lang="ts">
// const head = useLocaleHead({
//   dir: true,
//   lang: true,
//   // With strategy "no_prefix" the URL stays identical across locales,
//   // so SEO alternates (hreflang/canonical) are intentionally disabled.
//   seo: false,
// });

// Sync <html lang> & dir with the active locale.
// useHead(() => ({
//   htmlAttrs: {
//     lang: head.value.htmlAttrs.lang,
//     dir: head.value.htmlAttrs.dir,
//   },
// }));
const siteUrl = "https://ruangkelasmandarin.com/";
const siteName = "Ruang Kelas Mandarin";
const siteTitle =
  "Ruang Kelas Mandarin - Belajar Bahasa Mandarin dengan Mudah dan Menyenangkan";
const siteDescription =
  "Ruang Kelas Mandarin adalah tempat untuk belajar bahasa Mandarin dengan mudah dan menyenangkan.";

useHead({
  htmlAttrs: {
    lang: "id",
  },
  link: [
    {
      rel: "canonical",
      href: siteUrl,
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon/favicon.ico",
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: "/favicon/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest",
    },
  ],
  meta: [
    {
      name: "image",
      content: `${siteUrl}og-image.png`,
    },
    {
      property: "og:locale",
      content: "id_ID",
    },
    {
      name: "theme-color",
      content: "#c43831",
    },
    {
      name: "msapplication-TileColor",
      content: "#c43831",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            name: siteName,
            alternateName: "Ruang Kelas Mandarin",
            url: siteUrl,
          },
        ],
      }),
    },
  ],
});

useSeoMeta({
  title: siteTitle,
  description: siteDescription,

  ogType: "website",
  ogSiteName: siteName,
  ogUrl: siteUrl,
  ogTitle: siteTitle,
  ogDescription: siteDescription,
  ogImage: `${siteUrl}og-image.png`,

  twitterCard: "summary_large_image",
  twitterTitle: siteTitle,
  twitterDescription: siteDescription,
  twitterImage: `${siteUrl}og-image.png`,

  robots: "index, follow",
});
</script>

<template>
  <NuxtPage />
</template>
