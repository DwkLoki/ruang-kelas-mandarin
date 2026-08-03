<script setup lang="ts">
import { GraduationCap, BookOpen, UserRoundCog } from "lucide-vue-next";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced and qualified teaching team",
    description:
      "Our teaching team consists of instructors who are qualified, experienced and well trained in teaching Mandarin.",
  },
  {
    icon: BookOpen,
    title: "Interactive and Effective Learning Methods",
    description:
      "Our courses offer an interactive and proven learning method to accelerate your understanding and mastery of Mandarin.",
  },
  {
    icon: UserRoundCog,
    title: "Flexible Curriculum",
    description:
      "We provide a curriculum tailored to each student's learning needs, from beginner to advanced.",
  },
];

const heading = {
  before: "We are",

  highlight: "the right choice",

  after: "to meet your needs.",
};
</script>

<template>
  <section class="section-spacing">
    <div class="container-custom">
      <div class="text-center">
        <BaseSectionHeading align="center" label="Why Choose Us">
          {{ heading.before }}

          <span class="text-brand">
            {{ heading.highlight }}
          </span>

          {{ heading.after }}
        </BaseSectionHeading>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-3">
        <WhyChooseCard
          v-for="feature in features"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </div>
  </section>
</template>
