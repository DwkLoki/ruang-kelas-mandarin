<script setup lang="ts">
interface CoursePackage {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  availability?: string;
}

const packages: CoursePackage[] = [
  {
    title: "Basic Class",
    subtitle: "Mandarin Level 1–3",
    availability: "Available Online & Offline",
    price: "Rp. 5,000,000",
    duration: "/month",
    featured: false,
    features: [
      "Pinyin & Pronunciation",
      "Reading Chinese Characters",
      "Basic Grammar",
      "Daily Vocabulary",
      "Simple Conversation",
      "Learning Materials",
    ],
  },

  {
    title: "Scholarship Preparation",
    subtitle: "Mandarin Level 1–6",
    availability: "Available Online & Offline",
    price: "Rp. 5,000,000",
    duration: "/month",
    featured: true,
    badge: "Most Popular",
    features: [
      "Complete Level 1–6 Curriculum",
      "Reading & Writing",
      "Listening & Speaking",
      "HSK Preparation",
      "Scholarship Interview Practice",
      "Native Teacher Discussion",
      "Learning Materials",
    ],
  },

  {
    title: "Conversation Class",
    subtitle: "Practical Speaking",
    availability: "Available Online & Offline",
    price: "Rp. 5,000,000",
    duration: "/month",
    featured: false,
    features: [
      "Daily Conversation",
      "Pronunciation Correction",
      "Speaking Confidence",
      "Native Conversation Practice",
      "Chinese Culture & Expressions",
      "Flexible Learning Schedule",
    ],
  },
];
</script>

<template>
  <section id="packages" class="section-spacing">
    <div class="container-custom">
      <BaseSectionHeading align="center" label="Course Packages">
        Explore our

        <span class="text-brand"> Mandarin Programs </span>

        for every learner
      </BaseSectionHeading>

      <div
        class="mt-20 grid gap-8 lg:grid-cols-[1fr_1.08fr_1fr] lg:items-center"
      >
        <CoursePackageCard
          v-for="item in packages"
          :key="item.title"
          v-bind="item"
        />
      </div>
    </div>
  </section>
</template>
