<script setup lang="ts">
const { t, tm, rt } = useI18n();

interface ApproachItem {
  title: string;
  description: string;
}

const approachItems = computed(
  () => tm("aboutPage.approach.items") as ApproachItem[],
);
</script>

<template>
  <section class="section-spacing">
    <div class="container-custom">
      <!-- Heading -->
      <BaseSectionHeading align="center" :label="t('aboutPage.approach.label')">
        {{ t("aboutPage.approach.before") }}

        <span class="text-brand">
          {{ t("aboutPage.approach.highlight") }}
        </span>

        {{ t("aboutPage.approach.after") }}
      </BaseSectionHeading>

      <!-- Intro -->
      <div class="mx-auto mt-8 max-w-3xl text-center">
        <p class="leading-8 text-body">
          {{ t("aboutPage.approach.description") }}
        </p>
      </div>

      <!-- Approach Items -->
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(item, index) in approachItems"
          :key="index"
          class="rounded-3xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
        >
          <!-- Number -->
          <div
            class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-lg font-bold text-brand"
          >
            {{ String(index + 1).padStart(2, "0") }}
          </div>

          <!-- Content -->
          <h3 class="mt-6 text-xl font-bold text-heading">
            {{ rt(item.title) }}
          </h3>

          <p class="mt-3 leading-7 text-body">
            {{ rt(item.description) }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
