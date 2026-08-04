<script setup lang="ts">
interface LeaderProfileProps {
  role: string;
  name: string;
  description: string;
  image: string;
  imagePosition?: "left" | "right";
}

const props = withDefaults(defineProps<LeaderProfileProps>(), {
  imagePosition: "right",
});
</script>

<template>
  <article
    class="relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8 lg:p-10"
  >
    <div
      :class="[
        'grid items-center gap-8 lg:gap-10',
        props.imagePosition === 'right'
          ? 'lg:grid-cols-[1fr_280px]'
          : 'lg:grid-cols-[280px_1fr]',
      ]"
    >
      <!-- IMAGE LEFT -->
      <template v-if="props.imagePosition === 'left'">
        <div class="flex justify-center lg:justify-start">
          <NuxtImg
            :src="props.image"
            :alt="props.name"
            width="280"
            height="360"
            class="h-72 w-56 rounded-[2rem] object-cover sm:h-[320px] sm:w-[240px]"
          />
        </div>

        <div>
          <p class="text-lg text-heading">
            {{ props.role }}
          </p>

          <h3 class="mt-4 text-4xl font-bold text-brand">
            {{ props.name }}
          </h3>

          <p class="mt-8 whitespace-pre-line leading-8 text-body">
            {{ props.description }}
          </p>
        </div>
      </template>

      <!-- IMAGE RIGHT -->
      <template v-else>
        <div class="flex justify-center lg:justify-start lg:hidden">
          <NuxtImg
            :src="props.image"
            :alt="props.name"
            width="280"
            height="360"
            class="h-72 w-56 rounded-[2rem] object-cover sm:h-[320px] sm:w-[240px]"
          />
        </div>

        <div>
          <p class="text-lg text-heading">
            {{ props.role }}
          </p>

          <h3 class="mt-4 text-4xl font-bold text-brand">
            {{ props.name }}
          </h3>

          <p class="mt-8 whitespace-pre-line leading-8 text-body">
            {{ props.description }}
          </p>
        </div>

        <div class="hidden lg:flex justify-center lg:justify-end">
          <NuxtImg
            :src="props.image"
            :alt="props.name"
            width="280"
            height="360"
            class="h-72 w-56 rounded-[2rem] object-cover sm:h-[320px] sm:w-[240px]"
          />
        </div>
      </template>
    </div>
  </article>
</template>
