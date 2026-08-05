<script setup lang="ts">
import { GraduationCap, BookOpen, UserRoundCog } from "lucide-vue-next";

const { t } = useI18n();

const features = [
  { icon: GraduationCap, key: "whyChoose.features.0" },
  { icon: BookOpen, key: "whyChoose.features.1" },
  { icon: UserRoundCog, key: "whyChoose.features.2" },
];
</script>

<template>
  <section class="section-spacing">
    <div class="container-custom">
      <div class="text-center">
        <BaseSectionHeading align="center" :label="t('whyChoose.label')">
          {{ t("whyChoose.before") }}

          <span class="text-brand">
            {{ t("whyChoose.highlight") }}
          </span>

          {{ t("whyChoose.after") }}
        </BaseSectionHeading>
      </div>

      <div class="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <WhyChooseCard
          v-for="feature in features"
          :key="feature.key"
          :icon="feature.icon"
          :title="t(`${feature.key}.title`)"
          :description="t(`${feature.key}.description`)"
        />
      </div>
    </div>
  </section>
</template>
