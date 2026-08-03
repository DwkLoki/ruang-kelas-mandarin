<script setup lang="ts">
interface GalleryCardProps {
  image: string;
  alt: string;
  large?: boolean;
}

defineProps<GalleryCardProps>();
</script>

<template>
  <div
    class="group overflow-hidden rounded-3xl"
    :class="large ? 'h-[320px] lg:h-[380px]' : 'h-[240px] lg:h-[280px]'"
  >
    <NuxtImg
      :src="image"
      :alt="alt"
      width="900"
      height="700"
      class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>
</template>
