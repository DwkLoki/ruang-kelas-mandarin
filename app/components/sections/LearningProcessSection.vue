<script setup lang="ts">
import {
  ClipboardCheck,
  Wallet,
  Link2,
  BadgeCheck,
  BriefcaseBusiness,
} from "lucide-vue-next";

const { t } = useI18n();

const processes = [
  { icon: ClipboardCheck, key: "process.steps.0" },
  { icon: Wallet, key: "process.steps.1" },
  { icon: Link2, key: "process.steps.2" },
  { icon: BadgeCheck, key: "process.steps.3" },
  { icon: BriefcaseBusiness, key: "process.steps.4" },
];
</script>

<template>
  <section id="process" class="section-spacing">
    <div class="container-custom">
      <BaseSectionHeading>
        {{ t("process.before") }}
        <span class="text-brand">{{ t("process.highlight") }}</span>
        {{ t("process.after") }}
      </BaseSectionHeading>

      <div
        class="mt-10 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-10 xl:grid-cols-3"
      >
        <LearningProcessCard
          v-for="(process, index) in processes"
          :key="process.key"
          :icon="process.icon"
          :title="t(`${process.key}.title`)"
          :description="t(`${process.key}.description`)"
          :step="index + 1"
        />
      </div>
    </div>
  </section>
</template>
