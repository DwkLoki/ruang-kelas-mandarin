<script setup lang="ts">
import { BookOpen, Globe } from "lucide-vue-next";

const navigation = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Packages", id: "packages" },
  { label: "Teachers", id: "teachers" },
  { label: "Promotion", id: "promotion" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact Us", id: "contact" },
];

const activeSection = ref("home");
const selectedLanguage = ref("en");
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <div class="container-custom flex h-20 items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="shrink-0">
        <NuxtImg
          src="/images/logo/rkm-nav-logo.svg"
          alt="Ruang Kelas Mandarin"
          class="h-12 w-auto"
        />
      </NuxtLink>

      <!-- Navigation -->
      <nav>
        <ul class="flex items-center gap-8">
          <li v-for="item in navigation" :key="item.id">
            <NuxtLink
              :class="[
                'text-sm font-medium transition-colors duration-200 cursor-pointer',
                activeSection === item.id
                  ? 'text-brand'
                  : 'text-heading hover:text-brand',
              ]"
              :to="`#${item.id}`"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-5">
        <!-- Language -->
        <div class="flex items-center gap-2">
          <Globe class="size-4 text-body" />

          <select
            v-model="selectedLanguage"
            class="cursor-pointer bg-transparent text-sm font-medium text-heading focus:outline-none"
          >
            <option value="id">ID</option>
            <option value="en">ENG</option>
            <option value="zh">中文</option>
          </select>
        </div>

        <!-- CTA -->
        <BaseButton size="sm">
          <BookOpen class="size-4" />
          Course List
        </BaseButton>
      </div>
    </div>
  </header>
</template>
