<script setup lang="ts">
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-vue-next";

const quickLinks = [
  "Home",
  "About",
  "Courses",
  "Teachers",
  "Gallery",
  "Testimonials",
];

const programs = [
  "Basic Class",
  "Scholarship Preparation",
  "Conversation Class",
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
            Bringing the best Mandarin learning experience through experienced
            teachers and interactive online classes.
          </p>

          <div class="mt-8 flex gap-3">
            <a
              href="#"
              class="flex h-11 w-11 border border-border items-center justify-center rounded-xl bg-white shadow-sm transition hover:bg-brand hover:text-white"
            >
              <Facebook :size="20" />
            </a>

            <a
              href="#"
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
            <h3 class="text-xl font-semibold text-heading">Quick Links</h3>

            <ul class="mt-6 space-y-4">
              <li v-for="item in quickLinks" :key="item">
                <NuxtLink
                  :to="'#'"
                  class="text-body transition hover:text-brand"
                >
                  {{ item }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Programs -->
          <div class="w-full lg:w-3/12">
            <h3 class="text-xl font-semibold text-heading">Programs</h3>

            <ul class="mt-6 space-y-4">
              <li v-for="item in programs" :key="item">
                <a href="#" class="text-body transition hover:text-brand">
                  {{ item }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="w-full md:w-4/12 lg:flex-1">
            <h3 class="text-xl font-semibold text-heading">Contact</h3>

            <div class="mt-6 space-y-5">
              <div class="flex gap-3">
                <MapPin class="mt-1 shrink-0 text-brand" :size="18" />

                <p class="text-body">
                  Jl. Veteran Utara No.230A, Kel. Mardekaya Utara, Kec.
                  Makassar, Kota Makassar, Sulawesi Selatan, 90141 (toko marmer
                  granite lt. 2)
                </p>
              </div>

              <div class="flex items-center gap-3">
                <Phone class="text-brand shrink-0" :size="18" />

                <p class="text-body">+62 813 8901 2117</p>
              </div>

              <div class="flex items-center gap-3">
                <Mail class="text-brand shrink-0" :size="18" />

                <p class="text-body">kelasmandarin@gmail.com</p>
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
          © {{ new Date().getFullYear() }}
          Ruang Kelas Mandarin. All rights reserved.
        </p>

        <div class="flex gap-6">
          <a href="#" class="text-body transition hover:text-brand">
            Privacy Policy
          </a>

          <a href="#" class="text-body transition hover:text-brand"> Terms </a>
        </div>
      </div>
    </div>
  </footer>
</template>
