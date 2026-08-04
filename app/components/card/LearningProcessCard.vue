<script setup lang="ts">
import type { Component } from "vue";

interface LearningProcessCardProps {
  icon: Component;
  title: string;
  description: string;
  step: number;
}

const props = defineProps<LearningProcessCardProps>();
</script>

<template>
  <article>
    <div
      class="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20 sm:h-16 sm:w-16"
    >
      <component :is="props.icon" class="h-7 w-7 sm:h-8 sm:w-8" />
    </div>

    <h3 class="mt-6 text-xl font-semibold leading-snug text-heading sm:mt-8">
      {{ props.step }}.
      {{ props.title }}
    </h3>

    <p class="mt-4 leading-7 text-body">
      {{ props.description }}
    </p>
  </article>
</template>
