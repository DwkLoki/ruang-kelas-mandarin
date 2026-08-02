<script setup lang="ts">
interface ButtonProps {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "md",
  disabled: false,
});

const variantClasses = {
  primary:
    "bg-brand text-white border border-transparent hover:bg-brand-orange",
  outline:
    "bg-transparent text-brand border border-brand hover:bg-brand hover:text-white",
} as const;

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;
</script>

<template>
  <button
    type="button"
    :disabled="props.disabled"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-200 ease-in-out',
      variantClasses[props.variant],
      sizeClasses[props.size],
      props.disabled && 'cursor-not-allowed opacity-50',
    ]"
  >
    <slot />
  </button>
</template>
