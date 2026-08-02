<script setup lang="ts">
interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const props = withDefaults(defineProps<SectionHeadingProps>(), {
  align: "left",
});

const alignmentClasses = {
  left: "items-start text-left",
  center: "items-center text-center",
} as const;
</script>

<template>
  <div :class="['flex flex-col', alignmentClasses[props.align]]">
    <span
      v-if="props.label"
      class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand"
    >
      {{ props.label }}
    </span>

    <h2 class="text-heading text-3xl font-bold leading-tight lg:text-4xl">
      {{ props.title }}
    </h2>

    <p v-if="props.description" class="mt-4 max-w-2xl text-body">
      {{ props.description }}
    </p>
  </div>
</template>
