<script setup lang="ts">
interface ButtonProps {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  href?: string;
  target?: "_self" | "_blank";
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
  <component
    :is="props.href ? 'a' : 'button'"
    :href="props.href"
    :target="props.target"
    :rel="props.target === '_blank' ? 'noopener noreferrer' : undefined"
    :disabled="!props.href ? props.disabled : undefined"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-200 ease-in-out',
      variantClasses[props.variant],
      sizeClasses[props.size],
      props.disabled && 'cursor-not-allowed opacity-50',
    ]"
  >
    <slot />
  </component>
</template>
