<script setup lang="ts">
const testimonials = [
  {
    name: "Sarah Tan",
    role: "Beginner Student",
    image: "/images/first-leader.png",
    review:
      "Learning Mandarin here has been an amazing experience. The teachers are patient, supportive, and every lesson is easy to understand.",
  },
  {
    name: "Kevin Lim",
    role: "Business Professional",
    image: "/images/first-leader.png",
    review:
      "The flexible schedule allows me to study after work. My confidence in speaking Mandarin has improved significantly.",
  },
  {
    name: "Michelle Wong",
    role: "HSK Preparation Student",
    image: "/images/first-leader.png",
    review:
      "The curriculum is structured and practical. I passed my HSK exam much faster than I expected.",
  },
];
</script>

<template>
  <section
    id="testimonials"
    class="section-spacing bg-gradient-to-b from-white to-brand/5"
  >
    <div class="container-custom">
      <BaseSectionHeading
        align="center"
        label="Testimonials"
        description="See how our students have grown in confidence and achieved their Mandarin learning goals."
      >
        Hear from our

        <span class="text-brand"> Happy Students </span>
      </BaseSectionHeading>

      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        <TestimonialCard
          v-for="item in testimonials"
          :key="item.name"
          v-bind="item"
        />
      </div>
    </div>
  </section>
</template>
