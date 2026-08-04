<script setup lang="ts">
import { BookOpen, Globe, Menu, X } from "lucide-vue-next";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

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
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    closeMobileMenu();
  }
};

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (!section) return;

  closeMobileMenu();

  const navbarHeight = 80;

  const top =
    section.getBoundingClientRect().top + window.scrollY - navbarHeight;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

const updateActiveSection = () => {
  const sections = document.querySelectorAll("section[id]");

  let current = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 120 && rect.bottom >= 120) {
      current = section.id;
    }
  });

  if (current) {
    activeSection.value = current;
  }
};

watch(isMobileMenuOpen, (isOpen) => {
  document.body.classList.toggle("overflow-hidden", isOpen);
});

onMounted(() => {
  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", updateActiveSection);
  updateActiveSection();
});

onBeforeUnmount(() => {
  document.body.classList.remove("overflow-hidden");
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("scroll", updateActiveSection);
});
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <div class="container-custom flex h-20 items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="shrink-0">
        <!-- Desktop -->
        <NuxtImg
          src="/images/logo/rkm-nav-logo.svg"
          alt="Ruang Kelas Mandarin"
          class="hidden h-12 w-auto lg:block"
        />

        <!-- Mobile -->
        <NuxtImg
          src="/images/logo/rkm-horizontal-logo.svg"
          alt="Ruang Kelas Mandarin"
          class="h-10 w-auto lg:hidden"
        />
      </NuxtLink>

      <!-- Navigation -->
      <nav class="hidden lg:block">
        <ul class="flex items-center gap-8">
          <li v-for="item in navigation" :key="item.id">
            <button
              @click="scrollToSection(item.id)"
              :class="[
                'block text-sm w-full rounded-xl text-left font-medium transition',
                activeSection === item.id
                  ? 'text-brand bg-brand/5'
                  : 'text-heading hover:bg-brand/5 hover:text-brand',
              ]"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </nav>

      <!-- Actions -->
      <div class="hidden items-center gap-5 lg:flex">
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

      <!-- Mobile Toggle -->
      <button
        class="flex h-11 w-11 items-center justify-center rounded-xl border border-border transition hover:bg-brand/5 lg:hidden"
        @click="toggleMobileMenu"
      >
        <Menu v-if="!isMobileMenuOpen" class="size-5" />

        <X v-else class="size-5" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="-translate-y-4 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-4 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="border-t border-border bg-white lg:hidden"
      >
        <div class="container-custom h-[calc(100vh-80px)] overflow-y-auto py-8">
          <ul class="space-y-2">
            <li v-for="item in navigation" :key="item.id">
              <button
                @click="scrollToSection(item.id)"
                :class="[
                  'block w-full rounded-xl px-4 py-3 text-left font-medium transition',
                  activeSection === item.id
                    ? 'bg-brand/10 text-brand'
                    : 'text-heading hover:bg-brand/5 hover:text-brand',
                ]"
              >
                {{ item.label }}
              </button>
            </li>
          </ul>

          <!-- Divider -->
          <div class="my-8 border-t border-border" />

          <!-- Language -->
          <div class="flex items-center gap-3">
            <Globe class="size-5 text-body" />

            <select
              v-model="selectedLanguage"
              class="w-full rounded-xl border border-border px-4 py-3"
            >
              <option value="id">Indonesia</option>
              <option value="en">English</option>
              <option value="zh">中文</option>
            </select>
          </div>

          <!-- CTA -->
          <BaseButton class="mt-6 w-full">
            <BookOpen class="size-4" />
            Course List
          </BaseButton>
        </div>
      </div>
    </Transition>
  </header>
</template>
