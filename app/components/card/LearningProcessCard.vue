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
      class="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20"
    >
      <component :is="props.icon" class="h-8 w-8" />
    </div>

    <h3 class="mt-8 text-xl font-semibold leading-snug text-heading">
      {{ props.step }}.
      {{ props.title }}
    </h3>

    <p class="mt-4 leading-7 text-body">
      {{ props.description }}
    </p>
  </article>
</template>
