<script setup lang="ts">
const { t } = useI18n();
import { BookOpen } from "lucide-vue-next";

const promotion = {
  targetDate: "2026-12-31T23:59:59",
};
</script>

<template>
  <section id="promotion" class="section-spacing">
    <div class="container-custom">
      <div
        class="grid items-center gap-8 rounded-[2rem] bg-brand/5 p-0 lg:grid-cols-2 lg:gap-10 lg:p-12"
      >
        <!-- Image -->
        <div class="hidden lg:block overflow-hidden rounded-3xl">
          <NuxtImg
            src="/images/hero/promotion.png"
            :alt="t('promotion.imageAlt')"
            class="h-64 w-full object-cover object-left sm:h-80 lg:h-[520px]"
          />
        </div>

        <!-- Content -->
        <div>
          <BaseSectionHeading align="left" :label="t('promotion.label')">
            {{ t("promotion.before") }}

            <span class="text-brand">
              {{ t("promotion.highlight") }}
            </span>

            {{ t("promotion.after") }}
          </BaseSectionHeading>

          <p class="mt-6 leading-8 text-body">
            {{ t("promotion.description") }}
          </p>

          <div class="mt-8">
            <PromotionCountdown :target-date="promotion.targetDate" />
          </div>

          <div class="mt-8">
            <BaseButton class="w-full sm:w-auto">
              <BookOpen class="size-4" />
              {{ t("promotion.cta") }}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
