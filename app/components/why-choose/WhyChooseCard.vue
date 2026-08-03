<script setup lang="ts">
interface WhyChooseCardProps {
  icon: Component;
  title: string;
  description: string;
}

defineProps<WhyChooseCardProps>();
</script>

<template>
  <article
    class="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="flex items-start gap-4">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand"
      >
        <component :is="icon" class="size-6" />
      </div>

      <div>
        <h3 class="text-lg font-semibold text-heading">
          {{ title }}
        </h3>

        <p class="mt-2 text-sm leading-7 text-body">
          {{ description }}
        </p>
      </div>
    </div>
  </article>
</template>
