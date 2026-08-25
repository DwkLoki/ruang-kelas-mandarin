<script setup lang="ts">
import { MessageCircle } from "lucide-vue-next";

const { t } = useI18n();

const whatsappUrl = "https://wa.me/6281389012117";
</script>

<template>
  <section class="pb-20 sm:pb-24 lg:pb-28">
    <div class="container-custom">
      <div
        class="relative overflow-hidden rounded-3xl bg-brand px-6 py-12 text-center text-white sm:px-10 sm:py-16 lg:px-16"
      >
        <!-- Decorative shapes -->
        <div
          class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-orange/30 blur-2xl"
        />

        <div
          class="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-brand-yellow/20 blur-2xl"
        />

        <div class="relative mx-auto max-w-2xl">
          <h2 class="text-3xl font-bold sm:text-4xl">
            {{ t("contactPage.cta.title") }}
          </h2>

          <p class="mt-5 leading-8 text-white/85">
            {{ t("contactPage.cta.description") }}
          </p>

          <BaseButton
            class="mt-8 bg-white !text-brand hover:bg-gray-100"
            :href="whatsappUrl"
            target="_blank"
          >
            <MessageCircle class="size-5" />

            {{ t("contactPage.cta.button") }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
