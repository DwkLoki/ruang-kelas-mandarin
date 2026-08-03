<script setup lang="ts">
interface SectionHeadingProps {
  label?: string;
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
      v-if="label"
      class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand"
    >
      {{ label }}
    </span>

    <h2 class="text-3xl font-bold leading-tight text-heading lg:text-4xl">
      <slot />
    </h2>

    <p v-if="description" class="mt-4 max-w-2xl text-body">
      {{ description }}
    </p>
  </div>
</template>
