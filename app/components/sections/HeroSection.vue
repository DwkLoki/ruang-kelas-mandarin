<script setup lang="ts">
const hero = {
  badge: "Learn Mandarin Anytime and Anywhere",
  title: "Start a new adventure in learning",
  highlight: "Mandarin!",
  subtitle: "Join our course services.",
  description:
    "Structured Curriculum: Our curriculum is systematically designed to ensure you gain a deep understanding of Chinese grammar, vocabulary, reading, writing and speaking.",
  cta: "Book Now",
};
</script>
<template>
  <section id="home" class="overflow-hidden py-20">
    <div
      class="container-custom grid items-center gap-16 lg:grid-cols-[45%_55%]"
    >
      <div class="max-w-xl">
        <BaseBadge>
          {{ hero.badge }}
        </BaseBadge>

        <h1 class="mt-6 text-5xl font-bold leading-tight text-heading">
          {{ hero.title }}

          <span class="text-brand">
            {{ hero.highlight }}
          </span>

          {{ hero.subtitle }}
        </h1>

        <p class="mt-6 text-body leading-8">
          {{ hero.description }}
        </p>

        <div class="mt-8">
          <BaseButton>
            <WaIcon class="h-6 w-6 text-white" />
            {{ hero.cta }}
          </BaseButton>
        </div>
      </div>

      <div class="flex justify-center lg:justify-end">
        <NuxtImg
          src="/images/hero/hero-image.png"
          alt="Mandarin course hero image"
          width="620"
          height="500"
          class="w-full max-w-[620px]"
        />
      </div>
    </div>
  </section>
</template>
