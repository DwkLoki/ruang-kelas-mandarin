<script setup lang="ts">
const { t } = useI18n();
import { BookOpen } from "lucide-vue-next";
</script>

<template>
  <section id="about" class="section-spacing overflow-hidden">
    <div
      class="container-custom grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
    >
      <!-- Image -->

      <div>
        <NuxtImg
          src="/images/hero/student-learning-mandarin.png"
          :alt="t('about.imageAlt')"
          width="720"
          height="520"
          class="w-full rounded-3xl object-cover"
        />
      </div>

      <!-- Content -->

      <div>
        <BaseSectionHeading align="left" :label="t('about.label')">
          {{ t("about.title") }}

          <span class="text-brand">
            {{ t("about.highlight") }}
          </span>

          {{ t("about.subtitle") }}
        </BaseSectionHeading>

        <p class="mt-6 max-w-lg leading-8 text-body">
          {{ t("about.description") }}
        </p>

        <div class="mt-6 lg:mt-8">
          <BaseButton
            href="https://s.id/PendaftaranBimbelRKM2025"
            target="_blank"
          >
            <BookOpen class="size-4" />
            {{ t("about.cta") }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
