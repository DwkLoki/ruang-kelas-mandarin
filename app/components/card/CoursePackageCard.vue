<script setup lang="ts">
import { Check, Star, CheckCircle2 } from "lucide-vue-next";

interface CoursePackageProps {
  title: string;
  subtitle: string;
  availability?: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

const props = withDefaults(defineProps<CoursePackageProps>(), {
  featured: false,
});
</script>

<template>
  <article
    :class="[
      'relative flex h-full flex-col rounded-3xl border bg-white p-6 transition-all duration-300 sm:p-8',
      props.featured
        ? 'border-brand border-2 shadow-2xl lg:-translate-y-4 lg:scale-105'
        : 'border-border shadow-sm hover:-translate-y-2 hover:shadow-xl',
    ]"
  >
    <!-- Badge -->
    <div
      v-if="props.badge"
      class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
    >
      <span
        class="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-lg"
      >
        <Star class="h-4 w-4 fill-current" />

        {{ props.badge }}
      </span>
    </div>

    <!-- Title -->
    <h3 class="mt-3 text-2xl font-bold text-heading sm:text-3xl">
      {{ props.title }}
    </h3>

    <p class="mt-2 text-body">
      {{ props.subtitle }}
    </p>

    <div
      v-if="availability"
      class="mt-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700"
    >
      <CheckCircle2 :size="16" />

      {{ availability }}
    </div>

    <!-- Price -->
    <div class="mt-8 flex items-end gap-2">
      <span
        :class="[
          'font-bold text-brand',
          props.featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl',
        ]"
      >
        {{ props.price }}
      </span>

      <span class="pb-1 text-body">
        {{ props.duration }}
      </span>
    </div>

    <!-- Button -->
    <div class="mt-8">
      <BaseButton class="w-full">
        <WaIcon class="h-6 w-6 text-white" />
        Book Now
      </BaseButton>
    </div>

    <!-- Divider -->
    <div class="my-8 h-px bg-border"></div>

    <!-- Feature List -->
    <ul class="flex-1 space-y-5">
      <li
        v-for="feature in props.features"
        :key="feature"
        class="flex items-start gap-4"
      >
        <div
          class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand"
        >
          <Check class="h-4 w-4" />
        </div>

        <span class="leading-7 text-body">
          {{ feature }}
        </span>
      </li>
    </ul>
  </article>
</template>
