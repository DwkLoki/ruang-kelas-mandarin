<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="relative overflow-hidden bg-brand py-20 sm:py-24 lg:py-28">
    <!-- Decorative shapes -->
    <div
      class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-orange/30 blur-3xl"
    />

    <div
      class="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl"
    />

    <div class="container-custom relative">
      <div class="mx-auto max-w-3xl text-center text-white">
        <p class="text-sm font-semibold uppercase tracking-wider text-white/80">
          {{ t("contactPage.hero.label") }}
        </p>

        <h1
          class="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
        >
          {{ t("contactPage.hero.title") }}
        </h1>

        <p
          class="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg"
        >
          {{ t("contactPage.hero.description") }}
        </p>
      </div>
    </div>
  </section>
</template>
