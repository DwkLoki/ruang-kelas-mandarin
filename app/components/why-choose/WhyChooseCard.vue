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
    class="h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
  >
    <div class="flex items-start gap-4 sm:gap-5">
      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand lg:h-14 lg:w-14"
      >
        <component :is="icon" class="size-6 lg:size-7" />
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
