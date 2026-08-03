<script setup lang="ts">
import { Star } from "lucide-vue-next";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  review: string;
}

defineProps<TestimonialCardProps>();
</script>

<template>
  <article
    class="flex h-full flex-col justify-between rounded-3xl border border-border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div>
      <!-- Rating -->
      <div class="mb-6 flex gap-1">
        <Star
          v-for="n in 5"
          :key="n"
          :size="18"
          class="fill-yellow-400 text-yellow-400"
        />
      </div>

      <!-- Review -->
      <p class="leading-8 text-body">"{{ review }}"</p>
    </div>

    <!-- Student -->
    <div class="mt-auto flex items-center gap-4 pt-8">
      <div class="h-14 w-14 rounded-full overflow-hidden shrink-0 bg-red-400">
        <NuxtImg
          :src="image"
          :alt="name"
          width="60"
          height="60"
          class="h-full w-full object-cover"
        />
      </div>

      <div>
        <h3 class="font-semibold text-heading">
          {{ name }}
        </h3>

        <p class="text-sm text-body">
          {{ role }}
        </p>
      </div>
    </div>
  </article>
</template>
