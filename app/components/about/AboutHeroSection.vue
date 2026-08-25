<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="overflow-hidden py-16 sm:py-20 lg:py-24">
    <div
      class="container-custom grid items-center gap-10 md:gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16"
    >
      <!-- Content -->
      <div class="max-w-2xl">
        <BaseBadge>
          {{ t("aboutPage.hero.label") }}
        </BaseBadge>

        <h1
          class="mt-5 text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl"
        >
          {{ t("aboutPage.hero.before") }}

          <span class="text-brand">
            {{ t("aboutPage.hero.highlight") }}
          </span>
        </h1>

        <p
          class="mt-6 max-w-xl text-base leading-7 text-body sm:text-lg sm:leading-8"
        >
          {{ t("aboutPage.hero.description") }}
        </p>
      </div>

      <!-- Image -->
      <div class="flex justify-center lg:justify-end">
        <NuxtImg
          src="/images/hero/about-hero.webp"
          :alt="t('aboutPage.hero.imageAlt')"
          width="600"
          height="450"
          class="w-full max-w-[600px] object-contain"
        />
      </div>
    </div>
  </section>
</template>
