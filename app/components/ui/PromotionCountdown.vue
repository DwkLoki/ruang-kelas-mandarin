<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

interface CountdownProps {
  targetDate: string;
}

const props = defineProps<CountdownProps>();

const remainingTime = ref(0);

let timer: ReturnType<typeof setInterval>;

const updateCountdown = () => {
  const now = Date.now();
  const target = new Date(props.targetDate).getTime();

  remainingTime.value = Math.max(target - now, 0);
};

onMounted(() => {
  updateCountdown();

  timer = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});

const days = computed(() =>
  Math.floor(remainingTime.value / (1000 * 60 * 60 * 24)),
);

const hours = computed(() =>
  Math.floor((remainingTime.value / (1000 * 60 * 60)) % 24),
);

const minutes = computed(() =>
  Math.floor((remainingTime.value / (1000 * 60)) % 60),
);

const seconds = computed(() => Math.floor((remainingTime.value / 1000) % 60));

const countdownItems = computed(() => [
  {
    label: "Days",
    value: String(days.value).padStart(2, "0"),
  },
  {
    label: "Hours",
    value: String(hours.value).padStart(2, "0"),
  },
  {
    label: "Minutes",
    value: String(minutes.value).padStart(2, "0"),
  },
  {
    label: "Seconds",
    value: String(seconds.value).padStart(2, "0"),
  },
]);
</script>

<template>
  <div class="grid grid-cols-4 gap-2 sm:gap-4">
    <div
      v-for="item in countdownItems"
      :key="item.label"
      class="rounded-2xl border border-border bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5"
    >
      <p class="text-2xl font-bold text-brand sm:text-3xl">
        {{ item.value }}
      </p>

      <p class="mt-2 text-sm text-body">
        {{ item.label }}
      </p>
    </div>
  </div>
</template>
