<script setup lang="ts">
const promotion = {
  label: "Limited Time Offer",
  titleBefore: "Want to master",
  highlight: "Mandarin",
  titleAfter: "quickly and easily?",
  description:
    "Join our Mandarin program today and enjoy exclusive discounts before the promotion ends. Don't miss this opportunity to learn with experienced teachers.",
  targetDate: "2026-12-31T23:59:59",
  cta: "Book Now",
};
</script>

<template>
  <section id="promotion" class="section-spacing">
    <div class="container-custom">
      <div
        class="grid items-center gap-8 rounded-[2rem] bg-brand/5 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-12"
      >
        <!-- Image -->
        <div class="overflow-hidden rounded-3xl">
          <NuxtImg
            src="/images/hero/promotion.png"
            alt="Promotion"
            class="h-64 w-full object-cover object-left sm:h-80 lg:h-[520px]"
          />
        </div>

        <!-- Content -->
        <div>
          <BaseSectionHeading align="left" :label="promotion.label">
            {{ promotion.titleBefore }}

            <span class="text-brand">
              {{ promotion.highlight }}
            </span>

            {{ promotion.titleAfter }}
          </BaseSectionHeading>

          <p class="mt-6 leading-8 text-body">
            {{ promotion.description }}
          </p>

          <div class="mt-8">
            <PromotionCountdown :target-date="promotion.targetDate" />
          </div>

          <div class="mt-8">
            <BaseButton>
              <WaIcon class="h-6 w-6 text-white" />
              {{ promotion.cta }}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
