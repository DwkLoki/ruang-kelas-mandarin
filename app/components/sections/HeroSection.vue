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
  <section id="home" class="overflow-hidden py-14 sm:py-16 lg:py-20">
    <div
      class="container-custom grid items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-16"
    >
      <div class="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
        <div class="hidden md:block">
          <BaseBadge>
            {{ hero.badge }}
          </BaseBadge>
        </div>

        <h1
          class="mt-0 md:mt-6 text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl"
        >
          {{ hero.title }}

          <span class="text-brand">
            {{ hero.highlight }}
          </span>

          {{ hero.subtitle }}
        </h1>

        <p class="mt-6 text-base leading-8 text-body sm:text-lg">
          {{ hero.description }}
        </p>

        <div class="mt-8 flex justify-center lg:justify-start">
          <BaseButton>
            <WaIcon class="h-6 w-6 text-white" />
            {{ hero.cta }}
          </BaseButton>
        </div>
      </div>

      <div class="hidden lg:flex justify-center lg:justify-end">
        <NuxtImg
          src="/images/hero/hero-image.png"
          alt="Mandarin course hero image"
          width="620"
          height="500"
          class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[620px]"
        />
      </div>
    </div>
  </section>
</template>
