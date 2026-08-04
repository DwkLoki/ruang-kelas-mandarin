<script setup lang="ts">
import { GraduationCap } from "lucide-vue-next";

interface TeacherCardProps {
  name: string;
  role: string;
  image: string;
}

defineProps<TeacherCardProps>();
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <!-- Image -->
    <NuxtImg
      :src="image"
      :alt="name"
      width="500"
      height="620"
      class="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[480px] lg:h-[520px]"
    />

    <!-- Floating Card -->
    <div
      class="absolute bottom-4 left-4 right-4 rounded-2xl bg-white p-5 shadow-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-6"
    >
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-xl font-semibold text-heading">
            {{ name }}
          </h3>

          <p class="mt-1 text-body">
            {{ role }}
          </p>
        </div>

        <div
          class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white"
        >
          <GraduationCap :size="22" />
        </div>
      </div>
    </div>
  </article>
</template>
