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
</script>

<template>
  <NuxtPage />
</template>
