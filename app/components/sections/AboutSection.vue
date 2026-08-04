<script setup lang="ts">
const about = {
  label: "About Us",
  title: "Start a new adventure in learning",
  highlight: "Mandarin!",
  subtitle: "join our course services.",
  description:
    "Structured Curriculum: Our curriculum is systematically designed to ensure you gain a deep understanding of Chinese grammar, vocabulary, reading, writing and speaking.",
  cta: "Book Now",
};
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
          alt="Student learning Mandarin online"
          width="720"
          height="520"
          class="w-full rounded-3xl object-cover"
        />
      </div>

      <!-- Content -->

      <div>
        <BaseSectionHeading align="left" :label="about.label">
          {{ about.title }}

          <span class="text-brand">
            {{ about.highlight }}
          </span>

          {{ about.subtitle }}
        </BaseSectionHeading>

        <p class="mt-6 max-w-lg leading-8 text-body">
          {{ about.description }}
        </p>

        <div class="mt-6 lg:mt-8">
          <BaseButton>
            <WaIcon class="h-6 w-6 text-white" />
            {{ about.cta }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
