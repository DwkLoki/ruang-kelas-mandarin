<script setup lang="ts">
const { t } = useI18n();
import { BookOpen } from "lucide-vue-next";
</script>
<template>
  <section id="home" class="overflow-hidden py-14 sm:py-16 lg:py-20">
    <div
      class="container-custom grid items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-16"
    >
      <div class="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
        <div class="hidden md:block">
          <BaseBadge>
            {{ t("hero.badge") }}
          </BaseBadge>
        </div>

        <h1
          class="mt-0 md:mt-6 text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl"
        >
          {{ t("hero.title") }}

          <span class="text-brand">
            {{ t("hero.highlight") }}
          </span>

          {{ t("hero.subtitle") }}
        </h1>

        <p class="mt-6 text-base leading-8 text-body sm:text-lg">
          {{ t("hero.description") }}
        </p>

        <div class="mt-8 flex justify-center lg:justify-start">
          <!-- <BaseButton>
            <WaIcon class="h-6 w-6 text-white" />
            {{ t("hero.cta") }}
          </BaseButton> -->
          <BaseButton>
            <BookOpen class="size-4" />
            {{ t("hero.cta") }}
          </BaseButton>
        </div>
      </div>

      <div class="hidden lg:flex justify-center lg:justify-end">
        <NuxtImg
          src="/images/hero/hero-image.png"
          :alt="t('hero.imageAlt')"
          width="620"
          height="500"
          class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[620px]"
        />
      </div>
    </div>
  </section>
</template>
