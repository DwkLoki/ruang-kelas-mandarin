<script setup lang="ts">
import { ClipboardCheck, Wallet, Link2, BadgeCheck } from "lucide-vue-next";

const processes = [
  {
    icon: ClipboardCheck,
    title: "Fast and Easy Registration",
    description:
      "Register yourself by filling out our simple registration form with your personal information.",
  },
  {
    icon: Wallet,
    title: "Flexible Payment",
    description:
      "Choose your preferred payment method including bank transfer, QRIS or other supported options.",
  },
  {
    icon: Link2,
    title: "Access Learning Materials",
    description:
      "Receive your class invitation and access all learning materials through our online platform.",
  },
  {
    icon: BadgeCheck,
    title: "Certificate of Completion",
    description:
      "Successfully complete your course and receive your certificate as proof of achievement.",
  },
];
</script>

<template>
  <section id="process" class="section-spacing">
    <div class="container-custom">
      <BaseSectionHeading>
        Start your
        <span class="text-brand">Mandarin learning journey</span>
        with four simple steps.
      </BaseSectionHeading>

      <div class="mt-10 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-10 xl:grid-cols-4">
        <LearningProcessCard
          v-for="(process, index) in processes"
          :key="process.title"
          :icon="process.icon"
          :title="process.title"
          :description="process.description"
          :step="index + 1"
        />
      </div>
    </div>
  </section>
</template>
