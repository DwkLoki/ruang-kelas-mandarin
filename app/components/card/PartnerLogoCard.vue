<script setup lang="ts">
interface PartnerLogoCardProps {
  name: string;
  logo: string;
}

defineProps<PartnerLogoCardProps>();
</script>

<template>
  <div
    class="rounded-3xl border border-border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
  >
    <div class="flex h-28 items-center justify-center">
      <NuxtImg
        :src="logo"
        :alt="name"
        class="max-h-full max-w-full object-contain"
      />
    </div>

    <h3 class="mt-6 text-center font-semibold text-heading">
      {{ name }}
    </h3>
  </div>
</template>
