<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="section-spacing">
    <div
      class="container-custom grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20"
    >
      <!-- Image -->
      <div class="order-2 lg:order-1">
        <div class="overflow-hidden rounded-3xl">
          <NuxtImg
            src="/images/about/our-story.webp"
            :alt="t('aboutPage.story.imageAlt')"
            width="700"
            height="520"
            class="h-auto w-full object-cover"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="order-1 lg:order-2">
        <BaseSectionHeading :label="t('aboutPage.story.label')">
          {{ t("aboutPage.story.before") }}

          <span class="text-brand">
            {{ t("aboutPage.story.highlight") }}
          </span>

          {{ t("aboutPage.story.after") }}
        </BaseSectionHeading>

        <div class="mt-6 space-y-5 text-body">
          <p class="leading-8">
            {{ t("aboutPage.story.paragraph1") }}
          </p>

          <p class="leading-8">
            {{ t("aboutPage.story.paragraph2") }}
          </p>

          <p class="leading-8">
            {{ t("aboutPage.story.paragraph3") }}
          </p>
        </div>

        <!-- Highlights -->
        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl border border-border bg-white p-5 shadow-sm">
            <p class="text-2xl font-bold text-brand">
              {{ t("aboutPage.story.highlightOne.value") }}
            </p>

            <p class="mt-1 text-sm leading-6 text-body">
              {{ t("aboutPage.story.highlightOne.label") }}
            </p>
          </div>

          <div class="rounded-2xl border border-border bg-white p-5 shadow-sm">
            <p class="text-2xl font-bold text-brand">
              {{ t("aboutPage.story.highlightTwo.value") }}
            </p>

            <p class="mt-1 text-sm leading-6 text-body">
              {{ t("aboutPage.story.highlightTwo.label") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
