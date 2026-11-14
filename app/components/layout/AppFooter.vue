<script setup lang="ts">
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-vue-next";

const { t } = useI18n();

const quickLinkKeys = [
  "footer.quickLinks.0",
  "footer.quickLinks.1",
  "footer.quickLinks.2",
  "footer.quickLinks.3",
  "footer.quickLinks.4",
  "footer.quickLinks.5",
];

const programKeys = [
  "footer.programs.0",
  "footer.programs.1",
  "footer.programs.2",
];
</script>
<template>
  <footer class="mt-14 border-t border-border bg-brand/5 md:mt-24">
    <div class="container-custom py-14 md:py-20">
      <div class="flex flex-col gap-12 lg:flex-row">
        <!-- Company -->
        <div class="flex w-full md:w-6/12 lg:w-4/12 flex-col">
          <NuxtLink to="/" class="shrink-0">
            <NuxtImg
              src="/images/logo/rkm-horizontal-logo.svg"
              alt="Ruang Kelas Mandarin"
              class="h-16 w-auto sm:h-20"
            />
          </NuxtLink>

          <p class="mt-6 leading-8 text-body">
            {{ t("footer.description") }}
          </p>

          <div class="mt-8 flex gap-3">
            <a
              href="#"
              class="flex h-11 w-11 border border-border items-center justify-center rounded-xl bg-white shadow-sm transition hover:bg-brand hover:text-white"
            >
              <Facebook :size="20" />
            </a>

            <a
              href="https://www.instagram.com/ruangkelas_mandarin?igsh=Z21qNzQ4NjJxZmd4"
              class="flex h-11 w-11 border border-border items-center justify-center rounded-xl bg-white shadow-sm transition hover:bg-brand hover:text-white"
            >
              <Instagram :size="20" />
            </a>

            <a
              href="#"
              class="flex h-11 w-11 border border-border items-center justify-center rounded-xl bg-white shadow-sm transition hover:bg-brand hover:text-white"
            >
              <Youtube :size="20" />
            </a>
          </div>
        </div>

        <div class="flex flex-col md:flex-row lg:w-full gap-8">
          <!-- Quick Links -->
          <div class="w-full lg:w-3/12">
            <h3 class="text-xl font-semibold text-heading">
              {{ t("footer.quickLinksTitle") }}
            </h3>

            <ul class="mt-6 space-y-4">
              <li v-for="key in quickLinkKeys" :key="key">
                <NuxtLink
                  :to="'#'"
                  class="text-body transition hover:text-brand"
                >
                  {{ t(key) }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Programs -->
          <div class="w-full lg:w-3/12">
            <h3 class="text-xl font-semibold text-heading">
              {{ t("footer.programsTitle") }}
            </h3>

            <ul class="mt-6 space-y-4">
              <li v-for="key in programKeys" :key="key">
                <a href="#" class="text-body transition hover:text-brand">
                  {{ t(key) }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="w-full md:w-4/12 lg:flex-1">
            <h3 class="text-xl font-semibold text-heading">
              {{ t("footer.contactTitle") }}
            </h3>

            <div class="mt-6 space-y-5">
              <div class="flex gap-3">
                <MapPin class="mt-1 shrink-0 text-brand" :size="18" />

                <p class="text-body">
                  {{ t("footer.address") }}
                </p>
              </div>

              <div class="flex items-center gap-3">
                <Phone class="text-brand shrink-0" :size="18" />

                <p class="text-body">+62 813 8901 2117</p>
              </div>

              <div class="flex items-center gap-3">
                <Mail class="text-brand shrink-0" :size="18" />

                <p class="text-body">ruangkelasmandarin@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center md:mt-20 md:flex-row"
      >
        <p class="text-body">
          © 2020 - {{ new Date().getFullYear() }}
          {{ t("footer.rights") }}
        </p>

        <div class="flex gap-6">
          <a href="#" class="text-body transition hover:text-brand">
            {{ t("footer.privacyPolicy") }}
          </a>

          <a href="#" class="text-body transition hover:text-brand">
            {{ t("footer.terms") }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
