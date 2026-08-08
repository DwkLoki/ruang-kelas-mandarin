<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

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

const isExpanded = ref(false);
const isOverflowing = ref(false);

const descriptionRef = ref<HTMLElement | null>(null);

const checkOverflow = async () => {
  await nextTick();

  const element = descriptionRef.value;

  if (!element) return;

  isOverflowing.value = element.scrollHeight > element.clientHeight;
};

const toggleDescription = async () => {
  isExpanded.value = !isExpanded.value;

  await nextTick();
};

onMounted(() => {
  checkOverflow();

  window.addEventListener("resize", checkOverflow);
});

watch(
  () => props.description,
  () => {
    isExpanded.value = false;
    checkOverflow();
  },
);

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkOverflow);
});
</script>

<template>
  <article
    class="relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8 lg:p-10"
  >
    <div
      :class="[
        'grid items-start gap-8 lg:gap-10',
        props.imagePosition === 'right'
          ? 'lg:grid-cols-[1fr_280px]'
          : 'lg:grid-cols-[280px_1fr]',
      ]"
    >
      <!-- IMAGE -->
      <div
        :class="[
          'flex justify-center',
          props.imagePosition === 'left'
            ? 'lg:justify-start lg:order-1'
            : 'lg:justify-end lg:order-2',
        ]"
      >
        <NuxtImg
          :src="props.image"
          :alt="props.name"
          width="280"
          height="360"
          class="h-72 w-56 rounded-[2rem] object-cover sm:h-[320px] sm:w-[240px]"
        />
      </div>

      <!-- CONTENT -->
      <div
        :class="[props.imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1']"
      >
        <p class="text-lg text-heading">
          {{ props.role }}
        </p>

        <h3 class="mt-4 text-xl font-bold text-brand md:text-3xl lg:text-4xl">
          {{ props.name }}
        </h3>

        <div class="mt-8">
          <p
            ref="descriptionRef"
            :class="[
              'whitespace-pre-line leading-6 text-body transition-[max-height] duration-300',
              !isExpanded && 'max-h-36 overflow-hidden',
            ]"
          >
            {{ props.description }}
          </p>

          <button
            v-if="isOverflowing"
            type="button"
            class="mt-3 font-semibold text-brand transition-colors hover:text-brand-orange"
            @click="toggleDescription"
          >
            {{ isExpanded ? "See Less" : "See More" }}
          </button>
        </div>
      </div>
    </div>
  </article>
</template>
