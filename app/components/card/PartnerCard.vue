<script setup lang="ts">
import { GraduationCap, Building2, ArrowUpRight } from "lucide-vue-next";

interface PartnerCardProps {
  name: string;
  description: string;
  logo: string;
  website: string;
  type: "university" | "company";
}

const props = defineProps<PartnerCardProps>();

const icon = computed(() =>
  props.type === "university" ? GraduationCap : Building2,
);
</script>

<template>
  <a
    :href="website"
    target="_blank"
    rel="noopener noreferrer"
    class="group block rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <NuxtImg
      :src="logo"
      :alt="name"
      width="90"
      height="90"
      class="mx-auto h-20 w-20 object-contain"
    />

    <div class="mt-6 flex justify-center">
      <component :is="icon" class="text-brand" :size="24" />
    </div>

    <h3 class="mt-5 text-center text-xl font-semibold text-heading">
      {{ name }}
    </h3>

    <p class="mt-3 text-center leading-7 text-body">
      {{ description }}
    </p>

    <div
      class="mt-8 flex items-center justify-center gap-2 font-medium text-brand"
    >
      Visit Website

      <ArrowUpRight
        :size="18"
        class="transition group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </div>
  </a>
</template>
