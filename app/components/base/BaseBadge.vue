<script setup lang="ts">
interface BadgeProps {
  color?: "brand" | "accent";
}

withDefaults(defineProps<BadgeProps>(), {
  color: "brand",
});

const colorClasses = {
  brand: "bg-brand",
  accent: "bg-accent",
};
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <span :class="['h-2 w-2 rounded-full', colorClasses[color]]" />

    <span class="text-xs font-semibold uppercase tracking-widest text-brand">
      <slot />
    </span>
  </div>
</template>
