<script setup lang="ts">
import { Eye, Target } from "lucide-vue-next";

const { t } = useI18n();
</script>

<template>
  <section class="section-spacing">
    <div class="container-custom">
      <BaseSectionHeading
        align="center"
        :label="t('aboutPage.visionMission.label')"
      >
        {{ t("aboutPage.visionMission.before") }}

        <span class="text-brand">
          {{ t("aboutPage.visionMission.highlight") }}
        </span>
      </BaseSectionHeading>

      <div class="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
        <!-- Vision -->
        <article
          class="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8 lg:p-10"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand"
          >
            <Eye class="size-7" />
          </div>

          <h3 class="mt-6 text-2xl font-bold text-heading">
            {{ t("aboutPage.visionMission.vision.title") }}
          </h3>

          <p class="mt-4 leading-8 text-body">
            {{ t("aboutPage.visionMission.vision.description") }}
          </p>
        </article>

        <!-- Mission -->
        <article
          class="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8 lg:p-10"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange"
          >
            <Target class="size-7" />
          </div>

          <h3 class="mt-6 text-2xl font-bold text-heading">
            {{ t("aboutPage.visionMission.mission.title") }}
          </h3>

          <p class="mt-4 leading-8 text-body">
            {{ t("aboutPage.visionMission.mission.description") }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
