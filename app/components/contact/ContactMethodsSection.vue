<script setup lang="ts">
import { Instagram, Mail, MessageCircle } from "lucide-vue-next";

const { t } = useI18n();

const contactMethods = [
  {
    key: "whatsapp",
    icon: MessageCircle,
    href: "https://wa.me/6281389012117",
  },
  {
    key: "email",
    icon: Mail,
    href: "mailto:EMAIL@example.com",
  },
  {
    key: "instagram",
    icon: Instagram,
    href: "https://www.instagram.com/ruangkelas_mandarin?igsh=Z21qNzQ4NjJxZmd4",
  },
];
</script>

<template>
  <section class="section-spacing">
    <div class="container-custom">
      <BaseSectionHeading align="center">
        {{ t("contactPage.methods.title") }}
      </BaseSectionHeading>

      <p class="mx-auto mt-6 max-w-2xl text-center leading-8 text-body">
        {{ t("contactPage.methods.description") }}
      </p>

      <div class="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
        <article
          v-for="method in contactMethods"
          :key="method.key"
          class="group rounded-3xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <!-- Icon -->
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white"
          >
            <component :is="method.icon" class="size-7" />
          </div>

          <!-- Content -->
          <h3 class="mt-6 text-xl font-bold text-heading">
            {{ t(`contactPage.methods.${method.key}.title`) }}
          </h3>

          <p class="mt-4 leading-7 text-body">
            {{ t(`contactPage.methods.${method.key}.description`) }}
          </p>

          <!-- Action -->
          <a
            :href="method.href"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-flex items-center font-semibold text-brand transition-colors hover:text-brand-orange"
          >
            {{ t(`contactPage.methods.${method.key}.action`) }}

            <span class="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
